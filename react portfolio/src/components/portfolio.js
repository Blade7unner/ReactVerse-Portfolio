// Portfolio.js

import React from 'react';
import CryptoPortfolioAI from './CryptoPortfolioAI';
import ReadmeGenerator from './ReadmeGenerator';
import WeatherDashboard from './WeatherDashboard';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <CryptoPortfolioAI />
      <ReadmeGenerator />
      <WeatherDashboard />
    </div>
  );
};

export default Portfolio;
