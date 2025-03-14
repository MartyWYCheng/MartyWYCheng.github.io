interface Projects {
  id: string;
  title: string;
  summary: string;
  description: string;
  achievements?: string[];
  skills: string[];
  images?: string[];
}
export const projectsData: Projects[] = [
  {
    id: 'ai-powered-dog-care',
    title: 'AI-Powered Dog Care iOS App',
    summary: 'Integrated an LLM AI chatbot with retrieval augmented generation (RAG) into an app developed from ground up in Swift.',
    description: 'Integrated an LLM AI chatbot with retrieval augmented generation (RAG) into an app developed from ground up in Swift.',
    skills: ['AI Integration', 'LLM', 'RAG', 'Langchain', 'Swift', 'OpenAI API', 'Python', 'Git Version Control'],
    images: ['app1.png', 'app2.png', 'app3.png'],
  },
  {
    id: 'adaptive-fit-socket',
    title: 'Adaptive Fit Granular Jamming Prosthetic Socket',
    summary: 'Led a team in designing and fabricating a novel adaptive fit prosthetic socket using granular jamming.',
    description: 'Led a team in designing and fabricating a novel adaptive fit prosthetic socket using granular jamming.',
    skills: ['Biomedical Devices', 'Solidworks', 'Granular Jamming', 'Arduino', 'C/C++', 'Rapid Prototyping', '3D Printing', 'Git Version Control'],
    images: ['adaptiveSocket.JPG'],
  },
  {
    id: 'hydrogen-fuel-cell',
    title: 'Hydrogen Fuel Cell RC Car',
    summary: 'Integrated a hydrogen fuel cell into an RC car. Won the fastest lap award at the Florida state-wide H2AC Hydrogen Horizon Automotive Challenge.',
    description: 'We spent several months integrating a hydrogen fuel cell into an RC car while making time for the team to practice with the modified car. We had to overcome numerous engineering challenges in order to optimize speed, acceleration, handling, and the toughest of all, weight. Despite taking heavy damage through the race, we won the fastest lap award at the Florida state-wide H2AC Hydrogen Horizon Automotive Challenge.',
    skills: ['Team Leadership','Rapid Prototyping', '3D Printer Proficiency', 'Solidworks', 'Embedded Systems Development'],
    images: ['hydronexgen1.JPG', 'hydronexgen2.JPG', 'hydronexgen3.JPG','hydronexgen4.JPG'],
  },{
    id: 'ev',
    title: 'GT-EV Electric Supercar',
    summary: 'Built an electric supercar from the ground up.',
    description: 'We simply built an electric supercar from the ground up. Built on the DDR Grullón GT4 kit with a Toyota MR2 Chassis with goals of 0-60 mph in under four seconds and over 100+ miles per charge.',
    skills: ['Interdisciplinary Engineering'],
    images: ['gtev1.JPG','gtev_group.JPG'],
  },
];