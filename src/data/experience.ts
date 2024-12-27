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
    description: 'Led development of mission-critical applications using modern web technologies. Mentored junior developers and implemented robust CI/CD pipelines.',
    responsibilities: [
      'Lead the effort in ensuring functionality of critical complex systems AutoTQ, a new IoT-enabled life-saving automatic tourniquet device',
      'Operate with strict adherence to FDA ISO 13485 and 14971 regulations for biomedical devices'
    ],
    achievements: [
      'Brought AutoTQ into mass production within four months of the fast-moving demands of a new startup',
      'Iterated numerous prototypes to ensure the device was safe, user-friendly, and reliable',
      'Collaborated with the Quality Assurance team in extensive engineering documentation/history and for device risk management.'
    ],
    skills: ['Embedded Systems Development', 'git Version Control', 'Solidworks', 'Design for Manufacturability (DFM)', 'OnShape', '3D Printer Proficiency', ]
  },
  {
    id: 'startup-fullstack',
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Developed scalable web applications using Next.js and Express. Improved application performance by 40% through optimization techniques.',
    responsibilities: [
      'Developed full-stack applications using Next.js and Express',
      'Designed and implemented RESTful APIs',
      'Managed database schema design and optimization',
      'Implemented real-time features using WebSocket',
      'Collaborated with UX team to implement responsive designs'
    ],
    achievements: [
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Implemented automated deployment process saving 10 hours per week',
      'Built a reusable component library used across multiple projects'
    ],
    skills: ['Next.js', 'JavaScript', 'Express', 'PostgreSQL', 'Git']
  },
  {
    id: 'dev-solutions',
    title: 'Software Developer',
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