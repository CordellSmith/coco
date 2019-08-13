import React from 'react';
import CocoCard from '../components/Card';

function Portfolio() {
  return (
    <div>
      <div className="coco-banner">
        <h2>Portfolio</h2>
        <i>Delivering Excellence</i>
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