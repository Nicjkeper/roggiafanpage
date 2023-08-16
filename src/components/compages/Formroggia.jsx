import React from "react";
import Formpartecipazione from "./Formpartecipazione";

function Formroggia () {
    return(
    <div className="container">
        <h1>Per chi volesse entrare nel team, proponga la domanda in questo google form. Le avviseremo se è stata acettata o no.</h1>
        <Formpartecipazione />
    </div>
    );
}

export default Formroggia;