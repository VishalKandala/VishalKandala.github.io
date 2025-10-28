---
layout: page
title: PICurv
description: Parallel Eulerian-Lagrangian solver for turbulent scalar transport using Filtered Density Function methods
img: assets/img/picurv/picurv_main.png
importance: 1
category: Research
github: https://github.com/VishalKandala/PICurv
---

## The Turbulent Scalar Transport Challenge

Turbulent flows mix and transport scalars—temperature, species concentrations, pollutants—in complex ways that determine outcomes from combustion efficiency to atmospheric dispersion. Traditional Large Eddy Simulation (LES) approaches face a fundamental challenge: they must model the chemical source terms at subgrid scales, introducing uncertainties that compound in reacting flows. The closure problem becomes particularly acute when dealing with finite-rate chemistry, where small-scale fluctuations in composition and temperature dramatically affect reaction rates.

PICurv tackles this problem head-on using the Filtered Density Function (FDF) approach, where stochastic Lagrangian particles eliminate modeling assumptions for chemistry while providing a foundation for data-driven turbulence closure models.

---

## Governing Equations: The LES Framework

In Large Eddy Simulation, we apply a spatial filter to the governing equations, resolving large-scale turbulent structures while modeling subgrid-scale (SGS) effects. For a passive or reacting scalar $$\phi$$ (temperature, species mass fraction, etc.), the filtered transport equation is:

$$
\frac{\partial \bar{\phi}}{\partial t} + \frac{\partial}{\partial x_j}(\tilde{u}_j \bar{\phi}) = \frac{\partial}{\partial x_j}\left(\Gamma \frac{\partial \bar{\phi}}{\partial x_j}\right) - \frac{\partial}{\partial x_j}(\tau_j^{\phi}) + \overline{S(\phi)}
$$

where:
- $$\bar{\phi}$$ is the filtered scalar
- $$\tilde{u}_j$$ is the filtered (Favre-averaged) velocity from the LES flow solver
- $$\Gamma$$ is the molecular diffusivity
- $$\tau_j^{\phi} = \overline{u_j \phi} - \tilde{u}_j \bar{\phi}$$ is the subgrid-scale scalar flux (requires modeling)
- $$\overline{S(\phi)}$$ is the filtered chemical source term (requires modeling)

### The Closure Problem

Two critical terms require closure models:

1. **SGS Scalar Flux** $$\tau_j^{\phi}$$: Typically modeled using gradient diffusion assumptions (e.g., Smagorinsky-type models), but these are approximate and may not capture backscatter or complex SGS dynamics.

2. **Filtered Source Term** $$\overline{S(\phi)}$$: For reacting flows with finite-rate chemistry, this is highly nonlinear. Standard approaches (assumed PDFs, flamelet models) impose restrictive assumptions about the SGS composition distribution.

**The challenge:** Both closures introduce modeling errors that accumulate and can dominate solution accuracy in complex flows.

---

## The Filtered Density Function Approach

The FDF approach offers a fundamentally different perspective. Instead of tracking scalar means $$\bar{\phi}$$, we track the **filtered probability density function** of scalar values at subgrid scales.

### Definition

The scalar FDF is defined as:

$$
\tilde{P}(\psi; \mathbf{x}, t) = \int G(\mathbf{x} - \mathbf{x}') \rho(\mathbf{x}') P(\psi; \mathbf{x}', t) d\mathbf{x}'
$$

where:
- $$\psi$$ is the sample space variable for scalar $$\phi$$
- $$G$$ is the LES filter kernel
- $$P(\psi; \mathbf{x}', t) = \delta(\psi - \phi(\mathbf{x}', t))$$ is the fine-grained density
- $$\tilde{P}$$ represents the filtered probability of finding scalar values in the range $$[\psi, \psi + d\psi]$$ within a filter volume

The key insight: if we know $$\tilde{P}$$, we can compute any filtered scalar moment:

$$
\bar{\phi} = \int \psi \tilde{P}(\psi) d\psi, \quad \overline{\phi^2} = \int \psi^2 \tilde{P}(\psi) d\psi, \quad \text{etc.}
$$

### FDF Transport Equation

The FDF evolves according to:

$$
\frac{\partial \tilde{P}}{\partial t} + \frac{\partial}{\partial x_j}(\tilde{u}_j \tilde{P}) = -\frac{\partial}{\partial \psi}[\langle S(\psi) | \psi \rangle \tilde{P}] - \frac{\partial}{\partial x_j}\langle u_j'' | \psi \rangle \tilde{P} + \frac{\partial}{\partial \psi}\left[\langle \frac{\partial}{\partial x_j}\left(\Gamma \frac{\partial \phi}{\partial x_j}\right) \Big| \psi \rangle \tilde{P}\right]
$$

