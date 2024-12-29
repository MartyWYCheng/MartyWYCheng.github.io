interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  skills: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'golden-hour',
    title: 'Systems Engineer',
    company: 'Golden Hour Medical',
    period: '2023 - 2024',
    description: 'Pioneered new life-saving automatic tourniquet technology. Led the effort in bringing prototype hardware into mass production in under four months and ensured functionality of critical complex systems.',
    responsibilities: [
      'Lead the effort in ensuring functionality of critical complex systems AutoTQ, a new IoT-enabled life-saving automatic tourniquet device',
      'Operate with strict adherence to FDA ISO 13485 and 14971 regulations for biomedical devices'
    ],
    achievements: [
      'Brought AutoTQ into mass production within four months of the fast-moving demands of a new startup',
      'Iterated numerous prototypes to ensure the device was safe, user-friendly, and reliable',
      'Collaborated with the Quality Assurance team in extensive engineering documentation/history and for device risk management.'
    ],
    skills: ['Biomedical Devices', 'Embedded Systems Development', 'Rapid Prototyping', 'Git Version Control', 'Solidworks', 'Design for Manufacturability (DFM)', 'OnShape', '3D Printer Proficiency', 'Arduino', 'Interdisciplinary Engineering']
  },
  {
    id: 'johns-hopkins',
    title: 'Research Intern',
    company: 'Johns Hopkins University - Neuroengineering and Biomedical Instrumentation Laboratory',
    period: '2020 – 2024',
    description: 'Collaborated with an interdisciplinary team fully remotely and led the design of a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger with more than 3 times the grasping force of traditional soft robotic prosthetic fingers. Publication to <strong>IEEE Science Advances Journal</strong> under review.<br /><u>PI: Dr. Nitish Thakor</u>',
    responsibilities: [
      'Design a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger',
      'Aid in performance comparison against traditional soft robotic prosthetic fingers',
      'Perform extensive finite element analysis (FEA) to ensure proper material selection and prevent failure',
      'Integrate a novel tactile sensor into the hybrid prosthetic finger for touch sensing',
      'Assist in authoring the publication'
    ],
    achievements: [
      'Fabricated a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger with more than 3 times the grasping force and 2 times the flexion angle of traditional soft robotic prosthetic fingers',
      'Collaborated with the cross-disciplinary research team at the Johns Hopkins Neuroengineering and Biomedical Instrumentation Laboratory fully remotely during the COVID-19 pandemic',
      'Publication to IEEE Science Advances Journal submitted and is currently under review'
    ],
    skills: ['Solidworks', 'Soft Robotics', 'Finite Element Analysis (FEA)', 'Tactile Sensing', 'Mold Making & Casting', 'Prosthetics', 'Interdisciplinary Engineering']
  },
  {
    id: 'biorobotics-lab',
    title: 'Research Assistant',
    company: 'Florida Atlantic University - BioRobotics Lab',
    period: '2018 - Present',
    description: 'Developing new methods of improving the quality of life of amputees through advancements such as smart AI robotic prosthetics with integrated haptic feedback. <br /><u>PI: Dr. Erik Engeberg</u>',
    responsibilities: [
      'Designed a novel high-density Force Myogram (FMG) sensor array, outperforming EMG with 99% classification accuracy across 20 hand gestures using AI pattern recognition in our 10-subject test. Publication in progress.',
      'Developed and integrated custom software, firmware, and hardware components for data collection, featuring a proprietary biodata processing and analysis method with an intuitive subject testing user interface.',
      'Programmed UR5 and UR3 robots to precisely probe nine points within 15mm² area for testing custom-built Hall ef-fect sensors, ensuring meticulous accuracy in robot movement.'
    ],
    achievements: [
      'Led the development of a Variable-Pressure Prosthetic Socket using Granular Jamming technology and secured $1,200 in 2021 to further advance the project. ',
      'Led a project team in securing $2,400 in consecutive grants (2018 and 2019) to develop a novel modular Soft Ro-botic Haptic Feedback system. '
    ],
    skills: ['Prosthetics', 'Biomedical Devices', 'MATLAB/Simulink', 'AI Integration', 'Soft Robotics', 'Tactile Sensing', 'Rapid Prototyping', 'Solidworks', 'Embedded Systems Development', 'Deep Reinforcement Learning (DRL)', 'ROS', 'Universal Robotics (UR) Lineup', 'C/C++', 'Academic/Grant Writing', 'Public Speaking', 'Team Leadership']
  },
  {
    id: 'adaptive-learning-lab',
    title: 'Research Assistant',
    company: 'Florida Atlantic University - Adaptive Learning Systems Lab',
    period: '2018 - Present',
    description: 'Diving deep into AI robotic applications with high-end vision/navigation simulations of mobile robots and robotic arms such as TurtleBot and Kinova Gen3 Lite through ROS. <br /><u>PI: Dr. Zhen Ni</u>',
    responsibilities: [
      'Develop a low-cost Wireless Charging Station for use with the integrated computer vision system of the Turtle-Bot 3 mobile robot platform.',
      'Improve a PPO robotic arm training algorithm for parallel training of the Kinova Gen 3 Robot Arm. '
    ],
    achievements: [
      'Published and presented work on Wireless Charging Station at 2023 IEEE HONET conference.',
      'Publication for PPO training algorithm in progress.'
    ],
    skills: ['AI Integration', 'Deep Reinforcement Learning (DRL)', 'TensorFlow', 'Scikit-learn', 'Keras', 'Pytorch', 'Pandas', 'NumPy', 'Python', 'C/C++', 'ROS', 'TurtleBot3', 'Kinova Gen3 Lite', 'Gazebo', 'Academic/Grant Writing', 'Public Speaking']
  }
];