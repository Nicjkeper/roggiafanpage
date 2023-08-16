import React from "react";
import Content from "./Content";

import Photo from "./Photo";
import Followcnt from "./Followcnt";
import SocialButtons from "./SocialButtons";
import Ebody from "./Ebody";
import Proposta from "./Proposta";
function Home () {
    return (
        <div className="Home">
      <Content />
      <Photo />
      <Ebody />
      <SocialButtons />
      <Followcnt />
      <Proposta />
       



      </div>
    );
}

export default Home;