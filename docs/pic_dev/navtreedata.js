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
    [ "Changelog", "md_CHANGELOG.html", null ],
    [ "Installation Guide", "01_Installation.html", [
      [ "1. Prerequisites", "01_Installation.html#prereqs_sec", null ],
      [ "2. Installing Dependencies", "01_Installation.html#install_sec", [
        [ "2.1. Installing Build Tools, MPI, and Python", "01_Installation.html#install_tools_sec", null ],
        [ "2.2. Installing PETSc", "01_Installation.html#install_petsc_sec", null ],
        [ "2.3. Setting PETSc Environment Variables", "01_Installation.html#verify_petsc_sec", null ]
      ] ],
      [ "3. Getting the PICurv Code", "01_Installation.html#get_code_sec", null ],
      [ "4. Compiling PICurv", "01_Installation.html#build_sec", [
        [ "4.1. Advanced Build Options", "01_Installation.html#advanced_build_sec", null ]
      ] ],
      [ "5. Next Steps", "01_Installation.html#next_steps_sec", null ]
    ] ],
    [ "Tutorial: Your First Simulation (Flat Channel)", "02_Tutorial_Programmatic_Grid.html", [
      [ "1. Initializing the Study Directory", "02_Tutorial_Programmatic_Grid.html#init_sec", null ],
      [ "2. Understanding the Configuration Files", "02_Tutorial_Programmatic_Grid.html#config_sec", null ],
      [ "3. Running the Simulation", "02_Tutorial_Programmatic_Grid.html#run_sec", null ],
      [ "4. Examining the Output", "02_Tutorial_Programmatic_Grid.html#results_sec", null ],
      [ "5. Visualizing the Results", "02_Tutorial_Programmatic_Grid.html#viz_sec", null ]
    ] ],
    [ "Tutorial: Using a File-Based Grid (Bent Channel)", "03_Tutorial_File-Based_Grid.html", [
      [ "1. Case Overview: Laminar Flow in a Bend", "03_Tutorial_File-Based_Grid.html#overview_sec", null ]
    ] ],
    [ "Tutorial: A Guide to Visualizing Your Results", "04_Visualization_Tutorial.html", [
      [ "1. Understanding Your Output Files", "04_Visualization_Tutorial.html#files_sec", [
        [ "1.1. Common Data Fields", "04_Visualization_Tutorial.html#datafields_sec", null ]
      ] ],
      [ "2. The ParaView Interface", "04_Visualization_Tutorial.html#paraview_basics_sec", null ],
      [ "3. Recipes for Visualizing Grid Data (<tt>.vts</tt> files)", "04_Visualization_Tutorial.html#eulerian_recipes_sec", [
        [ "3.1. Recipe: Coloring by a Scalar Field", "04_Visualization_Tutorial.html#recipe_color_sec", null ],
        [ "3.2. Recipe: Creating a Cross-Section (Slice)", "04_Visualization_Tutorial.html#recipe_slice_sec", null ],
        [ "3.3. Recipe: Showing Velocity Vectors (Glyphs)", "04_Visualization_Tutorial.html#recipe_vectors_sec", null ],
        [ "3.4. Recipe: Tracing Flow Paths (Streamlines)", "04_Visualization_Tutorial.html#recipe_streams_sec", null ]
      ] ],
      [ "4. Recipes for Visualizing Particle Data (<tt>.vtp</tt> files)", "04_Visualization_Tutorial.html#lagrangian_recipes_sec", null ],
      [ "5. Saving Your Work", "04_Visualization_Tutorial.html#export_sec", null ]
    ] ],
    [ "The Conductor Script: <tt>pic-flow</tt>", "05_The_Conductor_Script.html", [
      [ "1. General Usage", "05_The_Conductor_Script.html#usage_sec", null ],
      [ "2. The <tt>init</tt> Command", "05_The_Conductor_Script.html#init_command_sec", null ],
      [ "3. The <tt>build</tt> Command", "05_The_Conductor_Script.html#build_command_sec", null ],
      [ "4. The <tt>run</tt> Command", "05_The_Conductor_Script.html#run_command_sec", null ]
    ] ],
    [ "Anatomy of a Simulation: Cases, Solvers, and Monitors", "06_Simulation_Anatomy.html", [
      [ "1. The Three Roles of Configuration Files", "06_Simulation_Anatomy.html#roles_sec", null ],
      [ "2. The Mix-and-Match Workflow", "06_Simulation_Anatomy.html#workflow_sec", null ],
      [ "3. The <tt>config/</tt> Library", "06_Simulation_Anatomy.html#library_sec", [
        [ "3.1. Best Practices", "06_Simulation_Anatomy.html#best_practices_ssec", null ]
      ] ]
    ] ],
    [ "Configuration Reference: The <tt>case.yml</tt> File", "07_Case_Reference.html", [
      [ "1. The <tt>properties</tt> Section", "07_Case_Reference.html#properties_sec", [
        [ "1.1. <tt>scaling</tt>", "07_Case_Reference.html#scaling_ssec", null ],
        [ "1.2. <tt>fluid</tt>", "07_Case_Reference.html#fluid_ssec", null ],
        [ "1.3. <tt>initial_conditions</tt>", "07_Case_Reference.html#ic_ssec", null ]
      ] ],
      [ "2. The <tt>run_control</tt> Section", "07_Case_Reference.html#run_control_sec", null ],
      [ "3. The <tt>grid</tt> Section", "07_Case_Reference.html#grid_sec", [
        [ "3.1. Programmatic Grid (<tt>mode: programmatic_c</tt>)", "07_Case_Reference.html#programmatic_ssec", null ],
        [ "3.2. File-Based Grid (<tt>mode: file</tt>)", "07_Case_Reference.html#file_ssec", null ]
      ] ],
      [ "4. The <tt>models</tt> Section", "07_Case_Reference.html#models_sec", [
        [ "4.1. <tt>domain</tt>", "07_Case_Reference.html#domain_ssec", null ],
        [ "4.2. <tt>physics</tt>", "07_Case_Reference.html#physics_ssec", null ]
      ] ],
      [ "5. The <tt>boundary_conditions</tt> Section", "07_Case_Reference.html#bc_sec", null ]
    ] ],
    [ "Configuration Reference: Solver Profiles (<tt>solver.yml</tt>)", "08_Solver_Reference.html", [
      [ "1. The <tt>strategy</tt> Section", "08_Solver_Reference.html#strategy_sec", null ],
      [ "2. The <tt>tolerances</tt> Section", "08_Solver_Reference.html#tolerances_sec", null ],
      [ "3. The <tt>pressure_solver</tt> Section", "08_Solver_Reference.html#pressure_solver_sec", [
        [ "3.1. Main Settings", "08_Solver_Reference.html#p_main_ssec", null ],
        [ "3.2. <tt>multigrid</tt> Settings", "08_Solver_Reference.html#p_mg_ssec", null ]
      ] ],
      [ "4. The <tt>petsc_passthrough_options</tt> Section", "08_Solver_Reference.html#petsc_sec", null ]
    ] ],
    [ "Configuration Reference: Monitor Profiles (<tt>monitor.yml</tt>)", "09_Monitor_Reference.html", [
      [ "1. The <tt>io</tt> Section", "09_Monitor_Reference.html#io_sec", null ],
      [ "2. The <tt>logging</tt> Section", "09_Monitor_Reference.html#logging_sec", [
        [ "2.1. Log Verbosity Levels", "09_Monitor_Reference.html#log_levels_ssec", null ]
      ] ],
      [ "3. The <tt>profiling</tt> Section", "09_Monitor_Reference.html#profiling_sec", null ]
    ] ],
    [ "Configuration Reference: Post-Processing Recipes (<tt>post.yml</tt>)", "10_Post_Processing_Reference.html", [
      [ "1. Structure of a <tt>post.yml</tt> File", "10_Post_Processing_Reference.html#structure_sec", null ],
      [ "3. The <tt>source_data</tt> Section", "10_Post_Processing_Reference.html#source_data_sec", null ],
      [ "4. The <tt>eulerian_pipeline</tt> Section", "10_Post_Processing_Reference.html#eulerian_pipeline_sec", [
        [ "4.1. Available Eulerian Kernels", "10_Post_Processing_Reference.html#eulerian_kernels_ssec", null ]
      ] ],
      [ "5. The <tt>lagrangian_pipeline</tt> Section", "10_Post_Processing_Reference.html#lagrangian_pipeline_sec", [
        [ "5.1. Available Lagrangian Kernels", "10_Post_Processing_Reference.html#lagrangian_kernels_ssec", null ]
      ] ],
      [ "6. The <tt>io</tt> Section", "10_Post_Processing_Reference.html#io_post_sec", null ]
    ] ],
    [ "User How-To Guides", "11_User_How_To_Guides.html", [
      [ "1. Simulation Setup", "11_User_How_To_Guides.html#setup_guides_sec", [
        [ "1.1. How do I change the Reynolds number?", "11_User_How_To_Guides.html#ht_reynolds_ssec", null ],
        [ "1.2. How do I set up a 2D simulation?", "11_User_How_To_Guides.html#ht_2d_ssec", null ],
        [ "1.3. How do I change the grid resolution?", "11_User_How_To_Guides.html#ht_resolution_ssec", null ],
        [ "1.4. How do I change the simulation time and output frequency?", "11_User_How_To_Guides.html#ht_time_ssec", null ]
      ] ],
      [ "2. Boundary Conditions", "11_User_How_To_Guides.html#bc_guides_sec", [
        [ "2.1. How do I set up a simple boundary condition?", "11_User_How_To_Guides.html#ht_bc_ssec", null ],
        [ "2.2. How do I set up a periodic domain?", "11_User_How_To_Guides.html#ht_periodic_ssec", null ]
      ] ],
      [ "3. Running & Monitoring", "11_User_How_To_Guides.html#run_guides_sec", [
        [ "3.1. How do I run in parallel and specify the processor layout?", "11_User_How_To_Guides.html#ht_parallel_ssec", null ],
        [ "3.2. How do I restart a simulation?", "11_User_How_To_Guides.html#ht_restart_ssec", null ],
        [ "3.3. How do I get detailed debug output from a specific part of the code?", "11_User_How_To_Guides.html#ht_debug_ssec", null ]
      ] ],
      [ "4. Post-Processing", "11_User_How_To_Guides.html#pp_guides_sec", [
        [ "4.1. How do I run post-processing on a finished simulation?", "11_User_How_To_Guides.html#ht_pp_ssec", null ],
        [ "4.2. How do I calculate a new field like Q-Criterion?", "11_User_How_To_Guides.html#ht_newfield_ssec", null ]
      ] ]
    ] ],
    [ "Capabilities Summary: What You Can Do", "12_Capabilities_Summary.html", [
      [ "1. Grid and Domain Features", "12_Capabilities_Summary.html#grid_cap_sec", null ],
      [ "2. Physics & Flow Models", "12_Capabilities_Summary.html#physics_cap_sec", null ],
      [ "3. Numerical Scheme Control", "12_Capabilities_Summary.html#numerics_cap_sec", null ],
      [ "4. Boundary Conditions", "12_Capabilities_Summary.html#bc_cap_sec", null ],
      [ "5. Post-Processing Capabilities", "12_Capabilities_Summary.html#pp_cap_sec", null ]
    ] ],
    [ "Code Architecture", "13_Code_Architecture.html", [
      [ "1. Program Flow: The Five Stages of <tt>main()</tt>", "13_Code_Architecture.html#flow_sec", null ],
      [ "2. Core Data Structures", "13_Code_Architecture.html#data_structs_sec", [
        [ "2.1. The Simulation Context (<tt>SimCtx</tt>)", "13_Code_Architecture.html#simctx_ssec", null ],
        [ "2.2. The User Context (<tt>UserCtx</tt>)", "13_Code_Architecture.html#userctx_ssec", null ]
      ] ],
      [ "3. Code Modules Overview", "13_Code_Architecture.html#modules_sec", null ]
    ] ],
    [ "Grid, Cell, and Variable Architecture Guide", "md_pages_220__Grid__Cell__Architecture__Guide.html", [
      [ "1. Overview", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md22", null ],
      [ "2. The Geometric Foundation: Nodes and Cells", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md24", null ],
      [ "3. The Primary Variable: Face-Centered Flux (<tt>ucont</tt>)", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md26", null ],
      [ "4. The Shifted Index Architecture for Cell-Centered Variables (<tt>ucat</tt>, <tt>P</tt>)", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md28", [
        [ "4.1. How it Works at the Boundaries", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md29", null ]
      ] ],
      [ "5. Effective Computational Domain and Resolution", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md31", null ],
      [ "6. Implications for Post-Processing (<tt>ComputeNodalAverage</tt>)", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md33", null ],
      [ "7. Summary Table of <tt>ucat</tt> Anatomy (i-direction)", "md_pages_220__Grid__Cell__Architecture__Guide.html#autotoc_md35", null ]
    ] ],
    [ "Case Template: Laminar Flow in a Bent Channel", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html", [
      [ "1. Description", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md37", null ],
      [ "2. Files in this Template", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md38", [
        [ "Included Grid Artifacts", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md39", null ]
      ] ],
      [ "3. How to Use this Template", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md40", [
        [ "Step 1: Initialize a New Study", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md41", null ],
        [ "Step 2: Customize the Simulation", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md42", null ],
        [ "Step 3: Run the Simulation", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md43", null ]
      ] ],
      [ "4. Expected Results & Visualization", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2bent__channel_2bent__channel.html#autotoc_md44", null ]
    ] ],
    [ "Case Template: Laminar Flow in a Flat Channel", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html", [
      [ "1. Description", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md46", null ],
      [ "2. Files in this Template", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md47", null ],
      [ "3. How to Use this Template", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md48", [
        [ "Step 1: Initialize a New Study", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md49", null ],
        [ "Step 2: Customize the Simulation", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md50", null ],
        [ "Step 3: Run the Simulation", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md51", null ]
      ] ],
      [ "4. Building a New Template from this Example", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md52", null ],
      [ "5. Expected Results & Visualization", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2flat__channel_2flat__channel.html#autotoc_md53", null ]
    ] ],
    [ "PIC-Flow Master Configuration Templates", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2master__template_2master__template.html", [
      [ "1. Overview", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2master__template_2master__template.html#autotoc_md55", null ],
      [ "2. How to Use These Files", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2master__template_2master__template.html#autotoc_md56", null ],
      [ "3. Best Practices & Workflow", "md__2home_2runner_2work_2PICurv_2PICurv_2examples_2master__template_2master__template.html#autotoc_md57", null ]
    ] ],
    [ "File List", "files.html", null ],
    [ "Data Structures", "annotated.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"01_Installation.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';