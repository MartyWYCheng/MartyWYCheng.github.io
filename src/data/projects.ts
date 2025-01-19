interface Projects {
  id: string;
  title: string;
  summary: string;
  description: string;
  achievements?: string[];
  skills: string[];
}
export const projectsData: Projects[] = [
  {
    id: 'ai-powered-dog-care',
    title: 'AI-Powered Dog Care iOS App',
    summary: 'Integrated an LLM AI chatbot with retrieval augmented generation (RAG) into an app developed from ground up in Swift.',
    description: 'Integrated an LLM AI chatbot with retrieval augmented generation (RAG) into an app developed from ground up in Swift.',
    skills: ['AI Integration', 'LLM', 'RAG', 'Langchain', 'Swift', 'OpenAI API', 'Python', 'Git Version Control'],
  },
  {
    id: 'adaptive-fit-prosethtic-socket',
    title: 'Adaptive Fit Granular Jamming Prosthetic Socket',
    summary: 'Led a team in designing and fabricating a novel adaptive fit prosthetic socket using granular jamming.',
    description: 'Led a team in designing and fabricating a novel adaptive fit prosthetic socket using granular jamming.',
    skills: ['AI Integration', 'LLM', 'RAG', 'Langchain', 'Swift', 'OpenAI API', 'Python', 'Git Version Control'],
  },
  {
    id: '',
    title: 'Section Under Construction...',
    summary: '',
    description: 'This section is under construction. Please check back later for updates.',
    skills: [],
  },
];