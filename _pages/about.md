---
layout: about
title: Bio
permalink: /
subtitle: <a href='https://scbl.engr.tamu.edu/'>Scientific Computing and Biofluids Lab, Texas A&M University</a>.
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  address: >
    <p>242 Spence Street</p>
    <p>Suite 201A</p>
    <p>College Station, TX 77840</p>
news: true  # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---

I'm a Ph.D. student in Mechanical Engineering at Texas A&M University, working with <a href='https://engineering.tamu.edu/mechanical/profiles/borazjani-iman.html'>Dr. Iman Borazjani</a>. My research centers on computational fluid dynamics, with current focus on turbulence modeling and developing high-fidelity methods for complex flows involving turbulence, scalar transport, and fluid-structure interaction.

My current work involves building a high-fidelity Eulerian-Lagrangian solver for scalar <a href='https://doi.org/10.1063/1.869537'>Filtered Density Function (FDF)</a> transport. This work is foundational: the scalar FDF solver will eventually extend to joint <a href='https://ntrs.nasa.gov/api/citations/19990094265/downloads/19990094265.pdf'>velocity-scalar FDF (VFDF)</a>, enabling a new class of turbulence models where data-driven closures can be systematically developed and tested. The solver is being developed within the <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC2963478/'>curvilinear immersed boundary (CURVIB) method</a>, which handles complex geometries naturally, ensures momentum conservation explicitly, and scales efficiently to thousands of cores. The implementation involves Eulerian-Lagrangian coupling, solving stochastic differential equations that govern particle evolution (the Langevin equation equivalent of the Fokker-Planck equation), implementing closure terms for unclosed correlations, and conducting extensive validation and verification. Beyond the immediate research problem, I'm investing significant effort in software engineering: modular design, <a href='https://vishalkandala.me/docs/pic_dev/'>comprehensive documentation</a>, automated test cases, and a general framework that application-oriented researchers can use as a complete tool rather than a fragile research code. This work, which I call <a href='https://github.com/VishalKandala/PICurv'>PICurv</a>, is being released as open-source software and will be presented at <a href='https://dfd-meeting.aps.org/'>APS Division of Fluid Dynamics</a> in 2025.

The larger research agenda is closure model development. When extended to VFDF—and even for scalar transport in applications like combustion modeling, where reaction terms are not amenable to the filtering required for LES—the unclosed terms require modeling. This is where data-driven approaches become central to my work. I'll be using the FDF/VFDF framework to systematically explore how closures can be extracted from DNS and experimental data, developing methods to identify meaningful correlations and validate them within the solver. The goal is a structured cycle: build the framework, identify which closures are needed, design approaches to extract these from high-fidelity data, and rigorously test the resulting models.

This research direction emerged from a progression through different problems and methods. My undergraduate background included hands-on work—I co-founded an <a href='https://reemas28496.wixsite.com/website-2'>SAE Aero Design</a> team—but my first exposure to computational research came through <a href='https://drive.google.com/file/d/1DwoEgBX6dYB2jhTHjkKDuAkrd3cWpXIg/view?usp=sharing'>a design optimization problem for hypersonic reentry vehicles</a>. I used ANSYS Fluent to conduct parameter sweeps, varying aerospike geometry to reduce drag and surface temperature. The work was straightforward but introduced me to how simulation enables systematic exploration of design spaces that would be impractical experimentally.

In graduate school, I focused on building foundational skills: numerical methods, mathematical models, and the physics underlying different simulation approaches. I worked through a range of projects—implementing solvers, understanding discretization schemes, exploring different physical regimes—before applying these skills to combustion modeling in my master's project, where I extended the <a href='https://github.com/VishalKandala/Cantera-Radcal'>Cantera chemical kinetics package with radiation modeling</a> and coupled it to a compressible flow solver.

When I started my Ph.D., I shifted to biomedical applications, working on <a href='https://meetings.aps.org/Meeting/DFD23/Session/L06.9'>fluid-structure interaction simulations for Left Ventricular Assist Devices</a> and developing <a href='https://2023bmesannual.eventscribe.net/fsPopup.asp?PosterID=606755&mode=posterInfo'>a physics-informed framework for cardiac pressure-volume relationships</a> (currently being prepared for submission to Nature Scientific Reports). This shift was initially jarring, but it revealed something important: the generality of these computational methods across vastly different applications.

The biomedical work exposed me to data-driven modeling. The cardiac project required integrating sparse experimental measurements with mechanistic models, and that led me to explore physics-informed machine learning more systematically. I worked on developing a hybrid automatic-numerical differentiation approach for physics-informed neural networks (the SACPINN project) to better understand both the capabilities and limitations of these techniques. This exploration wasn't about adopting the latest methods uncritically—it was about learning the language well enough to evaluate where these approaches might actually be useful.

What became clear through this progression is that turbulence closure modeling is a domain where data-driven methods are particularly appropriate. The field has relied on empirical relationships since its inception, and unclosed terms remain the fundamental bottleneck. Working across these different problems also made the scale of computational challenges in CFD visceral—turbulence in particular demands HPC, and I became fascinated by how these systems are designed. There's an elegance to well-architected parallel algorithms, similar to what I appreciated when first encountering calculus, linear algebra, or Laplace transforms: clever mathematical constructs that unlock entire classes of problems.

My current work sits at the confluence of HPC, CFD, fundamental physics, and data-driven methods. It's driven by genuine curiosity about how turbulence can be modeled more effectively, appreciation for the computational infrastructure that makes such work possible, and ongoing learning about both the physics and the methods.
