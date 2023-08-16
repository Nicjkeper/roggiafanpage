import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const DownloadButtonHome = () => {
  // URL della pagina di download
  const downloadPageUrl = '/download'; // Imposta l'URL della tua pagina di download

  return (
    <div>
        <h1>Scarica i noosti contenuti da questa pagina</h1>
      <Button
        component={Link}
        to={downloadPageUrl}
        variant="contained"
        color="primary"
        size="large"
      >
        Vai alla pagina di download
      </Button>
    </div>
  );
};

export default DownloadButtonHome;
