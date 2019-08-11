import React from 'react';
import CocoCard from '../components/Card';

function Portfolio() {
  return (
    <div>
      <div className="coco-banner" id="portfolio-background">
        <h2>PORTFOLIO</h2>
        <i>Working towards greatness</i>
      </div>
      <div id="coco-cards-container">
        <div><CocoCard /></div>
        <div><CocoCard /></div>
        <div><CocoCard /></div>
      </div>
    </div>
  );
}
    
export default Portfolio;