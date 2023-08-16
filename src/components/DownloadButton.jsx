import React from 'react';

const DownloadButton = () => {
  // URL del file da scaricare
  const fileUrl = 'https://www.roggiafanpage.it/setup.exe';

  // Funzione per gestire il clic sul pulsante di download
  const handleDownloadClick = () => {
    // Crea un elemento di ancoraggio invisibile
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'setup.exe'; // Puoi impostare il nome del file che vuoi assegnare al download
    anchor.click();
  };

  return (
    <div>
        <p>Client desktop sito web Roggia Fanpage</p>
      <button onClick={handleDownloadClick}>Scarica .exe (SOLO WINDOWS)</button>
    </div>
  );
};

export default DownloadButton;