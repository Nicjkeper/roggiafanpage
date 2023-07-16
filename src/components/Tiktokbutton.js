import React from 'react';
import tiktokIcon from './tiktokicon.png';


    const TikTokButton = () => {
        const containerStyle = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        };
      
        const buttonStyle = {
          borderRadius: '10px',
          backgroundColor: 'pink',
          color: 'black',
          padding: '15px 30px',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
        };
      
        const logoStyle = {
          width: '30px',
          height: '30px',
          marginRight: '10px',
        };
      
        const textStyle = {
          color: 'black',
          fontSize: '24px',
        };

  return (
    <div style={{ marginTop: '20px', marginLeft: '800px', marginRight: '700px', textAlign: 'center'}}>
      <a href="#" className="tiktok-button" style={buttonStyle}>
        <img src={tiktokIcon} alt="TikTok Icon" style={logoStyle} />
        <span style={textStyle}>TikTok (NON ANCORA DISPONIBILE)</span>
      </a>
    </div>
  );
};

export default TikTokButton;