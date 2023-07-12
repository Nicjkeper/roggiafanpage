import React from "react";
import Content from "./Content";
import Ebody from "./Ebody";
import Photo from "./Photo";
import Button from "./Button";
import Followcnt from "./Followcnt";
function Home () {
    return (
        <div className="Home">
      <Content />
      <Ebody />
      <Photo />
      <h5 style={{textAlign: 'center'}}>Questi sono degli esempi di foto rogge che abbiamo fatto, le altre le trovat sul profilo Instagram ufficiale, oppure nella sezione Le Rogge</h5>
      <Button />
      <Followcnt />
      </div>
    );
}

export default Home;