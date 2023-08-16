import React from "react";
import { Alert } from "@mui/material";
const News = () => {
    return(
    <div>
    <Alert variant="filled" severity="success">
    News Patch 0.01 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e l'implementazione del form google e la pagina delle news News Patch 0.02 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e l'implementazione delle pubblicità News Patch 0.03 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e parzialmente adattato al mobile News Patch 0.04 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e l'aggiunta della mappa delle rogge nella pagina maps
</Alert>
    <Alert variant="filled" severity="info">
    Buone notizie, il sito web di roggia fanpage, è accessibile anche dalla Cina, sia quella continentale che nelle RAS di Hong Kong e Macao.
</Alert>
    <Alert variant="filled" severity="success">
    News Patch 0.05 Pre-Alpha: Aggiornamenti alla sintassi ed al codice, e il sistemamento della compilazione del modulo
</Alert>
    <Alert variant="filled" severity="warning">
    Ci siono problemi con lo stile del sito a casusa del cambio di Framework UI, che da css assincrono, siamo passati a Material UI e Bootstrap. Scusateci per il disagio e risolveremo nel minor tempo possibile
    </Alert>
    <Alert variant="filled" severity="success">
    News Patch 0.1-Alpha: Sistemazione Front-End, e l'aggiunta di più foto nella sezione Rogge
</Alert>
<Alert variant="filled" severity="success">
    News Patch 0.2-Alpha: Correzione alla grammatica del sito e l'aggiunta di un nuovo luogo alla mappa delle rogge 
</Alert>
<Alert variant="filled" severity="success">
    News Patch 0.3-Alpha: Correzione alla grammatica del sito e l'aggiunta di tutte le foto roggia presenti sul profilo nella sezione "Le rogge"
</Alert>
<Alert variant="filled" severity="success">
    News Patch 0.4-Alpha: Modernizzazione e stilizzazione home page
</Alert>
<Alert variant="filled" severity="info">
    Novità, da oggi e possibile mandare le proprie foto al team diretto di Roggia Fanpage, che le esaminerà per essere pubblicate in community.
</Alert>
    </div>
    );
}

export default News;