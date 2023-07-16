import React from "react";
import Content from "./Content";
import Ebody from "./Ebody";
import Photo from "./Photo";
import Button from "./Button";
import Followcnt from "./Followcnt";
import Formpartecipazione from "./Formpartecipazione";
import TikTokButton from "./Tiktokbutton";
import  {Helmet} from "react-helmet"
import Ads from "./Ads";
function Home () {
    return (
        <div className="Home">
      <Content />
      <Ebody />
      <Photo />
      <h5 style={{textAlign: 'center'}}>Questi sono degli esempi di foto rogge che abbiamo fatto, le altre le trovat sul profilo Instagram ufficiale, oppure nella sezione Le Rogge</h5>
      <Button />
      <TikTokButton />
      <Followcnt />
      <h1>Se qualucuno fosse interessato a partecipare ed a contribuire al profilo può fare richiesta qui:
      </h1>
      <Formpartecipazione />
      <Ads />

      </div>
    );
}

export default Home;