where $$\langle \cdot | \psi \rangle$$ denotes conditional expectation given $$\phi = \psi$$.

**The crucial advantage:** The chemical source term $$S(\psi)$$ appears **in closed form**—no modeling assumptions needed! For any known chemical kinetics mechanism, we can evaluate $$S(\psi)$$ exactly given composition $$\psi$$.

### Paradigm Shift: Traditional LES vs FDF-LES

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/traditional_vs_fdf.png" title="Traditional LES vs FDF-LES comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of traditional LES (modeling source terms) versus FDF-LES approach (exact source term closure). [Image placeholder: Create diagram showing the two approaches side by side]
</div>

**Traditional LES:**
- Solves for filtered mean scalars $$\bar{\phi}$$
- Requires closure models for both SGS flux **and** source terms
- Source term closure requires assumed PDF shapes or lookup tables
- Accumulates modeling errors

**FDF-LES:**
- Tracks full subgrid probability distributions $$\tilde{P}(\psi)$$
- Chemical source term closed exactly (no assumptions!)
- Still requires models for SGS convection and mixing
- Provides foundation for data-driven closure of transport terms

---

## Why Lagrangian Particles?

While the FDF transport equation can theoretically be solved on an Eulerian mesh, this approach faces severe computational challenges:

### The Grid-Lock Problem

1. **PDF Positivity:** FDFs must remain positive semi-definite, but standard discretization schemes can produce negative values
2. **Multiscale Chemistry:** Composition space often requires high resolution (many chemical species), leading to curse of dimensionality
3. **Numerical Diffusion:** Eulerian schemes introduce artificial diffusion that smears the PDF
4. **Mesh Resolution Mismatch:** Physical space LES grid may not align well with composition space resolution needs

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/grid_lock_illustration.png" title="Illustration of grid-lock issues in Eulerian FDF" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Challenges of solving FDF transport on Eulerian grids. [Image placeholder: Illustrate numerical diffusion, PDF negativity issues]
</div>

### The Lagrangian Solution

Lagrangian particles provide an elegant alternative by solving equivalent **stochastic differential equations (SDEs)**.

#### From Fokker-Planck to Langevin

The FDF transport equation is a Fokker-Planck equation in combined physical-composition space. By the **Fokker-Planck ⇄ Langevin equivalence**, we can solve an equivalent system of stochastic differential equations (SDEs) for particle trajectories.

For particle $$p$$ with position $$\mathbf{X}^p(t)$$ and composition $$\boldsymbol{\Phi}^p(t)$$:

$$
d\mathbf{X}^p = \tilde{\mathbf{u}}(\mathbf{X}^p, t) dt + \mathbf{B}(\mathbf{X}^p, t) d\mathbf{W}_x^p
$$

$$
d\boldsymbol{\Phi}^p = \mathbf{S}(\boldsymbol{\Phi}^p) dt + \mathbf{M}(\boldsymbol{\Phi}^p, \mathbf{X}^p, t) dt
$$

where:
- $$\tilde{\mathbf{u}}$$ is the filtered velocity field (from LES solver)
- $$\mathbf{B}$$ represents SGS turbulent dispersion (requires modeling)
- $$\mathbf{W}_x^p$$ is a Wiener process (Brownian motion)
- $$\mathbf{S}$$ is the chemical source term (closed!)
- $$\mathbf{M}$$ represents scalar mixing at subgrid scales (requires modeling)

**In practice,** these are advanced using operator splitting:

1. **Physical space transport:** Euler-Maruyama scheme for position update (drift + dispersion)
   $$
   \mathbf{X}^{p, n+1} = \mathbf{X}^{p, n} + \tilde{\mathbf{u}}(\mathbf{X}^{p, n}) \Delta t + \mathbf{B}(\mathbf{X}^{p, n}) \sqrt{\Delta t} \, \boldsymbol{\xi}^p
   $$
   where $$\boldsymbol{\xi}^p$$ is a vector of random numbers from $$\mathcal{N}(0, 1)$$

2. **Composition space evolution:** Stiff ODE solver for chemistry + mixing
   $$
   \frac{d\boldsymbol{\Phi}^p}{dt} = \mathbf{S}(\boldsymbol{\Phi}^p) + \mathbf{M}(\boldsymbol{\Phi}^p, \langle \boldsymbol{\Phi} \rangle, \tau_{mix})
   $$
   Common mixing models include:
   - **IEM (Interaction by Exchange with the Mean):** Relaxation toward local filtered mean
   - **EMST (Euclidean Minimum Spanning Tree):** Pairwise mixing
   - **Curl:** Modified Curl mixing model

### Three Key Advantages

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/particle_advantages.png" title="Advantages of Lagrangian particle approach" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Key benefits of the Lagrangian particle method for FDF transport. [Image placeholder: Visual comparison of advantages]
</div>

