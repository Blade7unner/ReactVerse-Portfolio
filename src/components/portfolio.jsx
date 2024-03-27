// Portfolio.jsx
import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Project
        title="Crypto Portfolio AI"
        image="image_url_here"
        deployedLink="deployed_link_here"
        githubLink="https://github.com/Blade7unner/Crypto-Portfolio-AI"
      />
      <Project
        title="README Generator"
        image="image_url_here"
        deployedLink="deployed_link_here"
        githubLink="https://github.com/Blade7unner/Readmegenerator"
      />
      <Project
        title="Weather Dashboard"
        image="image_url_here"
        deployedLink="deployed_link_here"
        githubLink="https://github.com/Blade7unner/Weather-Dashboard"
      />
    </div>
  );
};

export default Portfolio;