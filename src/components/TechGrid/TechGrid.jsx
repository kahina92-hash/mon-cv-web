import { FaBug, FaDatabase, FaNetworkWired, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

// Import de Redux

import './techgrid.scss';

const technologies = [
 { name: "Tests fonctionnels", icon: <FaBug className="text-red-500 text-6xl" /> },
  { name: "Tests automatisés (Cypress)", icon: <FaJs className="text-green-500 text-6xl" /> }, 
  { name: "API / Web services", icon: <FaNetworkWired className="text-blue-500 text-6xl" /> },
  { name: "Base de données (SQL)", icon: <FaDatabase className="text-purple-500 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-700 text-6xl" /> },// Ajout de Redux
 

];

const TechGrid = () => {
  return (
    <div className="tech-container">
         <h2>Compétences Professionnelles
         </h2>
      <div className="tech-grid">
     
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;
