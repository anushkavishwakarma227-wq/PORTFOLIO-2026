import { Skill, Project, EducationItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'ANUSHKA VISHWAKARMA',
  subtitle: 'AI & Data Science Student',
  badge: 'PORTFOLIO / 2025 · AI & DATA SCIENCE UNDERGRADUATE',
  bioShort: 'Exploring AI, Web Development, IoT, Robotics and emerging technologies through hands-on projects.',
  bioFull: 'I am an undergraduate student pursuing B.Tech in Artificial Intelligence and Data Science at REVA University. I am interested in technology, innovation, and hands-on learning. I enjoy building practical projects and exploring AI, Data Science, IoT, robotics, embedded systems, cybersecurity, and emerging technologies.',
  university: 'REVA UNIVERSITY',
  location: 'BENGALURU, INDIA',
  degree: 'B.TECH (AI & DS)',
  coordinates: '+ LAT 13.1147° N · LON 77.6346° E',
  year: '2025',
  email: 'anushkavishwakarma227@gmail.com',
  githubUrl: 'https://github.com/anushkavishwakarma227-wq',
  linkedinUrl: 'https://linkedin.com/in/anushka-vishwakarma-a249923b5',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WHTrTj_9qZl1HT_f2rFdrWKLNgnt_XhP3F_xOH0z-OW-v5GLFrZZoMVqHUFgAi-0ygKmpjDwqIYoWu0Cxi4Fpe40A1bnvGL8PZtz90mObqMtOP3TMPwSR2ep0OOQ9I0sPTacq9fRUln7n8Q9aDKUxZxUVcpijt-C2pvdZZqLPLBsNC8jOLxYrsjWDUGlDDrH7UIn1XLzXSYTd-Zp90gY2jurl3qWRnsJJFyHp-mk7L3mjCal1DRrMgMQ',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjECX985OoBel-j5uPB3CUOVv9KMv4Zl54WHdBofnvqbHDo16cH38eVtRx3qeUw1RUOCvqugPvIEpULPXX40pD6qan0HsP1_Q9Z1_2eCUCA1W8f5fT_FwkpXWDMq_kIsJ5IT702P_jj4MtZUBHn5zD_m8BXMKsRdnJa3ZzojhCcGCNJBgXLptVMOdSWdlzmGvmKbeHHhEHq-viVszFr7Nu4EcZFBwNjK2LsQnlx9H3Z9elivupX4zWuCcDkKC8hGzv4g'
};

