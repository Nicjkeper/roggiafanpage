import React from 'react';
import ig from './photos/ig.png';
import tiktokIcon from './tiktokicon.png';
import yt from './youtube.png';

const SocialButtons = () => {
  const logoStyle = {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  };

  const textStyle = {
    fontSize: '24px',
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Instagram Button */}
        <div className="col-md-6">
          <a href="https://www.instagram.com/_roggia_fanpage_/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary d-flex align-items-center">
              <span className="mr-2" style={textStyle}>Seguiteci su Instagram</span>
              <img src={ig} alt="Instagram Logo" style={{ ...logoStyle, width: '40px' }} />
            </button>
          </a>
        </div>

        {/* TikTok Button */}
        <div className="col-md-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary d-flex align-items-center">
              <span className="mr-2" style={textStyle}>Seguiteci su TikTok </span>
              <img src={tiktokIcon} alt="TikTok Logo" style={logoStyle} />
            </button>
          </a>
        </div>
        <div className="col-md-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary d-flex align-items-center">
              <span className="mr-2" style={textStyle}>Seguiteci su YouTube </span>
              <img src={yt} alt="YouTube Logo" style={logoStyle} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
