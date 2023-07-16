import React from "react";

function Followcnt () {
    return(
        <div className="Counter" style={{marginLeft: '300px'}}>
        <h1>Queste sono le persone che attualmente seguono il profilo </h1>
    <iframe
      title="Counter di Roggia Fanpage"
      height="80px"
      width="300px"
      src="https://livecounts.io/embed/instagram-live-follower-counter/_roggia_fanpage_"
      style={{ border: '0', width: '300px', height: '80px', marginLeft: '500px' }}
    />
    <p>Il counter è fornito da livecounter.io</p>
        </div>
    );
}
export default Followcnt;