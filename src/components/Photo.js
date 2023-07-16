import React from "react";
import image1 from './photos/image1.jpg'
import image2 from './photos/image2.jpg'
import image3 from './photos/image3.jpg'
import image4 from './photos/image4.jpg'
import image5 from './photos/image5.jpg'
import image6 from './photos/image6.jpg'
import image7 from './photos/image7.jpg'
import image8 from './photos/image8.jpg'
import image9 from './photos/image9.jpg'
import image10 from './compages/piccolini.jpg'
import image11 from './photos/image11.jpg'
import image12 from './photos/image12.jpg'
function Photo() {
  return(
    <div className="photoborder" style={{marginLeft: '60px'}}>
      <img src={image1} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image2} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image3} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image4} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image5} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image6} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image7} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image8} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image9} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image10} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image11} alt="2px" style={{ width: '300px', height: 'auto' }}/>
      <img src={image12} alt="2px" style={{ width: '300px', height: 'auto' }}/>
    </div>
  );
}

export default Photo;
