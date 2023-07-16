import React from 'react';
import ig from './photos/ig.png';

const Button = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const buttonStyle = {
    borderRadius: '10px',
    backgroundColor: 'red',
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
    <div style={{ marginTop: '20px', marginLeft: '800px', textAlign: 'center'}}>
      <a href="https://www.instagram.com/_roggia_fanpage_/" target="_blank" rel="noopener noreferrer">
        <button style={buttonStyle}>
          <span style={textStyle}>Seguiteci su Instagram</span>
          <img src={ig} alt="Instagram Logo" style={{ width: '40px', height: 'auto' }} />
        </button>
      </a>
    </div>
  );
};

export default Button;
