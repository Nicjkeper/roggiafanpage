import React from "react";
import CardContainer from "./compages/CardContainer";
import { Helmet } from "react-helmet";
import Ads from "./Ads";
import ButtonTest from "./ButtonTest";

function Rogge () {
    return (
      <div className="Rogge">
       <h1>Le rogge (ed eccezzioni)</h1>
       <CardContainer />
       <Ads />
      </div>
    );
}

export default Rogge;