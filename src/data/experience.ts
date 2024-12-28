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
    description: 'Lead the effort in ensuring functionality of critical complex systems AutoTQ, a new IoT-enabled life-saving automatic tourniquet device.',
    responsibilities: [
      'Lead the effort in ensuring functionality of critical complex systems AutoTQ, a new IoT-enabled life-saving automatic tourniquet device',
      'Operate with strict adherence to FDA ISO 13485 and 14971 regulations for biomedical devices'
    ],
    achievements: [
      'Brought AutoTQ into mass production within four months of the fast-moving demands of a new startup',
      'Iterated numerous prototypes to ensure the device was safe, user-friendly, and reliable',
      'Collaborated with the Quality Assurance team in extensive engineering documentation/history and for device risk management.'
    ],
    skills: ['Biomedical Devices', 'Embedded Systems Development', 'Git Version Control', 'Solidworks', 'Design for Manufacturability (DFM)', 'OnShape', '3D Printer Proficiency', 'Arduino', 'Rapid Prototyping' ]
  },
  {
    id: 'johns-hopkins',
    title: 'Research Intern',
    company: 'Johns Hopkins University - Neuroengineering and Biomedical Instrumentation Laboratory',
    period: '2020 – 2024',
    description: 'Designed a novel biomimetic Soft-Rigid Hybrid Prosthetic Finger with more than 3 times the grasping force of traditional soft robotic prosthetic fingers. <strong>Publication to IEEE Science Advances Journal under review.</strong><br />PI: Dr. Nitish Thakor.',
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
    skills: ['Solidworks', 'Soft Robotics', 'Finite Element Analysis (FEA)', 'Tactile Sensing', 'Mold Making & Casting', 'Prosthetics']
  },
  {
    id: 'dev-solutions',
    title: 'TEST',
    company: 'Dev Solutions',
    period: '2016 - 2018',
    description: 'Built and maintained multiple client-facing applications. Implemented responsive designs and RESTful APIs.',
    responsibilities: [
      'Developed and maintained client websites using React',
      'Created responsive layouts using modern CSS techniques',
      'Built and integrated RESTful APIs',
      'Implemented automated testing solutions',
      'Collaborated with designers to implement pixel-perfect designs'
    ],
    achievements: [
      'Successfully delivered 15+ client projects on time and within budget',
      'Reduced bug reports by 50% through comprehensive testing implementation',
      'Mentored 3 junior developers who were promoted to mid-level positions'
    ],
    skills: ['React', 'Python', 'Tailwind CSS', 'PostgreSQL']
  }
];