import React from "react";
import AlertWidget from "./compages/AlertWidget";
const News = () => {
    return(
    <div>
    <AlertWidget type="success" message="News Patch 0.01 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e l'implementazione del form google e la pagina delle news" />
    <AlertWidget type="success" message="News Patch 0.02 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e l'implementazione delle pubblicità" />
    </div>
    );
}

export default News;