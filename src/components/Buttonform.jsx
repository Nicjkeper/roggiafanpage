import React from 'react';
import { Link } from 'react-router-dom';

const Buttonform = () => {
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
    <div style={{ marginTop: '20px', marginLeft: '20px', textAlign: 'center' }}>
      <Link to="/partecipazione" target="_blank" rel="noopener noreferrer">
        <button style={buttonStyle}>
          <span style={textStyle}>Form adesione al team</span>
        </button>
        </Link>
    </div>
  );
};

export default Buttonform;