export const SKILLS_DATA: Skill[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'ai',
    index: '01',
    iconName: 'Brain',
    description: 'Neural networks, computer vision, natural language processing & intelligent agents.'
  },
  {
    id: 'ds',
    name: 'Data Science',
    category: 'ai',
    index: '02',
    iconName: 'BarChart2',
    description: 'Statistical modeling, exploratory data analysis, Pandas, NumPy, and data visualization.'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'software',
    index: '03',
    iconName: 'Terminal',
    description: 'Core programming, algorithmic scripting, ML pipelines & scientific computing.'
  },
  {
    id: 'c',
    name: 'C',
    category: 'software',
    index: '04',
    iconName: 'Code2',
    description: 'Low-level systems programming, memory architecture & embedded device firmware.'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'software',
    index: '05',
    iconName: 'Database',
    description: 'Relational database schema modeling, queries, indexing and data integrity.'
  },
  {
    id: 'webdev',
    name: 'Web Development',
    category: 'software',
    index: '06',
    iconName: 'Globe',
    description: 'Modern reactive interfaces with React, Vite, TypeScript, and Tailwind CSS.'
  },
  {
    id: 'iot',
    name: 'IoT',
    category: 'hardware',
    index: '07',
    iconName: 'Radio',
    description: 'Sensor arrays, wireless telemetry, MQTT/Bluetooth, and microcontroller integration.'
  },
  {
    id: 'robotics',
    name: 'Robotics',
    category: 'hardware',
    index: '08',
    iconName: 'Bot',
    description: 'Differential drives, motor kinematics, autonomous path traversal & actuator feedback.'
  },
  {
    id: 'embedded',
    name: 'Embedded Systems',
    category: 'hardware',
    index: '09',
    iconName: 'Cpu',
    description: 'Real-time microcontroller architecture, GPIO pinouts, timers, and serial protocols.'
  },
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'hardware',
    index: '10',
    iconName: 'CircuitBoard',
    description: 'Prototyping boards (Nano, Uno), sensor interfacing, and hardware debugging.'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'tools',
    index: '11',
    iconName: 'GitBranch',
    description: 'Version control workflows, repository branching, pull requests & code collaboration.'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'tools',
    index: '12',
    iconName: 'ShieldCheck',
    description: 'Network defense fundamentals, biometric spoof detection & digital privacy safety.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smart-assist-stick',
    number: '01',
    category: 'Hardware & Embedded',
    domain: 'hardware',
    status: 'OPERATIONAL',
    statusColor: 'tertiary',
    title: 'Smart Assist Blind Stick',
    description: 'Assistive technology project using Arduino Nano, ultrasonic and IR sensors, Bluetooth, buzzer, and vibration feedback.',
    tags: ['Arduino Nano', 'Ultrasonic Sensors', 'IR Sensors', 'Bluetooth', 'Hardware & Embedded'],
    fullDetails: {
      overview: 'The Smart Assist Blind Stick is an engineered assistive mobility device designed to empower visually impaired individuals with spatial awareness and hazard detection. By integrating multi-modal sensors, it continuously measures distance to obstacles both in mid-air and on ground levels.',
      keyHighlights: [
        'Dual-sensor telemetry with HC-SR04 ultrasonic transducer and sharp IR rangefinders for blind-spot elimination.',
        'Haptic feedback via calibrated ERM vibration motor and audible high-frequency piezoelectric buzzer.',
        'Low-latency Bluetooth HC-05 module enabling telemetry logging and companion smartphone connectivity.',
        'Lightweight ergonomic chassis with optimized battery management circuit for extended runtime.'
      ],
      hardwareStack: ['Arduino Nano (ATmega328P)', 'HC-SR04 Ultrasonic Sensor', 'IR Obstacle Sensor Array', 'HC-05 Bluetooth Module', 'Vibration Disc Motor', '3.7V Li-ion with TP4056'],
      softwareStack: ['Arduino C++', 'Embedded Wiring Library', 'Serial Telemetry Protocol'],
      architectureFlow: [
        'Sensor Acquisition: Ultrasonic emits 40kHz pulses; IR scans ground contours.',
        'Threshold Computation: Microcontroller calculates distance vector in < 15ms.',
        'Alert Matrix: If distance < 60cm, triggers proportional haptic pulse; if < 25cm, triggers buzzer.',
        'Wireless Telemetry: Pushes spatial alert packets to Bluetooth client.'
      ],
      githubUrl: 'https://github.com/anushkavishwakarma227-wq'
    }
  },
  {
    id: 'solar-tracker',
    number: '02',
    category: 'Mechatronics & IoT',
    domain: 'mechatronics',
    status: 'CALIBRATED',
    statusColor: 'tertiary',
    title: 'Single Axis Solar Tracker',
    description: 'Sensor-based project for solar-panel positioning along one axis.',
    tags: ['IoT', 'LDR Sensors', 'Servo Actuators', 'Microcontroller'],
    fullDetails: {
      overview: 'An automated photovoltaic efficiency maximization apparatus that realigns a solar panel array across the diurnal solar path. Dual light-dependent resistors compare lux intensity to orient the servo actuator toward maximum irradiance.',
      keyHighlights: [
        'Differential light sensing algorithm with hysteresis thresholding to prevent motor jitter.',
        'SG90 precision servo motor calibrated to 180° rotation matching dawn-to-dusk celestial arc.',
        'Empirical power yield improvement up to 28% compared to static fixed-angle solar panels.',
        'Autonomous evening reset routine returning panel to eastern orientation after twilight.'
      ],
      hardwareStack: ['Microcontroller Board', '2x Matched LDR Sensors', 'SG90 Micro Servo', 'Mini Photovoltaic Cell', 'Voltage Divider Resistors'],
      softwareStack: ['Embedded C', 'Analog-to-Digital Conversion (ADC)', 'Pulse Width Modulation (PWM)'],
      architectureFlow: [
        'Differential Lux Sampling: Dual analog inputs measure differential light gradient.',
        'Hysteresis Filtering: Compares delta (LDR_Left - LDR_Right) against deadband threshold.',
        'Servo Actuation: Updates PWM duty cycle to steer panel toward higher illumination.',
        'Sleep Cycle: Enters low-power state during uniform low-light night conditions.'
      ],
      githubUrl: 'https://github.com/anushkavishwakarma227-wq'
    }
  },
  {
    id: 'line-following-car',
    number: '03',
    category: 'Robotics & Autonomy',
    domain: 'robotics',
    status: 'TUNED',
    statusColor: 'tertiary',
    title: 'Zero Deviation — Line Following Car',
    description: 'Arduino-based autonomous robot using sensors and motor control to follow a marked path.',
    tags: ['Arduino', 'IR Array Sensors', 'Motor Driver ICs', 'Autonomous Control'],
    fullDetails: {
      overview: 'A high-speed autonomous mobile robot (AMR) engineered to maintain zero path deviation across complex looped tracks, sharp 90-degree corners, and intersecting paths using an array of infrared reflectance sensors and discrete H-bridge motor driving.',
      keyHighlights: [
        'Multi-channel TCRT5000 IR sensor array providing sub-centimeter line detection.',
        'L298N dual H-bridge motor driver providing bidirectional differential wheel velocity regulation.',
        'Optimized proportional steering control minimizing course overshoot and oscillation.',
        'Durable dual-chassis platform with caster ball stabilization.'
      ],
      hardwareStack: ['Arduino Board', 'TCRT5000 IR Reflectance Array', 'L298N Motor Driver IC', 'Dual DC Gear Motors', 'Chassis with Power Pack'],
      softwareStack: ['Arduino IDE / C++', 'Differential Drive Kinematics', 'Timer Interrupts'],
      architectureFlow: [
        'Reflectance Sampling: Infrared phototransistors detect contrast boundary of dark tape on white floor.',
        'State Classification: Evaluates sensor bitmap (Center, Left-Deviated, Right-Deviated, Intersection).',
        'Velocity Balancing: Modulates Left and Right PWM signals to execute smooth corrective steering.',
        'Closed-Loop Execution: Constant 100Hz loop cycle keeps deviation within tight margin.'
      ],
      githubUrl: 'https://github.com/anushkavishwakarma227-wq'
    }
  },
  {
    id: 'voiceguard',
    number: '04',
    category: 'AI & Biometric Security',
    domain: 'ai',
    status: 'RESEARCH PROTOTYPE',
    statusColor: 'secondary',
    title: 'VoiceGuard',
    description: 'AI-based prototype exploring detection of voice-cloning impersonation attacks.',
    tags: ['Artificial Intelligence', 'Audio Signal Processing', 'Deep Learning', 'Security'],
    fullDetails: {
      overview: 'VoiceGuard is an AI security research initiative addressing the emerging threat of generative voice synthesis and deepfake audio impersonation. The model analyzes acoustic anomalies, high-frequency harmonics, and phase coherence to distinguish synthetic neural speech from organic human vocal tract output.',
      keyHighlights: [
        'Spectro-temporal feature extraction utilizing Mel-Frequency Cepstral Coefficients (MFCCs) and Constant Q-Transform (CQT).',
        'Deep learning classifier trained against diverse deepfake voice datasets (SV2TTS, ElevenLabs, VITS).',
        'Binary confidence score output identifying likelihood of synthetic generative cloning.',
        'Real-time audio streaming buffer designed for voice verification gateways.'
      ],
      hardwareStack: ['Audio Capture Subsystem', 'Workstation GPU for Model Inference'],
      softwareStack: ['Python', 'PyTorch / TensorFlow', 'Librosa Audio Library', 'NumPy / Scipy', 'FastAPI'],
      architectureFlow: [
        'Audio Ingestion: Raw WAV stream sampled at 16kHz with dynamic noise gating.',
        'Spectral Transformation: Generates 2D Mel-Spectrogram and phase derivative tensors.',
        'Neural Inference: Convolutional/Transformer layers detect high-frequency artifact boundaries.',
        'Risk Rating: Generates threat classification report with biometric authenticity index.'
      ],
      githubUrl: 'https://github.com/anushkavishwakarma227-wq'
    }
  },
  {
    id: 'personal-portfolio',
    number: '05',
    category: 'Web Architecture',
    domain: 'web',
    status: 'PRODUCTION',
    statusColor: 'tertiary',
    title: 'Personal Portfolio Website',
    description: 'React/Vite portfolio website for presenting education, skills, projects, and professional profile.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'UI/UX Design', 'Web Development'],
    fullDetails: {
      overview: 'The modern portfolio web platform designed with the Obsidian Cybernetic design language. Built with modern TypeScript, React, and Tailwind CSS, featuring high contrast typography, smooth navigation, responsive micro-interactions, and modular design.',
      keyHighlights: [
        'Obsidian Cybernetic aesthetic with custom grid geometry and technical telemetry typography.',
        'Single-page fluid navigation with scroll spy, responsive mobile drawer, and modal inspections.',
        'Zero-dependency SVG icon integration with lucide-react and motion physics.',
        '100% responsive fluid grid architecture conforming to WCAG AA contrast standards.'
      ],
      hardwareStack: ['Cloud Run Edge CDN Container Host'],
      softwareStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Motion'],
      architectureFlow: [
        'Component Hierarchy: Modular breakdown with strict typed data structures.',
        'Telemetry Render: Cybernetic badges, coordinate tracking, and live availability indicator.',
        'Interactive Modals: Deep project inspection modal with hardware/software breakdowns.',
        'Optimized Assets: Fast cold-start delivery with zero render-blocking scripts.'
      ],
      githubUrl: 'https://github.com/anushkavishwakarma227-wq'
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'reva-university',
    period: '2025 – 2029',
    institution: 'REVA University',
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    description: 'Core studies covering intelligent systems, algorithms, statistical data models, autonomous robotics, and applied computing.',
    location: 'Bengaluru, India',
    isCurrent: true
  },
  {
    id: 'presidency-pu',
    period: 'PRE-UNIVERSITY',
    institution: 'Presidency PU College',
    degree: 'Pre-University Education — PCMC',
    description: 'Focused coursework in Physics, Chemistry, Mathematics, and Computer Science establishing foundational STEM principles.',
    location: 'Bengaluru',
    badge: 'PRE-UNIVERSITY'
  },
  {
    id: 'lake-montfort',
    period: 'FOUNDATIONAL',
    institution: 'Lake Montfort School',
    degree: 'Grade 1–10',
    description: 'Comprehensive secondary schooling with focus on academic excellence, mathematics, and early science exploration.',
    location: 'Secondary Certificate',
    badge: 'FOUNDATIONAL'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'robosphere',
    roleType: 'Leadership Role',
    title: 'Robosphere',
    subtitle: 'Social Media Head',
    description: 'Social Media Head — Spearheaded technical outreach, community engagement, and digital narrative for student robotics initiatives.',
    iconName: 'Megaphone',
    isLeadership: true
  },
  {
    id: 'phantom',
    roleType: 'Coordination Role',
    title: 'Phantom',
    subtitle: 'Event Manager',
    description: 'Event Manager — Directed logistics, operational flow, and inter-team alignment for large-scale college technical activities.',
    iconName: 'Calendar',
    isLeadership: true
  },
  {
    id: 'drone-workshop',
    roleType: 'Hands-on Training',
    title: 'Drone Technology Workshop',
    subtitle: 'UAV Dynamics & Integration',
    description: 'Intensive technical training in unmanned aerial vehicle dynamics, flight controllers, sensor integration, and motor testing.',
    iconName: 'Plane',
    isLeadership: false
  },
  {
    id: 'line-follower-workshop',
    roleType: 'Robotics Bootcamp',
    title: 'Line Following Robot Workshop',
    subtitle: 'Path Fidelity & Calibration',
    description: 'Applied robotics workshop focusing on IR sensor arrays, calibration logic, differential wheel drive systems, and path fidelity.',
    iconName: 'Bot',
    isLeadership: false
  }
];