1. **Zero Numerical Diffusion**
   - Particles carry scalar information exactly as they advect
   - PDF sharpness naturally preserved without artificial smoothing
   - No grid-induced smearing of composition distributions

2. **Unified Statistics**
   - Same particle ensemble yields all moments: $$\bar{\phi}$$, $$\overline{\phi'^2}$$, $$\overline{S(\phi)}$$, full PDFs
   - No need for separate scalar transport equations or assumed PDF shapes
   - Consistency across all statistical quantities

3. **Simple Large-Timestep Chemistry**
   - Composition update is an ODE per particle (not PDE)
   - Timestep not restricted by CFL in composition space
   - Stiff chemistry solvers handle widely varying timescales naturally
   - Vectorization/parallelization over particle ensembles

---

## Building PICurv: Implementation & HPC Challenges

PICurv is being developed as production-quality scientific software with a focus on scalability, maintainability, and extensibility. The implementation addresses several interconnected challenges in parallel Eulerian-Lagrangian coupling.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/code_architecture.png" title="PICurv code architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Modular architecture of PICurv showing major components and data flow. [Image placeholder: Block diagram of code structure]
</div>

### Parallel Architecture for Massive Particle Populations

The solver is designed from the ground up for distributed-memory parallelism using MPI, targeting simulations with millions to tens of millions of particles across 1000+ compute cores.

**Key HPC Challenges:**

1. **Dynamic Load Balancing**
   - Particles migrate between MPI ranks as they advect through the domain
   - Maintaining balanced computational load as particle distributions evolve
   - Efficient particle redistribution strategies with minimal communication overhead

2. **Particle-Grid Communication Patterns**
   - Particles need access to Eulerian fields (velocity, pressure, SGS quantities) for position updates
   - Eulerian solver needs particle statistics for filtered quantities
   - Two-way coupling requires careful orchestration of scatter/gather operations
   - Minimizing latency and maximizing bandwidth utilization

3. **Memory Management at Scale**
   - Particle data structures must fit within node memory limits
   - Dynamic memory allocation/deallocation as particles cross rank boundaries
   - Efficient storage layouts for cache performance

4. **Scalable I/O**
   - Parallel output of massive particle datasets for post-processing
   - Checkpointing strategies for fault tolerance on long-running jobs
   - Balancing I/O frequency with storage costs

### Integration with CURVIB Framework

CURVIB (Curvilinear Immersed Boundary) is an established sharp-interface immersed boundary method for simulating flows around complex geometries on body-fitted curvilinear grids. Integrating particle transport into this framework introduces several technical challenges:

**Curvilinear Grid Considerations:**

- **Geometric Transformations:** Particle positions must be tracked in both physical and computational coordinates
- **Metric Tensor Computations:** Grid stretching and skewness affect interpolation accuracy
- **Boundary Treatment:** Particles near immersed boundaries require special handling
- **Grid Cell Location:** Efficient algorithms for determining which grid cell contains each particle in non-Cartesian meshes

**Data Structure Design:**

- Hybrid storage combining structured grid data (Eulerian) with unstructured particle data (Lagrangian)
- Efficient spatial indexing for particle-grid queries on curvilinear meshes
- Maintaining conservation properties during interpolation/projection operations

### Leveraging PETSc for Linear Algebra

The Eulerian LES solver uses PETSc (Portable, Extensible Toolkit for Scientific Computation) for parallel linear algebra operations. This includes:

- Krylov subspace methods (GMRES, BiCGStab) for pressure Poisson equation
- Preconditioners (ILU, algebraic multigrid) for iterative solvers
- Distributed sparse matrix operations
- Integration with particle solver requires careful management of PETSc objects and MPI communicators

### Software Engineering Practices

Beyond algorithmic development, emphasis is placed on code quality and maintainability:

**Code Organization:**
- Modular design with clear separation of concerns (particle evolution, field coupling, I/O, etc.)
- Object-oriented architecture in C++ for extensibility
- Template metaprogramming for performance-critical kernels without sacrificing generality

**Documentation & Testing:**
- Comprehensive Doxygen documentation for all public interfaces
- Inline comments explaining algorithmic choices and implementation details
- Automated test suite for regression testing
- Unit tests for individual components
- Integration tests for coupled Eulerian-Lagrangian system

**Development Workflow:**
- Version control with Git (GitHub repository)
- Continuous integration for automated testing
- Performance profiling and optimization workflows
- Benchmarking against analytical solutions and reference cases

---

## Scalability Analysis

The parallel performance of PICurv has been evaluated through preliminary scalability studies on leadership-class HPC systems. These tests inform ongoing optimization efforts.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/strong_scaling.png" title="Strong scaling results" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/weak_scaling.png" title="Weak scaling results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Preliminary scalability results showing (left) strong scaling for fixed problem size and (right) weak scaling with problem size proportional to core count. [Image placeholders: Generic scaling plots with log-log axes, showing parallel efficiency trends]
</div>

**Preliminary Results:**
- Strong scaling tests demonstrate good parallel efficiency up to tested core counts
- Weak scaling results show promise for large-scale production runs
- Communication overhead remains manageable for target particle densities
- Further optimization ongoing to improve scalability envelope

**Target Performance Goals:**
- Millions of particles across 1000+ cores
- Parallel efficiency > 80% at scale
- Suitable for DNS-level LES grids (10⁷–10⁹ cells)

**Note:** These are preliminary results from an ongoing dissertation project. Full performance characterization and optimization studies are in progress.

---

## Test Cases & Validation

Current validation focuses on canonical turbulent flows where reference data is available. Two primary test cases are being used to develop and verify the solver:

### Fully Developed Turbulent Channel Flow

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/channel_particles.gif" title="Particle evolution in channel flow" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/channel_pdf.png" title="Scalar PDF evolution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Left) Particle positions colored by scalar value in fully developed turbulent channel flow. (Right) Evolution of scalar PDF at different wall-normal locations. [Image placeholders: GIF showing particle advection, PNG showing PDF distributions]
</div>

**Configuration:**
- Square channel geometry
- Friction Reynolds number Re_τ = 395
- Passive scalar with source term at wall
- Periodic boundary conditions in streamwise/spanwise directions

**Validation Metrics:**
- Mean scalar profiles compared to DNS data
- Scalar variance evolution
- PDF shapes at different wall distances
- Turbulent scalar flux statistics

### Turbulent Flow in a Bent Channel

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/bent_channel_particles.gif" title="Particles in bent channel" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/bent_channel_stats.png" title="Statistics in bent channel" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Left) Particle evolution through 90° bend in square channel. (Right) Scalar statistics showing effects of secondary flows. [Image placeholders: GIF of particles through bend, PNG of statistical profiles]
</div>

