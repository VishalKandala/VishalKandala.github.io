---
layout: page
title: PyJST
description: A compact Python/NumPy implementation of the JST finite-volume scheme for 2D compressible Euler flow
importance: 2
category: Research
github: https://github.com/VishalKandala/PyJST
---

## Overview

PyJST is a compact, educational solver for steady two-dimensional inviscid
compressible flow. It implements a cell-centred finite-volume discretization
of the Euler equations with Jameson--Schmidt--Turkel (JST) artificial
dissipation. The project is intended to make the numerical method inspectable:
the full solver is written with vectorized NumPy operations and has focused
tests for each numerical layer.

The solver evolves the conservative state

$$
Q=[\rho,\rho u,\rho v,\rho E]^T
$$

for a calorically perfect gas in SI units.

## What it supports

- Structured Cartesian grids and structured body-fitted quadrilateral meshes.
- Central finite-volume Euler fluxes evaluated with physical face vectors.
- JST second- and fourth-order artificial dissipation.
- Four-stage explicit Runge--Kutta pseudo-time marching.
- Local time stepping, normalized residual monitoring, and CFL ramping.
- Periodic, supersonic inflow, supersonic outflow, and structured slip-wall
  boundary conditions.
- A uniform-flow verification case and a body-fitted compression-corner case.

PyJST is deliberately small. It is not a production CFD solver and currently
does not provide viscous physics, turbulence models, unstructured grids,
subsonic characteristic boundaries, multigrid, or GPU execution.

## Method

For a cell with area \(V_i\), the pseudo-time update is based on

$$
\frac{dQ_i}{d\tau}=-\frac{1}{V_i}
\left(R_i^{\mathrm{conv}}-D_i^{\mathrm{JST}}\right).
$$

The central convective flux through a face with vector
\(\mathbf{S}=(S_x,S_y)\) is

$$
\Phi=F(Q)S_x+G(Q)S_y,
$$

with

$$
F=\begin{bmatrix}\rho u\\\rho u^2+p\\\rho uv\\(\rho E+p)u\end{bmatrix},
\qquad
G=\begin{bmatrix}\rho v\\\rho uv\\\rho v^2+p\\(\rho E+p)v\end{bmatrix}.
$$

Central fluxes need stabilization around discontinuities. JST adds a face
dissipation flux

$$
d_{i+1/2}=\lambda_{i+1/2}
\left[\epsilon^{(2)}(Q_{i+1}-Q_i)-\epsilon^{(4)}\Delta^3Q_i\right].
$$

The pressure sensor raises \(\epsilon^{(2)}\) near shocks, producing robust
second-order damping; away from shocks, the fourth-order term damps smooth
high-frequency error. The spectral radius is

$$
\lambda=|\mathbf{u}\cdot\mathbf{S}|+a|\mathbf{S}|,
\qquad a=\sqrt{\gamma p/\rho}.
$$

Each pseudo-time iteration uses the four JST Runge--Kutta coefficients
\([1/4,1/3,1/2,1]\). The solver uses local spectral-radius time steps, ramps
the CFL number from a conservative start, and reports the maximum residual
normalized by its first iteration.

## Verification and benchmark case

### Uniform Mach-2 flow

The first verification problem is uniform Mach-2 flow on a 64 x 32 Cartesian
grid. With periodic cross-stream boundaries and supersonic streamwise
conditions, the exact result is unchanged flow. PyJST preserves that state
exactly: zero residual and zero conservative-state change after one iteration.

### Mach-2, 10-degree compression corner

The primary physical case uses a 160 x 80 body-fitted mesh with a lower slip
wall. The reference solution is the weak branch of the oblique-shock
theta-beta-M relation:

| Quantity | Reference |
| --- | ---: |
| Shock angle | 39.3139 degrees |
| \(p_2/p_1\) | 1.706579 |
| \(M_2\) | 1.640522 |

The mesh generator, face geometry, boundary treatment, and analytic reference
are all tested. A grid-refined numerical comparison of shock position and
post-shock state is the remaining validation milestone.

## Running the project

PyJST requires Python 3.12+ and NumPy; Python 3.14 is the recommended
development runtime.

```bash
git clone https://github.com/VishalKandala/PyJST.git
cd PyJST
python -m pip install -e .
python -m unittest discover -s tests -v
```

For older Python environments, upgrade `pip` and `setuptools` before the
editable install if necessary.

Run the uniform-flow verification case with `pyjst --case uniform`; use
`python -m pyjst` if your shell has not installed the command-line entry
point. The compression-corner demonstrator is available with
`pyjst --case compression-corner --iterations 1000 --cfl 0.4`.

## Controls and extension points

The command-line interface exposes the main demonstrator controls:

| Control | Purpose |
| --- | --- |
| `--case` | Select `uniform` or `compression-corner`. |
| `--nx`, `--ny` | Set physical mesh resolution. |
| `--iterations`, `--tolerance` | Set the pseudo-time stopping policy. |
| `--cfl`, `--cfl-initial`, `--cfl-ramp` | Control local-time-step aggressiveness. |
| `--mach`, `--deflection` | Set the compression-corner upstream Mach number and wedge angle. |

For scripted studies, `GasModel`, `Freestream`, `GridSpec`,
`CompressionCornerCase`, and `JSTParameters` expose the gas, flow, geometry,
mesh, boundary, dissipation, Runge--Kutta, and convergence controls directly.
Users can therefore run parameter sweeps over Mach number, wedge angle, mesh
resolution, CFL schedule, and JST coefficients without modifying package
source.

The [source repository](https://github.com/VishalKandala/PyJST) contains the
complete package, tests, and runnable case definitions.
