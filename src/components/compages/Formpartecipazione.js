import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from './HomeButton';

const Formpartecipazione = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'form-submitted') {
        navigate('/thanks');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  return (
    <div style={{ marginLeft: '500px' }}>
      {/* Aggiungi il componente IFrameForm con l'URL del form e la larghezza/altezza specificate */}
      <IFrameForm
        src="https://docs.google.com/forms/d/e/1FAIpQLScMD50vfnSgTRhEwjdGlsVaUdFOrKCbYcVxiV__TYbi2ejnZQ/viewform?embedded=true"
        width="640"
        height="1000"
      />
    </div>
  );
};

// Componente funzionale per l'iframe del Google Form
const IFrameForm = ({ src, width, height }) => {
  const iframeRef = React.useRef(null);

  // Aggiungi l'event listener per catturare l'evento di caricamento del form nell'iframe
  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.addEventListener('submit', handleFormSubmit);

    return () => {
      iframeDocument.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  const handleFormSubmit = () => {
    // Invia il messaggio "form-submitted" al genitore (la tua applicazione React)
    window.parent.postMessage('form-submitted', '*');
  };

  return (
    <div>
    <iframe
      ref={iframeRef}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Google Form"
    >
      Caricamento...
    </iframe>
    <HomeButton />
    </div>
    );
};

export default Formpartecipazione;






