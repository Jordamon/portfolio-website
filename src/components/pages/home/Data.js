import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faSquareJs, faNodeJs, faPython, 
  faGithub, faReact, faAngular, faVuejs, faPhp 
} from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

// Core Languages
export const coreLanguages = [
  { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faSquareJs} /> },
];

// Other Languages
export const otherLanguages = [
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} /> },
  { name: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} /> },
  { name: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
];

// Other Technologies
export const technologies = [
  { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} /> },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
  { name: 'APIs', icon: <FontAwesomeIcon icon={faServer} /> },
];

// Learning Technologies
export const learningTechnologies = [
  { name: 'Angular', icon: <FontAwesomeIcon icon={faAngular} /> },
  { name: 'Vue.js', icon: <FontAwesomeIcon icon={faVuejs} /> },
  { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} /> },
];
