import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faSquareJs, faPython, 
  faGithub, faReact, faAngular, faVuejs, faPhp,faWordpress 
} from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

// Core Languages
export const coreLanguages = [
  { 
    name: 'HTML', 
    icon: <FontAwesomeIcon icon={faHtml5} />,
    description: 'The structure of web pages' 
  },
  { 
    name: 'CSS', 
    icon: <FontAwesomeIcon icon={faCss3Alt} />,
    description: 'Styling for websites' 
  },
  { 
    name: 'JavaScript', 
    icon: <FontAwesomeIcon icon={faSquareJs} />,
    description: 'Adds interactivity to websites' 
  },
];

// Other Languages
export const otherLanguages = [
  { 
    name: 'Wordpress', 
    icon: <FontAwesomeIcon icon={faWordpress} />,
    description: 'Content management system for building and managing websites' 
  },
  { 
    name: 'SQL', 
    icon: <FontAwesomeIcon icon={faDatabase} />,
    description: 'Language for managing relational databases' 
  },
  { 
    name: 'Python', 
    icon: <FontAwesomeIcon icon={faPython} />,
    description: 'General-purpose programming language' 
  },
];

// Other Technologies
export const technologies = [
  { 
    name: 'GitHub', 
    icon: <FontAwesomeIcon icon={faGithub} />,
    description: 'Version control and collaboration platform' 
  },
  { 
    name: 'React', 
    icon: <FontAwesomeIcon icon={faReact} />,
    description: 'JavaScript library for building user interfaces' 
  },
  { 
    name: 'APIs', 
    icon: <FontAwesomeIcon icon={faServer} />,
    description: 'Protocols for communication between applications' 
  },
];

// Learning Technologies
export const learningTechnologies = [
  { 
    name: 'Angular', 
    icon: <FontAwesomeIcon icon={faAngular} />,
    description: 'A web application framework powered by TypeScript' 
  },
  { 
    name: 'Vue.js', 
    icon: <FontAwesomeIcon icon={faVuejs} />,
    description: 'Progressive JavaScript framework for building UIs' 
  },
  { 
    name: 'PHP', 
    icon: <FontAwesomeIcon icon={faPhp} />,
    description: 'Server-side scripting language for web development' 
  },
];
