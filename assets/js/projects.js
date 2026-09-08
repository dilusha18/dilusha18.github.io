'use strict';

// Project order matches the selected-work and ongoing-work cards.
const projectDetails = [
  {
    id: 'pattiya',
    type: 'Team innovation project / 2026 - Present',
    overview: 'Pattiya is a smart cattle collar being developed to monitor methane, estrus, heat stress, and location. The system combines a wearable device, an environmental station, and farmer-facing alerts.',
    contributions: [
      'Contributed to the weather-resistant CAD enclosure and internal component layout for use in farm environments.',
      'Supported ESP32 sensor integration and LoRa communication between the collar and the monitoring system.',
      'Developing machine-learning models to analyse multi-sensor data for estrus, heat-stress, and health patterns.'
    ],
    outcome: 'The project reached the semi-finals of SPARK Challenge 2025/26. Development is ongoing.',
    images: [
      ['pattiya-cad.jpg', 'Collar placement and assembly in CAD'],
      ['pattiya-enclosure.png', 'Enclosure design with mounting features']
    ]
  },
  {
    id: 'roboroarz',
    type: 'Team PathFinder / RoboRoarZ Sri Lanka 2026',
    overview: 'An autonomous differential-drive robot built to detect maze walls, explore routes, and complete a shortest-path run under competition constraints.',
    contributions: [
      'Co-developed the robot and contributed to chassis integration and sensor placement.',
      'Worked on motor-driver connections and embedded control implementation.',
      'Tested and tuned turning, wall detection, and cell-to-cell movement for reliable competition runs.'
    ],
    outcome: 'Team PathFinder won the championship at RoboRoarZ Sri Lanka 2026.',
    images: [
      ['roboroarz-champions.jpg', 'Team PathFinder at RoboRoarZ Sri Lanka 2026'],
      ['roboroarz-build.jpg', 'Robot assembly and hardware testing'],
      ['roboroarz-hardware.jpg', 'Maze-solving robot hardware']
    ]
  },
  {
    id: 'micromouse',
    type: 'Team competition project / ROBOFEST 2025',
    overview: 'A compact autonomous micromouse platform for maze exploration, wall detection, and shortest-path solving.',
    contributions: [
      'Designed and built the mobile platform, integrating distance sensors, motor drivers, and embedded electronics.',
      'Implemented flood-fill path-planning logic for maze exploration and route optimisation.',
      'Tuned straight-line tracking and repeatable turns through testing.'
    ],
    outcome: 'Finalist in the university-category Micromouse competition at SLIIT ROBOFEST 2025.',
    images: [
      ['micromouse-arena.jpeg', 'Robot in the ROBOFEST preliminary maze. Photo: Rumeth Palansooriya / FM Media'],
      ['micromouse-circuit.jpg', 'Circuit schematic'],
      ['micromouse-pcb.png', 'PCB layout in the 3D viewer']
    ]
  },
  {
    id: 'bumblebee',
    type: 'Team Bumblebee / SLRC 2026',
    overview: 'A physical and virtual autonomous robot system developed for real-time competition tasks and changing obstacle conditions.',
    contributions: [
      'Supported robot simulation and integration of the physical platform with the Ares virtual robot.',
      'Contributed to an API-based workflow that transferred decoded coordinates and commands.',
      'Collaborated on parallel navigation and dynamic obstacle handling across the two systems.'
    ],
    outcome: 'Team Bumblebee reached the finals of the Sri Lankan Robotics Challenge 2026.',
    images: [
      ['bumblebee-robot.jpg', 'Physical robot and its mechanical assembly'],
      ['bumblebee-action.jpg', 'Robot handling a box during operation']
    ]
  },
  {
    id: 'helmet',
    type: 'Academic design project / 2026',
    overview: 'A reverse-engineering study of a motorcycle helmet, focusing on the relationship between the shell, comfort padding, and expanded-polystyrene impact liner.',
    contributions: [
      'Disassembled and dimensionally inspected the helmet.',
      'Reconstructed helmet and EPS-liner geometry using measured dimensions and sectional features.',
      'Examined liner thickness, segmentation, and manufacturing features, and documented the findings in CAD and engineering drawings.'
    ],
    outcome: 'Produced reconstructed geometry and an engineering drawing of the EPS liner. This was a product-analysis study, not a certified impact test.',
    images: [
      ['helmet-eps-drawing.png', 'Engineering drawing of the inner EPS liner'],
      ['helmet-inspection.jpg', 'Helmet study material'],
      ['helmet-model.jpg', 'Helmet geometry and design study']
    ]
  },
  {
    id: 'smartwall',
    type: 'Team automation project',
    overview: 'An automated wall-painting prototype combining mechanical design, motion control, and embedded hardware to improve painting consistency and reduce manual effort.',
    contributions: [
      'Worked on mechanical design and fabrication of the robotic system.',
      'Integrated motion control, programming, and embedded hardware.',
      'Developed and tested the functions needed for the wall-painting application.'
    ],
    outcome: 'Built a working prototype and demonstrated it with the project team.',
    video: 'smartwall-demo.mp4',
    images: [
      ['smartwall-team.jpeg', 'Project team with the wall-painting prototype'],
      ['smartwall-hardware.jpg', 'Prototype hardware and mechanical assembly'],
      ['smartwall-control.jpg', 'Application control logic']
    ]
  },
  {
    id: 'extruder',
    type: 'ME3201 Machine Design Project / Ongoing',
    overview: 'A multi-speed gearbox for an industrial fish-feed extruder, designed around an 11 kW, 1440 rpm motor. The design targets output speeds of 150, 250, and 335 rpm, with reverse operation for blockage recovery and maintenance.',
    contributions: [
      'Worked on flange-coupling design and selection, including torque, bore compatibility, and key checks.',
      'Selected the lubrication method and lubricant grade for the gearbox.',
      'Calculated bearing loads and required life, and selected bearings for the input, output, layshaft, and reverse-idler shafts.'
    ],
    outcome: 'Detailed design calculations have been documented as part of the group project. The design remains ongoing.',
    images: [
      ['extruder-diagram.jpg', 'Overall fish-feed extruder arrangement, reproduced from the group design report']
    ]
  },
  {
    id: 'uav',
    type: 'Mechanism design / Ongoing',
    overview: 'A passive multi-link landing-gear mechanism designed to accommodate uneven terrain while keeping the foot trajectory close to vertical.',
    contributions: [
      'Designed and optimised the multi-link mechanism and its geometry.',
      'Evaluated the foot trajectory and motion constraints using MATLAB.',
      'Developed CAD layouts and dimensions to examine landing-gear movement.'
    ],
    outcome: 'CAD and kinematic analysis are available. The work remains an ongoing mechanism-development study.',
    images: [
      ['uav-mechanism.png', 'Landing-gear linkage above uneven terrain'],
      ['uav-analysis.png', 'MATLAB trajectory, position, and linkage-angle analysis'],
      ['uav-dimensions.png', 'Dimensioned linkage geometry']
    ]
  }
];
