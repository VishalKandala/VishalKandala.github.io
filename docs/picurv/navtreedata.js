/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "PICurv", "index.html", [
    [ "PICurv Solver Documentation", "index.html", "index" ],
    [ "Changelog", "18_Changelog.html", [
      [ "Changelog", "18_Changelog.html#autotoc_md11", [
        [ "Unreleased", "18_Changelog.html#autotoc_md12", null ]
      ] ]
    ] ],
    [ "Installation Guide", "01_Installation.html", [
      [ "1. Prerequisites", "01_Installation.html#prereqs_sec", null ],
      [ "2. Install Base Toolchain", "01_Installation.html#install_tools_sec", null ],
      [ "3. Install PETSc", "01_Installation.html#petsc_sec", null ],
      [ "4. Configure Environment Variables", "01_Installation.html#env_sec", null ],
      [ "5. Clone PICurv", "01_Installation.html#clone_sec", null ],
      [ "6. Build with pic.flow", "01_Installation.html#build_sec", null ],
      [ "7. Verify Installation", "01_Installation.html#verify_sec", null ],
      [ "8. Common Installation Failures", "01_Installation.html#common_sec", null ],
      [ "9. Next Steps", "01_Installation.html#next_steps_sec", null ]
    ] ],
    [ "Tutorial: Your First Simulation (Flat Channel)", "02_Tutorial_Programmatic_Grid.html", [
      [ "1. Tutorial Goal", "02_Tutorial_Programmatic_Grid.html#goal_sec", null ],
      [ "2. Initialize the Study Directory", "02_Tutorial_Programmatic_Grid.html#init_sec", null ],
      [ "3. Understand File Roles", "02_Tutorial_Programmatic_Grid.html#roles_sec", null ],
      [ "4. Validate Inputs Before Launch", "02_Tutorial_Programmatic_Grid.html#validate_sec", null ],
      [ "5. Run Solver and Postprocessor", "02_Tutorial_Programmatic_Grid.html#run_sec", null ],
      [ "6. Inspect Generated Artifacts", "02_Tutorial_Programmatic_Grid.html#artifacts_sec", null ],
      [ "7. First Validation Checks", "02_Tutorial_Programmatic_Grid.html#checks_sec", null ],
      [ "8. Visualize in ParaView", "02_Tutorial_Programmatic_Grid.html#viz_sec", null ],
      [ "9. Common First-Run Issues", "02_Tutorial_Programmatic_Grid.html#troubleshooting_sec", null ]
    ] ],
    [ "Tutorial: Using a File-Based Grid (Bent Channel)", "03_Tutorial_File-Based_Grid.html", [
      [ "2. File-Grid Configuration", "03_Tutorial_File-Based_Grid.html#config_sec", null ]
    ] ],
    [ "Tutorial: A Guide to Visualizing Your Results", "04_Visualization_Tutorial.html", [
      [ "1. Understanding Your Output Files", "04_Visualization_Tutorial.html#files_sec", [
        [ "1.1. Common Data Fields", "04_Visualization_Tutorial.html#datafields_sec", null ]
      ] ],
      [ "2. The ParaView Interface", "04_Visualization_Tutorial.html#paraview_basics_sec", null ],
      [ "3. Recipes for Visualizing Grid Data (.vts files)", "04_Visualization_Tutorial.html#eulerian_recipes_sec", [
        [ "3.1. Recipe: Coloring by a Scalar Field", "04_Visualization_Tutorial.html#recipe_color_sec", null ],
        [ "3.2. Recipe: Creating a Cross-Section (Slice)", "04_Visualization_Tutorial.html#recipe_slice_sec", null ],
        [ "3.3. Recipe: Showing Velocity Vectors (Glyphs)", "04_Visualization_Tutorial.html#recipe_vectors_sec", null ],
        [ "3.4. Recipe: Tracing Flow Paths (Streamlines)", "04_Visualization_Tutorial.html#recipe_streams_sec", null ]
      ] ],
      [ "4. Recipes for Visualizing Particle Data (.vtp files)", "04_Visualization_Tutorial.html#lagrangian_recipes_sec", null ],
      [ "5. Saving Your Work", "04_Visualization_Tutorial.html#export_sec", null ],
      [ "5.1 Practical Notes", "04_Visualization_Tutorial.html#practical_notes_sec", null ]
    ] ],
    [ "The Conductor Script: pic.flow", "05_The_Conductor_Script.html", [
      [ "1. General Usage", "05_The_Conductor_Script.html#usage_sec", null ],
      [ "3. sweep: Parameter Study via Slurm Arrays", "05_The_Conductor_Script.html#sweep_sec", null ]
    ] ],
    [ "Anatomy of a Simulation", "06_Simulation_Anatomy.html", [
      [ "2. Composition in Practice", "06_Simulation_Anatomy.html#compose_sec", null ],
      [ "4. Reusable Config Libraries", "06_Simulation_Anatomy.html#libraries_sec", null ]
    ] ],
    [ "Configuration Reference: Case YAML", "07_Case_Reference.html", [
      [ "1. properties", "07_Case_Reference.html#properties_sec", null ],
      [ "2. run_control", "07_Case_Reference.html#run_control_sec", null ],
      [ "3. grid", "07_Case_Reference.html#grid_sec", [
        [ "3.1 mode: programmatic_c", "07_Case_Reference.html#grid_prog_ssec", null ],
        [ "3.2 mode: file", "07_Case_Reference.html#grid_file_ssec", null ],
        [ "3.3 mode: grid_gen", "07_Case_Reference.html#grid_gen_ssec", null ]
      ] ],
      [ "4. models", "07_Case_Reference.html#models_sec", null ],
      [ "5. boundary_conditions", "07_Case_Reference.html#bc_sec", null ],
      [ "6. solver_parameters (Advanced)", "07_Case_Reference.html#passthrough_sec", null ]
    ] ],
    [ "Configuration Reference: Solver YAML", "08_Solver_Reference.html", [
      [ "1. operation_mode", "08_Solver_Reference.html#opmode_sec", null ],
      [ "2. strategy", "08_Solver_Reference.html#strategy_sec", null ],
      [ "3. tolerances", "08_Solver_Reference.html#tol_sec", null ],
      [ "4. momentum_solver (Solver-Specific Block)", "08_Solver_Reference.html#msolver_sec", null ],
      [ "5. pressure_solver", "08_Solver_Reference.html#pressure_sec", null ]
    ] ],
    [ "Configuration Reference: Monitor YAML", "09_Monitor_Reference.html", [
      [ "1. io", "09_Monitor_Reference.html#io_sec", null ],
      [ "2. logging", "09_Monitor_Reference.html#logging_sec", null ],
      [ "3. profiling", "09_Monitor_Reference.html#profiling_sec", null ],
      [ "4. solver_monitoring", "09_Monitor_Reference.html#solver_monitoring_sec", null ]
    ] ],
    [ "Configuration Reference: Postprocessor YAML", "10_Post_Processing_Reference.html", [
      [ "1. File Structure", "10_Post_Processing_Reference.html#structure_sec", null ],
      [ "3. source_data", "10_Post_Processing_Reference.html#source_sec", null ],
      [ "4. Processing Pipelines", "10_Post_Processing_Reference.html#pipelines_sec", null ],
      [ "5. Statistics Pipeline", "10_Post_Processing_Reference.html#stats_sec", null ]
    ] ],
    [ "User How-To Guides", "11_User_How_To_Guides.html", [
      [ "1. Setup and Physics", "11_User_How_To_Guides.html#setup_sec", [
        [ "1.1 Change Reynolds Number", "11_User_How_To_Guides.html#reynolds_ssec", null ],
        [ "1.2 Run in 2D", "11_User_How_To_Guides.html#twod_ssec", null ],
        [ "1.3 Increase Grid Resolution", "11_User_How_To_Guides.html#gridres_ssec", null ],
        [ "2.1 Set a Constant-Velocity Inlet and Walls", "11_User_How_To_Guides.html#bc_simple_ssec", null ],
        [ "2.2 Enable Periodicity in One Direction", "11_User_How_To_Guides.html#bc_periodic_ssec", null ],
        [ "3.1 Run in Parallel and Control DMDA Layout", "11_User_How_To_Guides.html#mpi_ssec", null ],
        [ "3.2 Run on Slurm (Generate and Submit)", "11_User_How_To_Guides.html#cluster_run_ssec", null ],
        [ "3.3 Restart from a Saved Step", "11_User_How_To_Guides.html#restart_ssec", null ],
        [ "3.4 Enable Targeted Debug Logging", "11_User_How_To_Guides.html#logging_ssec", null ]
      ] ],
      [ "4. Post-Processing Recipes", "11_User_How_To_Guides.html#post_sec", [
        [ "4.1 Postprocess an Existing Run", "11_User_How_To_Guides.html#post_existing_ssec", null ],
        [ "4.2 Add Q-Criterion to Eulerian Pipeline", "11_User_How_To_Guides.html#qcrit_ssec", null ],
        [ "4.3 Enable Statistics Output (MSD)", "11_User_How_To_Guides.html#stats_ssec", null ]
      ] ]
    ] ],
    [ "Capabilities Summary", "12_Capabilities_Summary.html", [
      [ "1. Input and Grid Capabilities", "12_Capabilities_Summary.html#ingest_sec", null ],
      [ "2. Physics and Model Selection", "12_Capabilities_Summary.html#physics_sec", null ],
      [ "3. Numerical Solver Stack", "12_Capabilities_Summary.html#solver_sec", null ],
      [ "6. Cluster and Study Orchestration", "12_Capabilities_Summary.html#orchestration_sec", null ],
      [ "7. Extensibility Status", "12_Capabilities_Summary.html#extension_sec", null ]
    ] ],
    [ "Code Architecture", "13_Code_Architecture.html", [
      [ "1. Executable Entry Points", "13_Code_Architecture.html#entry_sec", null ],
      [ "2. Solver Runtime Flow (picsolver.c)", "13_Code_Architecture.html#solver_flow_sec", null ],
      [ "3. Postprocessor Runtime Flow (postprocessor.c)", "13_Code_Architecture.html#post_flow_sec", null ],
      [ "4. Core Context Objects", "13_Code_Architecture.html#contexts_sec", [
        [ "4.1 SimCtx", "13_Code_Architecture.html#simctx_ssec", null ],
        [ "4.2 UserCtx", "13_Code_Architecture.html#userctx_ssec", null ]
      ] ],
      [ "5. Module Responsibilities", "13_Code_Architecture.html#modules_sec", null ],
      [ "6. Configuration Ingestion Boundaries", "13_Code_Architecture.html#ingestion_sec", null ]
    ] ],
    [ "Configuration Contract (YAML -> Generated Artifacts -> Runtime)", "14_Config_Contract.html", [
      [ "1. Required Input Roles", "14_Config_Contract.html#inputs_sec", null ],
      [ "3. Case Contract Highlights", "14_Config_Contract.html#case_sec", null ],
      [ "5. Monitor Contract Highlights", "14_Config_Contract.html#monitor_sec", null ],
      [ "7. Cluster Contract Highlights (cluster.yml)", "14_Config_Contract.html#cluster_sec", null ],
      [ "8. Study Contract Highlights (study.yml)", "14_Config_Contract.html#study_sec", null ]
    ] ],
    [ "Developer Ingestion Map", "15_Config_Ingestion_Map.html", [
      [ "1. End-to-End Flow", "15_Config_Ingestion_Map.html#pipeline_sec", null ],
      [ "2. Mapping Matrix", "15_Config_Ingestion_Map.html#map_sec", null ],
      [ "3. Python-Only Orchestration Mapping (No C Ingestion)", "15_Config_Ingestion_Map.html#python_only_sec", null ],
      [ "4. Important Exceptions", "15_Config_Ingestion_Map.html#exceptions_sec", null ],
      [ "5. Drift Prevention", "15_Config_Ingestion_Map.html#maintenance_sec", null ]
    ] ],
    [ "Configuration Extension Playbook", "16_Config_Extension_Playbook.html", [
      [ "1. Standard Extension Workflow", "16_Config_Extension_Playbook.html#workflow_sec", null ],
      [ "2. Design Rules", "16_Config_Extension_Playbook.html#design_sec", null ],
      [ "3. ParticlePhysics Extension Checklist", "16_Config_Extension_Playbook.html#particle_sec", null ],
      [ "4. Data-Driven Closure Model Note", "16_Config_Extension_Playbook.html#data_driven_sec", null ],
      [ "5. Verification Checklist", "16_Config_Extension_Playbook.html#verification_sec", null ]
    ] ],
    [ "Workflow Extensibility Guide", "17_Workflow_Extensibility.html", [
      [ "1. Design Goal", "17_Workflow_Extensibility.html#goals_sec", null ],
      [ "4. Data-Driven Particle Closure Integration", "17_Workflow_Extensibility.html#ml_sec", [
        [ "4.1 Offline (Recommended First)", "17_Workflow_Extensibility.html#ml_offline_ssec", null ],
        [ "4.2 Tightly Coupled Inference (Runtime)", "17_Workflow_Extensibility.html#ml_coupled_ssec", null ]
      ] ],
      [ "5. Guardrails for Safe Growth", "17_Workflow_Extensibility.html#guardrails_sec", null ],
      [ "6. Related Docs", "17_Workflow_Extensibility.html#related_sec", null ]
    ] ],
    [ "Non-Dimensionalization Model", "19_Nondimensionalization.html", [
      [ "1. Reference Scales", "19_Nondimensionalization.html#refs_sec", null ],
      [ "2. Primary Converted Quantities", "19_Nondimensionalization.html#primary_sec", null ],
      [ "3. Field/Coordinate Scaling Conventions", "19_Nondimensionalization.html#fields_sec", null ],
      [ "5. Practical Notes", "19_Nondimensionalization.html#notes_sec", null ],
      [ "6. References", "19_Nondimensionalization.html#links_sec", null ]
    ] ],
    [ "Grid, Cell, and Variable Architecture Guide", "20_Grid_Cell_Architecture_Guide.html", null ],
    [ "Methods and Models Overview", "21_Methods_Overview.html", [
      [ "1. Governing Model Snapshot", "21_Methods_Overview.html#governing_sec", null ],
      [ "2. Runtime Execution Order", "21_Methods_Overview.html#runtime_map_sec", null ],
      [ "3. Method Map", "21_Methods_Overview.html#method_map_sec", null ]
    ] ],
    [ "CurvIB Method Overview", "22_CURVIB_Method.html", [
      [ "1. Curvilinear Formulation Context", "22_CURVIB_Method.html#formulation_sec", null ],
      [ "3. Immersed-Boundary Role In Current Code", "22_CURVIB_Method.html#ibm_sec", null ],
      [ "4. What This Means For Users", "22_CURVIB_Method.html#practical_sec", null ]
    ] ],
    [ "Fractional-Step (Projection) Method", "23_Fractional_Step_Method.html", [
      [ "1. Discrete Method Skeleton", "23_Fractional_Step_Method.html#equations_sec", null ],
      [ "2. Code Path In PICurv", "23_Fractional_Step_Method.html#implementation_sec", null ],
      [ "3. Boundary and Geometry Handling", "23_Fractional_Step_Method.html#boundary_sec", null ],
      [ "4. Diagnostics To Watch", "23_Fractional_Step_Method.html#runtime_sec", null ]
    ] ],
    [ "Dual-Time Picard RK4 Momentum Solver", "24_Dual_Time_Picard_RK4.html", [
      [ "1. Algorithmic Model", "24_Dual_Time_Picard_RK4.html#model_sec", null ],
      [ "2. Convergence and Backtracking", "24_Dual_Time_Picard_RK4.html#convergence_sec", null ],
      [ "4. Core Code Touchpoints", "24_Dual_Time_Picard_RK4.html#touchpoints_sec", null ]
    ] ],
    [ "Pressure-Poisson, GMRES, and Multigrid", "25_Pressure_Poisson_GMRES_Multigrid.html", [
      [ "1. Pressure-Correction Equation", "25_Pressure_Poisson_GMRES_Multigrid.html#equation_sec", null ],
      [ "2. Multigrid/KSP Stack In Code", "25_Pressure_Poisson_GMRES_Multigrid.html#mg_sec", null ],
      [ "4. Robustness Characteristics", "25_Pressure_Poisson_GMRES_Multigrid.html#robustness_sec", null ]
    ] ],
    [ "Walking Search for Particle Location", "26_Walking_Search_Method.html", [
      [ "1. Core Search Concept", "26_Walking_Search_Method.html#concept_sec", null ],
      [ "2. Settlement Status Model", "26_Walking_Search_Method.html#statuses_sec", null ],
      [ "4. Restart Path Specifics", "26_Walking_Search_Method.html#restart_sec", null ]
    ] ],
    [ "Trilinear Interpolation and Particle-Grid Projection", "27_Trilinear_Interpolation_and_Projection.html", [
      [ "1. Grid -> Particle Interpolation", "27_Trilinear_Interpolation_and_Projection.html#g2p_sec", null ],
      [ "2. Particle -> Grid Scatter and Normalization", "27_Trilinear_Interpolation_and_Projection.html#p2g_sec", null ],
      [ "3. Accuracy and Stability Considerations", "27_Trilinear_Interpolation_and_Projection.html#coupling_sec", null ]
    ] ],
    [ "IEM Mixing and Statistical Averaging", "28_IEM_and_Statistical_Averaging.html", [
      [ "1. IEM Mixing Update In Current Code", "28_IEM_and_Statistical_Averaging.html#iem_sec", null ],
      [ "2. Required Dataflow For IEM", "28_IEM_and_Statistical_Averaging.html#dataflow_sec", null ],
      [ "4. Averaging Terminology In PICurv", "28_IEM_and_Statistical_Averaging.html#terminology_sec", null ]
    ] ],
    [ "Maintenance Backlog and Low-Priority Fixes", "29_Maintenance_Backlog.html", [
      [ "1. Purpose", "29_Maintenance_Backlog.html#purpose_sec", null ],
      [ "3. Warning Cleanup Categories", "29_Maintenance_Backlog.html#categories_sec", null ],
      [ "5. Prioritization Policy", "29_Maintenance_Backlog.html#policy_sec", null ],
      [ "6. Sandbox Policy", "29_Maintenance_Backlog.html#sandbox_sec", null ]
    ] ],
    [ "Repository Navigation and Directory Guides", "30_Repository_Navigation.html", [
      [ "1. Top-Level Repository Areas", "30_Repository_Navigation.html#top_nav_sec", null ],
      [ "2. Top-Level Guide Links", "30_Repository_Navigation.html#top_links_sec", null ],
      [ "3. Configuration Subdirectory Guides", "30_Repository_Navigation.html#config_nav_sec", null ],
      [ "4. Documentation-Local Guides", "30_Repository_Navigation.html#docs_nav_sec", null ]
    ] ],
    [ "Momentum Solver Implementations", "31_Momentum_Solvers.html", [
      [ "1. Selection and Dispatch", "31_Momentum_Solvers.html#selection_sec", null ],
      [ "2. Implementation Status Matrix", "31_Momentum_Solvers.html#status_sec", null ],
      [ "3. Numerical Controls In Use", "31_Momentum_Solvers.html#controls_sec", null ]
    ] ],
    [ "Analytical Solution Modes", "32_Analytical_Solutions.html", [
      [ "1. Activation Path", "32_Analytical_Solutions.html#activation_sec", null ],
      [ "2. Supported Types In Current Code", "32_Analytical_Solutions.html#types_sec", null ],
      [ "3. TGV3D Details", "32_Analytical_Solutions.html#tgv_sec", null ],
      [ "4. ZERO_FLOW Details", "32_Analytical_Solutions.html#zero_sec", null ],
      [ "5. Particle Consistency", "32_Analytical_Solutions.html#particles_sec", null ]
    ] ],
    [ "Initial Condition Modes", "33_Initial_Conditions.html", [
      [ "1. Where Initialization Happens", "33_Initial_Conditions.html#overview_sec", null ],
      [ "2. Eulerian Field Initialization (<tt>properties.initial_conditions</tt>)", "33_Initial_Conditions.html#euler_sec", null ],
      [ "3. Eulerian Mode Details", "33_Initial_Conditions.html#euler_modes_sec", null ],
      [ "4. Contravariant Initialization Note", "33_Initial_Conditions.html#euler_formula_sec", null ],
      [ "5. Eulerian Restart Branches", "33_Initial_Conditions.html#restart_modes_sec", null ],
      [ "6. Particle Initialization Relation", "33_Initial_Conditions.html#particle_link_sec", null ]
    ] ],
    [ "Particle Model and Coupling Overview", "34_Particle_Model_Overview.html", [
      [ "1. Per-Step Particle Pipeline", "34_Particle_Model_Overview.html#loop_sec", null ],
      [ "4. Statistics and Diagnostics", "34_Particle_Model_Overview.html#statistics_sec", null ]
    ] ],
    [ "API Documentation Status", "35_API_Documentation_Status.html", [
      [ "2. Warning Log and Build Path", "35_API_Documentation_Status.html#warning_sec", null ],
      [ "3. Expected Standard For New APIs", "35_API_Documentation_Status.html#expected_sec", null ]
    ] ],
    [ "Cluster Run Guide (Slurm)", "36_Cluster_Run_Guide.html", [
      [ "2. Core Command Patterns", "36_Cluster_Run_Guide.html#command_sec", null ],
      [ "4. Submission Flow", "36_Cluster_Run_Guide.html#flow_sec", null ]
    ] ],
    [ "Sweep and Study Guide", "37_Sweep_Studies_Guide.html", [
      [ "3. Study Contract Essentials", "37_Sweep_Studies_Guide.html#contract_sec", null ],
      [ "4. Outputs and Aggregates", "37_Sweep_Studies_Guide.html#outputs_sec", null ],
      [ "5. Operational Workflow", "37_Sweep_Studies_Guide.html#operations_sec", null ]
    ] ],
    [ "Common Fatal Errors and Fixes", "39_Common_Fatal_Errors.html", [
      [ "1. Structured Validation Errors (ERROR <CODE>)", "39_Common_Fatal_Errors.html#structured_sec", null ],
      [ "2. High-Frequency Fatal Messages (Runtime Paths)", "39_Common_Fatal_Errors.html#legacy_sec", null ]
    ] ],
    [ "Testing, Smoke, and Quality Gates Guide", "40_Testing_and_Quality_Guide.html", [
      [ "1. What This Guide Covers", "40_Testing_and_Quality_Guide.html#scope_sec", null ],
      [ "2. Quick Smoke Matrix (Manual)", "40_Testing_and_Quality_Guide.html#quick_smoke_sec", [
        [ "2.1 Command Discovery Smoke", "40_Testing_and_Quality_Guide.html#help_smoke_ssec", null ],
        [ "2.2 Config-Only Validation Smoke", "40_Testing_and_Quality_Guide.html#validate_smoke_ssec", null ],
        [ "2.3 Dry-Run Smoke (No File Writes)", "40_Testing_and_Quality_Guide.html#dryrun_smoke_ssec", null ]
      ] ],
      [ "3. Code Map (Where Behavior Lives)", "40_Testing_and_Quality_Guide.html#code_map_sec", null ],
      [ "4. Automated Smoke Tests", "40_Testing_and_Quality_Guide.html#automated_sec", null ],
      [ "5. CI Quality Gate Behavior", "40_Testing_and_Quality_Guide.html#ci_sec", null ],
      [ "6. Markdown Link Checking", "40_Testing_and_Quality_Guide.html#linkcheck_sec", null ],
      [ "7. How to Extend Smoke Coverage", "40_Testing_and_Quality_Guide.html#extend_sec", null ]
    ] ],
    [ "Getting Started", "41_Getting_Started_Index.html", [
      [ "1. When to Use This Section", "41_Getting_Started_Index.html#when_sec", null ],
      [ "2. First Simulation Entry", "41_Getting_Started_Index.html#distinction_sec", null ],
      [ "3. Recommended Read Order", "41_Getting_Started_Index.html#path_sec", null ],
      [ "5. Where to Go Next", "41_Getting_Started_Index.html#next_sec", null ],
      [ "Documentation Catalog", "Documentation_Catalog.html", [
        [ "1. By Lifecycle Stage", "Documentation_Catalog.html#lifecycle_axis_sec", [
          [ "Design and Setup", "Documentation_Catalog.html#lifecycle_design_sec", null ],
          [ "Run and Monitor", "Documentation_Catalog.html#lifecycle_run_sec", null ],
          [ "Debug and Validate", "Documentation_Catalog.html#lifecycle_debug_sec", null ]
        ] ],
        [ "2. By Artifact Type", "Documentation_Catalog.html#artifact_axis_sec", [
          [ "YAML Contracts", "Documentation_Catalog.html#artifact_yaml_sec", null ],
          [ "Numerical and Model References", "Documentation_Catalog.html#artifact_methods_sec", null ],
          [ "Code and Runtime Internals", "Documentation_Catalog.html#artifact_code_sec", null ]
        ] ],
        [ "3. Audience Portals (Existing Axis)", "Documentation_Catalog.html#portal_axis_sec", null ],
        [ "4. Repository Orientation", "Documentation_Catalog.html#repo_axis_sec", null ]
      ] ]
    ] ],
    [ "User Guide", "42_User_Guide_Index.html", [
      [ "4. Repository Orientation", "42_User_Guide_Index.html#support_sec", null ],
      [ "5. Competencies You Should Gain", "42_User_Guide_Index.html#outcomes_sec", null ],
      [ "Documentation Catalog", "Documentation_Catalog.html", [
        [ "1. By Lifecycle Stage", "Documentation_Catalog.html#lifecycle_axis_sec", [
          [ "Design and Setup", "Documentation_Catalog.html#lifecycle_design_sec", null ],
          [ "Run and Monitor", "Documentation_Catalog.html#lifecycle_run_sec", null ],
          [ "Debug and Validate", "Documentation_Catalog.html#lifecycle_debug_sec", null ]
        ] ],
        [ "2. By Artifact Type", "Documentation_Catalog.html#artifact_axis_sec", [
          [ "YAML Contracts", "Documentation_Catalog.html#artifact_yaml_sec", null ],
          [ "Numerical and Model References", "Documentation_Catalog.html#artifact_methods_sec", null ],
          [ "Code and Runtime Internals", "Documentation_Catalog.html#artifact_code_sec", null ]
        ] ],
        [ "3. Audience Portals (Existing Axis)", "Documentation_Catalog.html#portal_axis_sec", null ],
        [ "4. Repository Orientation", "Documentation_Catalog.html#repo_axis_sec", null ]
      ] ]
    ] ],
    [ "Developer Portal", "43_Developer_Portal_Index.html", [
      [ "1. Architecture and Contracts", "43_Developer_Portal_Index.html#architecture_sec", null ],
      [ "2. Numerical Methods and Models", "43_Developer_Portal_Index.html#methods_sec", null ],
      [ "4. Suggested Contributor Read Path", "43_Developer_Portal_Index.html#contribution_flow_sec", null ],
      [ "5. Expected Outcomes", "43_Developer_Portal_Index.html#developer_outcomes_sec", null ],
      [ "Documentation Catalog", "Documentation_Catalog.html", [
        [ "1. By Lifecycle Stage", "Documentation_Catalog.html#lifecycle_axis_sec", [
          [ "Design and Setup", "Documentation_Catalog.html#lifecycle_design_sec", null ],
          [ "Run and Monitor", "Documentation_Catalog.html#lifecycle_run_sec", null ],
          [ "Debug and Validate", "Documentation_Catalog.html#lifecycle_debug_sec", null ]
        ] ],
        [ "2. By Artifact Type", "Documentation_Catalog.html#artifact_axis_sec", [
          [ "YAML Contracts", "Documentation_Catalog.html#artifact_yaml_sec", null ],
          [ "Numerical and Model References", "Documentation_Catalog.html#artifact_methods_sec", null ],
          [ "Code and Runtime Internals", "Documentation_Catalog.html#artifact_code_sec", null ]
        ] ],
        [ "3. Audience Portals (Existing Axis)", "Documentation_Catalog.html#portal_axis_sec", null ],
        [ "4. Repository Orientation", "Documentation_Catalog.html#repo_axis_sec", null ]
      ] ]
    ] ],
    [ "Boundary Conditions Guide", "44_Boundary_Conditions_Guide.html", [
      [ "1. Boundary-Condition Grammar", "44_Boundary_Conditions_Guide.html#grammar_sec", null ],
      [ "2. Supported User-Facing Combinations (<tt>pic.flow</tt>)", "44_Boundary_Conditions_Guide.html#supported_sec", null ],
      [ "3. Non-Dimensionalization Before C Input", "44_Boundary_Conditions_Guide.html#nondim_sec", null ],
      [ "4. Periodicity Consistency Rules", "44_Boundary_Conditions_Guide.html#periodic_rules_sec", null ],
      [ "5. C-Side Parsing and Dispatch", "44_Boundary_Conditions_Guide.html#c_pipeline_sec", null ],
      [ "6. Exposed vs Latent Options", "44_Boundary_Conditions_Guide.html#c_gap_sec", null ],
      [ "7. Authoring Examples", "44_Boundary_Conditions_Guide.html#examples_sec", null ],
      [ "8. Common Failure Modes", "44_Boundary_Conditions_Guide.html#troubleshoot_sec", null ]
    ] ],
    [ "Particle Initialization and Restart Guide", "45_Particle_Initialization_and_Restart.html", [
      [ "2. Accepted <tt>init_mode</tt> Aliases", "45_Particle_Initialization_and_Restart.html#mode_alias_sec", null ],
      [ "3. Mode Behavior in C", "45_Particle_Initialization_and_Restart.html#mode_behavior_sec", null ],
      [ "4. Restart Behavior Matrix", "45_Particle_Initialization_and_Restart.html#restart_matrix_sec", null ],
      [ "5. Early-Step Settlement and Coupling", "45_Particle_Initialization_and_Restart.html#settle_sec", null ],
      [ "7. Diagnostics and Sanity Checks", "45_Particle_Initialization_and_Restart.html#diagnostics_sec", null ]
    ] ],
    [ "C Runtime Execution Map", "46_C_Runtime_Execution_Map.html", [
      [ "1. Solver Startup Order (<tt>src/picsolver.c</tt>)", "46_C_Runtime_Execution_Map.html#startup_sec", null ],
      [ "3. Core Runtime Structs", "46_C_Runtime_Execution_Map.html#core_structs_sec", null ],
      [ "4. Initialization Branches", "46_C_Runtime_Execution_Map.html#init_branches_sec", null ],
      [ "6. Boundary System Runtime Hooks", "46_C_Runtime_Execution_Map.html#boundaries_sec", null ],
      [ "8. Debugging Entry Points", "46_C_Runtime_Execution_Map.html#debug_sec", null ]
    ] ],
    [ "File List", "files.html", null ],
    [ "Data Structures", "annotated.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"01_Installation.html",
"46_C_Runtime_Execution_Map.html#init_branches_sec"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';