**Configuration:**
- 90° square cross-section bend
- Friction Reynolds number Re_τ = 395
- Tests particle behavior in regions with:
  - Strong pressure gradients
  - Secondary flow development
  - Flow separation (if present)

**Validation Focus:**
- Particle dispersion in complex geometry
- PDF evolution through bend
- Effect of secondary flows on scalar mixing
- Conservation properties in presence of strong gradients

---

## Current Status & Future Directions

**Dissertation Context:**

PICurv is being developed as the core contribution of an ongoing Ph.D. dissertation focused on data-driven turbulence closure models. The work is currently unpublished, with manuscripts in preparation for peer-reviewed journals.

**Current Capabilities:**
- ✅ Scalar FDF solver operational on curvilinear grids
- ✅ Parallel implementation with MPI/PETSc
- ✅ Integration with CURVIB framework
- ✅ Basic validation test cases running
- 🔄 Scalability optimization in progress
- 🔄 Extended validation suite under development

**Near-Term Roadmap:**

1. **Velocity-Scalar FDF (VFDF) Extension**
   - Joint velocity-composition PDF transport
   - Eliminates need for SGS stress modeling
   - Enables fully data-driven closure development

2. **Data-Driven Closure Models**
   - Machine learning for SGS convection term
   - Physics-informed neural networks for mixing models
   - Training/validation using high-fidelity DNS data

3. **Production Applications**
   - Turbulent combustion simulations
   - Atmospheric dispersion studies
   - Industrial mixing processes

**Long-Term Vision:**

Establish FDF-LES as a practical tool for complex reacting flows, with closure models learned from data rather than imposed through modeling assumptions. The goal is to create a framework where machine learning algorithms discover optimal turbulence closure strategies directly from high-fidelity simulation data.

---

## Resources & Documentation

**Code Repository:**
- [GitHub: VishalKandala/PICurv](https://github.com/VishalKandala/PICurv)
- Open-source release planned upon publication

**Documentation:**
- [Developer Documentation](https://vishalkandala.me/docs/pic_dev/)
- API reference, build instructions, usage examples

**Presentations:**
- [APS DFD 2025 Houston] - "A Parallel Particle-In-Cell (PIC) Solver on Curvilinear Grids for Turbulent Flow Simulation" (Accepted)
- [APS DFD 2023 Washington DC] - "High Resolution Numerical Simulations of LVAD Outflow Graft Haemodynamics"

**Contact:**
For questions about PICurv or potential collaborations, reach out via [email](mailto:vishalkandala@tamu.edu).

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/picurv/team_logo.png" title="Scientific Computing and Biofluids Lab" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Developed in the Scientific Computing and Biofluids Lab at Texas A&M University under the supervision of Dr. Iman Borazjani.
</div>
