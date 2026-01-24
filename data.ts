
import { BlogPost, Author } from './types';

export const AUTHORS: Record<string, Author> = {
  'robo-editor': {
    id: 'robo-editor',
    name: '@mhrshuvo',
    role: 'Chief Robo-doc',
    avatar: 'https://picsum.photos/seed/drnexus/150/150',
    bio: 'Pioneer in neural network optimization and quantum computing ethics. Dr. Nexus has been writing about the fusion of humanity and silicon for over a decade.'
  }
};

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-neural-interfaces',
    title: 'The Future of Neural Interfaces: Beyond the Screen',
    description: 'Explore how direct brain-to-computer communication is evolving and what it means for the next generation of digital interaction.',
    category: 'Future Tech',
    author: AUTHORS['robo-editor'],
    publishedAt: '2024-10-24',
    readingTime: '6 min',
    thumbnail: 'https://picsum.photos/seed/neural/800/450',
    content: `
      <h2>The Dawn of Direct Connection</h2>
      <p>Humanity has always sought faster ways to communicate with the machines we create. From punch cards to keyboards, mice to touchscreens, and now voice commands. But the final frontier is direct neural interaction.</p>
      
      <h3>What is a BCI?</h3>
      <p>Brain-Computer Interfaces (BCIs) are systems that allow for direct communication between an external device and the brain. While currently primarily used in medical contexts to restore mobility or communication, the commercial applications are expanding rapidly.</p>
      
      <p>Imagine a world where you can simply think of a search query, and the results are presented directly to your visual cortex. No typing, no talking, just pure thought-to-data exchange.</p>
      
      <h3>The Challenges Ahead</h3>
      <p>Security and privacy are the primary concerns. If a computer can read your brain signals, who owns that data? How do we prevent "brain-jacking"? These are the questions ethics committees are currently wrestling with.</p>
    `,
    faqs: [
      { question: "What is a Neural Interface?", answer: "It is a direct communication pathway between an enhanced or wired brain and an external device." },
      { question: "Are BCIs safe?", answer: "Current non-invasive models are perfectly safe, though invasive surgical implants carry medical risks." }
    ]
  },
  {
    id: '2',
    slug: 'quantum-computing-explained',
    title: 'Quantum Computing: From Theory to Reality',
    description: 'A beginner-friendly guide to understanding how qubits change everything we know about processing power.',
    category: 'Science',
    author: AUTHORS['robo-editor'],
    publishedAt: '2024-10-22',
    readingTime: '8 min',
    thumbnail: 'https://picsum.photos/seed/quantum/800/450',
    content: `
      <h2>Beyond Binary</h2>
      <p>For decades, our computers have operated on bits—zeros and ones. Quantum computing introduces the Qubit, which can exist in multiple states simultaneously thanks to superposition.</p>
      
      <h3>Entanglement and Speed</h3>
      <p>Through entanglement, qubits can be linked in ways that allow for massive parallel processing beyond the capability of any classical supercomputer.</p>
    `
  },
  {
    id: '3',
    slug: 'ai-ethics-in-2025',
    title: 'AI Ethics in 2025: Navigating the Grey Areas',
    description: 'As AI models become more autonomous, the line between machine logic and human morality begins to blur.',
    category: 'AI Ethics',
    author: AUTHORS['robo-editor'],
    publishedAt: '2024-10-20',
    readingTime: '5 min',
    thumbnail: 'https://picsum.photos/seed/ethics/800/450',
    content: `
      <h2>The Moral Algorithm</h2>
      <p>Can we teach a machine right from wrong? In 2025, AI is making decisions in healthcare, finance, and legal systems. Ensuring these systems are unbiased is the greatest challenge of our time.</p>
    `
  }
];

export const CATEGORIES = ['Future Tech', 'Science', 'AI Ethics', 'Robotics', 'Space'];
