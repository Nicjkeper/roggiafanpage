import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Utilizziamo styled per creare un componente personalizzato che estende il componente Button di Material-UI
const BootstrapStyleButton = styled(Button)({
  background: '#007bff',
  color: 'white',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: '#0056b3',
  },
});

const HomeButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Reindirizzamento alla home page
    navigate('/home');
  };

  return (
    <div>
      <BootstrapStyleButton onClick={handleButtonClick}>
        Ritorna alla HOME PAGE
      </BootstrapStyleButton>
    </div>
  );
};

export default HomeButton;

