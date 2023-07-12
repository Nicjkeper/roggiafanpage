import React from 'react';
import './card.css'

const Card = ({ imageSrc, title, description, linkbutton, descrbutton }) => {
  return (
    
    <div className="card custom-card-first">
        
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={{linkbutton}} className="my-button">Vedi Luogo in Google Maps</a>
      </div>
      </div>
      
  );
}

  export default Card;