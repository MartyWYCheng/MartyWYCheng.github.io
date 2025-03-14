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
    images: ['adaptiveSocket.jpg'],
  },
  {
    id: 'hydrogen-fuel-cell',
    title: 'Hydrogen Fuel Cell RC Car',
    summary: 'Details coming soon...',
    description: 'Details coming soon...',
    skills: [],
    images: [],
  },{
    id: 'ev',
    title: 'Electric Supercar',
    summary: 'Details coming soon...',
    description: 'Details coming soon...',
    skills: [],
    images: [],
  },
];