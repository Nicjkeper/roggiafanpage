import React from "react";

function Bord () {
    return(
        <nav className="navbar">
        <h1 className="title">Roggia Fanpage</h1>
        <div className="search">
          <input type="text" placeholder="Cerca..." />
          <button>Cerca nel sito</button>
        </div>
      </nav>
    );
}

export default Bord;