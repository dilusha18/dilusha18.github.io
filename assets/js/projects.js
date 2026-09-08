'use strict';

// Project order matches the selected-work, ongoing-work, and extra-design cards.
const projectDetails = [
  {
    "id": "pattiya",
    "githubUrl": "https://github.com/Team-Aquilon",
    "article": {
      "title": "Can a cow's voice tell us when she is entering oestrus?",
      "description": "How we're exploring dual microphones and stethoscope-based acoustic sensing for oestrus monitoring, and why reliable sensor mounting matters when a cow is moving.",
      "url": "https://www.linkedin.com/pulse/can-cows-voice-tell-us-when-she-entering-oestrus-dilusha-hemachandra-kbhoc/"
    },
    "type": "Team innovation project / 2026 - Present",
    "overview": "Pattiya is a smart cattle collar being developed to monitor methane, estrus, heat stress, and location. The system combines a wearable device, an environmental station, and farmer-facing alerts.",
    "contributions": [
      "Contributed to the weather-resistant CAD enclosure and internal component layout for use in farm environments.",
      "Supported ESP32 sensor integration and LoRa communication between the collar and the monitoring system.",
      "Developing machine-learning models to analyse multi-sensor data for estrus, heat-stress, and health patterns."
    ],
    "outcome": "The project reached the semi-finals of SPARK Challenge 2025/26. Development is ongoing.",
    "images": [
      [
        "pattiya-cad.jpg",
        "Collar placement and assembly in CAD"
      ],
      [
        "pattiya-enclosure.png",
        "Enclosure design with mounting features"
      ],
      [
        "pattiya-gallery-01.png",
        "Activity-detection workflow diagram"
      ],
      [
        "pattiya-gallery-03.png",
        "Sound-recognition concept workflow (AI-assisted diagram)"
      ],
      [
        "pattiya-gallery-04.png",
        "System architecture concept (AI-assisted diagram)"
      ],
      [
        "pattiya-gallery-05.jpg",
        "Collar enclosure presentation (AI-assisted image)"
      ],
      [
        "pattiya-gallery-06.jpg",
        "Sensor assembly presentation (AI-assisted image)"
      ],
      [
        "pattiya-gallery-07.jpg",
        "Collar electronics presentation (AI-assisted image)"
      ],
      [
        "pattiya-gallery-08.jpg",
        "Monitoring-station presentation (AI-assisted image)"
      ],
      [
        "pattiya-gallery-09.jpg",
        "Collar assembly presentation (AI-assisted image)"
      ],
      [
        "pattiya-gallery-10.png",
        "CAD layout of the collar and monitoring station"
      ],
      [
        "pattiya-gallery-11.png",
        "Monitoring-station enclosure and sensor mast"
      ],
      [
        "pattiya-gallery-13.jpeg",
        "PCB routing and component placement"
      ],
      [
        "pattiya-gallery-14.jpeg",
        "PCB assembly in the 3D viewer"
      ],
      [
        "pattiya-gallery-15.jpeg",
        "PCB assembly, alternate component view"
      ],
      [
        "certificate-spark.jpg",
        "SPARK Challenge semi-finalist certificate, Team Aquilon"
      ],
      [
        "pattiya-gallery-17.png",
        "Curved collar enclosure with internal mounting features"
      ],
      [
        "pattiya-gallery-18.png",
        "Enclosure body and removable lid"
      ],
      [
        "pattiya-gallery-19.png",
        "Sensor placement on the collar CAD model"
      ],
      [
        "pattiya-gallery-20.png",
        "Sensor housing and mounting tabs"
      ]
    ]
  },
  {
    "id": "roboroarz",
    "githubUrl": "https://github.com/Roboroarz-Path-Finders",
    "type": "Team PathFinder / RoboRoarZ Sri Lanka 2026",
    "overview": "An autonomous differential-drive robot built to detect maze walls, explore routes, and complete a shortest-path run under competition constraints.",
    "contributions": [
      "Co-developed the robot and contributed to chassis integration and sensor placement.",
      "Worked on motor-driver connections and embedded control implementation.",
      "Tested and tuned turning, wall detection, and cell-to-cell movement for reliable competition runs."
    ],
    "outcome": "Team PathFinder won the championship at RoboRoarZ Sri Lanka 2026.",
    "images": [
      [
        "roboroarz-champions.jpg",
        "Team PathFinder at RoboRoarZ Sri Lanka 2026"
      ],
      [
        "roboroarz-build.jpg",
        "Robot assembly and hardware testing"
      ],
      [
        "roboroarz-hardware.jpg",
        "Maze-solving robot hardware"
      ],
      [
        "roboroarz-gallery-01.png",
        "Maze simulation and robot-control development"
      ],
      [
        "certificate-roboroarz.jpg",
        "RoboRoarZ Sri Lanka 2026 champion certificate, Team PathFinder"
      ]
    ]
  },
  {
    "id": "micromouse",
    "githubUrl": "https://github.com/Robofest25-Micromouse-PathFinder",
    "type": "Team competition project / ROBOFEST 2025",
    "overview": "A compact autonomous micromouse platform for maze exploration, wall detection, and shortest-path solving.",
    "contributions": [
      "Designed and built the mobile platform, integrating distance sensors, motor drivers, and embedded electronics.",
      "Implemented flood-fill path-planning logic for maze exploration and route optimisation.",
      "Tuned straight-line tracking and repeatable turns through testing."
    ],
    "outcome": "Finalist in the university-category Micromouse competition at SLIIT ROBOFEST 2025.",
    "images": [
      [
        "micromouse-arena.jpeg",
        "Robot in the ROBOFEST preliminary maze. Photo: Rumeth Palansooriya / FM Media"
      ],
      [
        "micromouse-circuit.jpg",
        "Circuit schematic"
      ],
      [
        "micromouse-pcb.png",
        "PCB layout in the 3D viewer"
      ],
      [
        "micromouse-gallery-03.png",
        "Exploded CAD view of the chassis and mounting brackets"
      ],
      [
        "certificate-robofest.jpg",
        "ROBOFEST 2025 finalist certificate, Team PathFinder"
      ],
      [
        "micromouse-gallery-05.jpeg",
        "Team discussion at the ROBOFEST preliminary rounds. Photo: FM Media"
      ],
      [
        "micromouse-gallery-07.jpeg",
        "Robot in the line-following arena"
      ]
    ]
  },
  {
    "id": "bumblebee",
    "githubUrl": "https://github.com/Team-Bumblebee-SLRC-2026",
    "type": "Team Bumblebee / SLRC 2026",
    "overview": "A physical and virtual autonomous robot system developed for real-time competition tasks and changing obstacle conditions.",
    "contributions": [
      "Supported robot simulation and integration of the physical platform with the Ares virtual robot.",
      "Contributed to an API-based workflow that transferred decoded coordinates and commands.",
      "Collaborated on parallel navigation and dynamic obstacle handling across the two systems."
    ],
    "outcome": "Team Bumblebee reached the finals of the Sri Lankan Robotics Challenge 2026.",
    "images": [
      [
        "bumblebee-robot.jpg",
        "Physical robot and its mechanical assembly"
      ],
      [
        "bumblebee-action.jpg",
        "Robot handling a box during operation"
      ],
      [
        "bumblebee-gallery-03.png",
        "CAD assembly of the robot arm and gripper"
      ],
      [
        "bumblebee-gallery-04.png",
        "Shaft-support bracket CAD model"
      ],
      [
        "bumblebee-gallery-05.png",
        "Shaft collar CAD model"
      ],
      [
        "bumblebee-gallery-06.png",
        "Robot chassis plate and mounting-hole layout"
      ],
      [
        "bumblebee-gallery-07.png",
        "Sensor-mounting bracket CAD model"
      ],
      [
        "bumblebee-gallery-08.png",
        "Slotted mounting plate CAD model"
      ],
      [
        "bumblebee-gallery-09.jpeg",
        "Navigation maze layout"
      ],
      [
        "certificate-slrc.jpg",
        "SLRC 2026 finalist certificate, Team Bumblebee"
      ]
    ]
  },
  {
    "id": "helmet",
    "type": "Academic design project / 2026",
    "overview": "A reverse-engineering study of a motorcycle helmet, focusing on the relationship between the shell, comfort padding, and expanded-polystyrene impact liner.",
    "contributions": [
      "Disassembled and dimensionally inspected the helmet.",
      "Reconstructed helmet and EPS-liner geometry using measured dimensions and sectional features.",
      "Examined liner thickness, segmentation, and manufacturing features, and documented the findings in CAD and engineering drawings."
    ],
    "outcome": "Produced reconstructed geometry and an engineering drawing of the EPS liner. This was a product-analysis study, not a certified impact test.",
    "images": [
      [
        "helmet-eps-drawing.png",
        "Engineering drawing of the inner EPS liner"
      ],
      [
        "helmet-inspection.jpg",
        "Helmet study material"
      ],
      [
        "helmet-model.jpg",
        "Helmet geometry and design study"
      ]
    ]
  },
  {
    "id": "smartwall",
    "type": "Team automation project",
    "overview": "An automated wall-painting prototype combining mechanical design, motion control, and embedded hardware to improve painting consistency and reduce manual effort.",
    "contributions": [
      "Worked on mechanical design and fabrication of the robotic system.",
      "Integrated motion control, programming, and embedded hardware.",
      "Developed and tested the functions needed for the wall-painting application."
    ],
    "outcome": "Built a working prototype and demonstrated it with the project team.",
    "video": "smartwall-demo.mp4",
    "images": [
      [
        "smartwall-team.jpeg",
        "Project team with the wall-painting prototype"
      ],
      [
        "smartwall-hardware.jpg",
        "Prototype hardware and mechanical assembly"
      ],
      [
        "smartwall-control.jpg",
        "Application control logic"
      ],
      [
        "smartwall-gallery-04.jpeg",
        "Prototype demonstration with the SmartWall team"
      ]
    ]
  },
  {
    "id": "extruder",
    "type": "ME3201 Machine Design Project / Ongoing",
    "overview": "A multi-speed gearbox for an industrial fish-feed extruder, designed around an 11 kW, 1440 rpm motor. The design targets output speeds of 150, 250, and 335 rpm, with reverse operation for blockage recovery and maintenance.",
    "contributions": [
      "Worked on flange-coupling design and selection, including torque, bore compatibility, and key checks.",
      "Selected the lubrication method and lubricant grade for the gearbox.",
      "Calculated bearing loads and required life, and selected bearings for the input, output, layshaft, and reverse-idler shafts."
    ],
    "outcome": "Detailed design calculations have been documented as part of the group project. The design remains ongoing.",
    "images": [
      [
        "extruder-diagram.jpg",
        "Overall fish-feed extruder arrangement, reproduced from the group design report"
      ]
    ]
  },
  {
    "id": "uav",
    "video": "uav-landing-gear.mp4",
    "videoOptions": {
      "title": "Landing-gear motion",
      "poster": "uav-motion-poster.jpg",
      "autoplay": true,
      "loop": true,
      "featured": true
    },
    "type": "Mechanism design / Ongoing",
    "overview": "A passive mechanical landing gear system designed to enable Unmanned Aerial Vehicles (UAVs) to securely touch down on unstructured and uneven terrain. By leveraging intelligent kinematic design, this approach achieves autonomous self-leveling without the computational overhead of complex, active sensor-based control systems.",
    "contributions": [
      "Designed and optimised the multi-link mechanism and its geometry.",
      "Evaluated the foot trajectory and motion constraints using MATLAB.",
      "Developed CAD layouts and dimensions to examine landing-gear movement."
    ],
    "outcome": "CAD and kinematic analysis are available. The work remains an ongoing mechanism-development study.",
    "images": [
      [
        "uav-mechanism.png",
        "Landing-gear linkage above uneven terrain"
      ],
      [
        "uav-analysis.png",
        "MATLAB trajectory, position, and linkage-angle analysis"
      ],
      [
        "uav-dimensions.png",
        "Dimensioned linkage geometry"
      ]
    ]
  },
  {
    "id": "engine",
    "type": "Extra Designs / Mechanical CAD",
    "overview": "An engine assembly design study showing the relationship between pistons, connecting rods, the crankshaft, valve mechanism, and timing gears. The cutaway view brings the internal arrangement into focus.",
    "contributions": [
      "Modelled the mechanical assembly and its internal component arrangement.",
      "Prepared a cutaway CAD view to show the relationship between the moving components."
    ],
    "outcome": "CAD assembly study with a cutaway view of the internal mechanism.",
    "images": [
      [
        "engine-gallery-01.png",
        "Cutaway engine assembly showing the pistons, connecting rods, crankshaft, valve mechanism, and timing gears"
      ]
    ]
  }
];
