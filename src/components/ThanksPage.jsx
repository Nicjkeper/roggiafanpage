import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThanksPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Reindirizzamento automatico alla home page dopo 3 secondi
    const redirectTimeout = setTimeout(() => {
      navigate('/home');
    }, 3000); // Ritardo di 3 secondi prima del reindirizzamento

    // Pulizia del timeout al momento dello smontaggio del componente
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div>
      <h1>Grazie per aver compilato il modulo!</h1>
      <div className='paragraph' style={{borderLeft: '30px', marginLeft: '60px'}}>
      <p>Stai per essere reindirizzato alla home page.</p>
      </div>
    </div>
  );
};

export default ThanksPage;

