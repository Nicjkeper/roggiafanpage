import React from "react";
import './card.css'

const CardContainerDownload = () => {
    return (
      <div className="card-container">
        <Card
        title="Versione Desktop del sito web"
        description="Scarica la versione desktop del sito web"
        />
        <Link to="/partecipazione" target="_blank" rel="noopener noreferrer">Download</Link>
        </div>
        )
    }

    export default CardContainerDownload
