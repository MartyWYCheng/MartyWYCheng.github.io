interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  skills: string[];
  images?: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'biorobotics-lab',
    title: 'Research Assistant',
    company: 'Florida Atlantic University - BioRobotics Lab',
    period: '2018 - Present',
    summary: 'PI: <em>Dr. Erik Engeberg</em><br />Developing new methods of improving the quality of life of amputees through advancements such as smart AI robotic prosthetics with integrated haptic feedback.',
    description: 'PI: <em>Dr. Erik Engeberg</em><br />Developing new methods of improving the quality of life of amputees through advancements such as smart AI robotic prosthetics with integrated haptic feedback.',
    responsibilities: [],
    achievements: [
      'Designed a novel high-density Force Myogram (FMG) sensor array, outperforming EMG with 99% classification accuracy across 20 hand gestures using AI pattern recognition in our 10-subject test. Publication in progress.',
      'Developed and integrated custom software, firmware, and hardware components for data collection, featuring a proprietary biodata processing and analysis method with an intuitive subject testing user interface.',
      'Programmed UR5 and UR3 robots to precisely probe nine points within 15mm² area for testing custom-built Hall effect sensors, ensuring meticulous accuracy in robot movement.',
      'Led the development of a Variable-Pressure Prosthetic Socket using Granular Jamming technology and secured $1,200 in 2021 to further advance the project. ',
      'Led a project team in securing $2,400 in consecutive grants (2018 and 2019) to develop a novel modular Soft Robotic Haptic Feedback system. '
    ],
    skills: ['Prosthetics', 'Biomedical Devices', 'MATLAB/Simulink', 'AI Integration', 'Soft Robotics', 'Tactile Sensing', 'Rapid Prototyping', 'Solidworks', 'Embedded Systems Development', 'Human-Robot/Computer Interaction (HRI/HCI)', 'Deep Reinforcement Learning (DRL)', 'ROS', 'Universal Robotics (UR) Lineup', 'Arduino', 'C/C++', 'Academic/Grant Writing', 'Public Speaking', 'Team Leadership'],
    images: ['socketWearMp4.mp4', 'socket.jpg', 'socketWear1.JPG', 'socketWear2.JPG'],
  },
  {
    id: 'johns-hopkins',
    title: 'Research Intern',
    company: 'Johns Hopkins University - Neuroengineering and Biomedical Instrumentation Laboratory',
    period: '2020 – 2024',
    summary: 'PI: <em>Dr. Nitish Thakor</em><br />Collaborated with an interdisciplinary team fully remotely and led the design of a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger with more than 3 times the grasping force of traditional soft robotic prosthetic fingers. Publication to <strong>IEEE Science Advances Journal</strong> under review.',
    description: 'PI: <em>Dr. Nitish Thakor</em><br />Collaborated with an interdisciplinary team fully remotely and led the design of a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger with more than 3 times the grasping force of traditional soft robotic prosthetic fingers. Publication to <strong>IEEE Science Advances Journal</strong> under review.',
    responsibilities: [],
    achievements: [
      'Fabricated a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger with more than 3 times the grasping force and 2 times the flexion angle of traditional soft robotic prosthetic fingers',
      'Integrated a novel tactile sensor into the hybrid prosthetic finger for touch sensing',
      'Performed extensive finite element analysis (FEA) to ensure proper material selection and prevent failure',
      'Collaborated with the cross-disciplinary research team at the Johns Hopkins Neuroengineering and Biomedical Instrumentation Laboratory fully remotely during the COVID-19 pandemic',
      'Published findings in IEEE Science Advances Journal'
    ],
    skills: ['Solidworks', 'Soft Robotics', 'Biomedical Devices', 'Finite Element Analysis (FEA)', 'ANSYS', 'Tactile Sensing', 'Human-Robot/Computer Interaction (HRI/HCI)', 'Mold Making & Casting', 'Prosthetics', 'Interdisciplinary Engineering'],
    images: ['jhuVid.mp4','jhu1.png'],
  },

  {
    id: 'golden-hour',
    title: 'Systems Engineer',
    company: 'Golden Hour Medical',
    period: '2023 - 2024',
    summary: 'Pioneered new life-saving automatic tourniquet technology. Led the effort in bringing prototype hardware into mass production in under four months and ensured functionality of critical complex systems.',
    description: 'Pioneered new life-saving automatic tourniquet technology. Led the effort in bringing prototype hardware into mass production in under four months and ensured functionality of critical complex systems.',
    responsibilities: [],
    achievements: [
      'Led the effort in ensuring functionality of critical complex systems AutoTQ, a new IoT-enabled life-saving automatic tourniquet device',
      'Operated with strict adherence to FDA ISO 13485 and 14971 regulations for biomedical devices',
      'Brought AutoTQ into mass production within four months of the fast-moving demands of a new startup',
      'Iterated numerous prototypes to ensure the device was safe, user-friendly, and reliable',
      'Collaborated with the Quality Assurance team in extensive engineering documentation/history and for device risk management.'
    ],
    skills: ['Biomedical Devices', 'Embedded Systems Development', 'Rapid Prototyping', 'Git Version Control', 'Solidworks', 'Design for Manufacturability (DFM)', 'OnShape', '3D Printer Proficiency', 'Arduino', 'C/C++', 'Interdisciplinary Engineering'],
    images: ['goldenHour1.JPG', 'goldenHour2.JPG'],
  },

  {
    id: 'adaptive-learning-lab',
    title: 'Research Assistant',
    company: 'Florida Atlantic University - Adaptive Learning Systems Lab',
    period: '2018 - Present',
    summary: 'PI: <em>Dr. Zhen Ni</em><br />Diving deep into AI robotic applications with high-end vision/navigation simulations of mobile robots and robotic arms such as TurtleBot and Kinova Gen3 Lite through ROS.',
    description: 'PI: <em>Dr. Zhen Ni</em><br />Diving deep into AI robotic applications with high-end vision/navigation simulations of mobile robots and robotic arms such as TurtleBot and Kinova Gen3 Lite through ROS.',
    responsibilities: [],
    achievements: [
      'Develop a low-cost Wireless Charging Station for use with the integrated computer vision system of the Turtle-Bot 3 mobile robot platform.',
      'Improve a PPO robotic arm training algorithm for parallel training of the Kinova Gen 3 Robot Arm. ',
      'Published and presented work on Wireless Charging Station at 2023 IEEE HONET conference.',
      'Manuscript for PPO training algorithm accepted to 2025 SPIE Conference.'
    ],
    skills: ['AI Integration', 'Deep Reinforcement Learning (DRL)', 'TensorFlow', 'Scikit-learn', 'Keras', 'PyTorch', 'OpenCV', 'Pandas', 'NumPy', 'Python', 'C/C++', 'ROS', 'TurtleBot3', 'Kinova Gen3 Lite', 'Gazebo', 'Solidworks', 'Embedded Systems Development', 'Academic/Grant Writing', 'Public Speaking'],
    images: ['computerVision.mp4'],
  }
];