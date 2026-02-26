import React from 'react';
import TechGrid from '../../components/TechGrid/TechGrid';
import './apropos.scss';
import photoappropos from './photoappropos/qui-suis-je-removebg-preview.png';
const Apropos = () => {
  return (
    <div className="container-apropos">
      <h1>
        QUI <strong>SUIS-JE?</strong>
      </h1>
      <div className="text-apropos">
        <p>
          Bonjour à tous, je suis <strong> Kahina SAIDI </strong> et je réside à{' '}
          <strong>Metz</strong> , en France. Consultante QA / Test Logiciel, je conçois et réalise des 
          tests fonctionnels et automatisés afin d’assurer la qualité et la fiabilité des applications web. 
          Je suis passionnée par l’assurance qualité et toujours motivée à apprendre de nouvelles 
          technologies pour optimiser les projets sur lesquels je travaille.
          <br />À part coder,j'aime aussi :<br /> 
          ✨ Apprendre de nouvelles compétences encore et encore... 🤷‍♀️,
          <br /> ✈️ Voyager 
          <br /> 📚 Lire
        </p>
        <img src={photoappropos} alt="image-apropos" />
      </div>

      <TechGrid></TechGrid>
    </div>
  );
};

export default Apropos;
