import React from 'react';
import Card from './Card';
import './card.css';
import naviglio from './naviglio.jpg'
import pontetresa from './pontetresa.jpg'
import ceresole from './ceresole.jpg'
import lagoceresole from './lagoceresole.jpg'
import rggrande from './rggrande.jpg'
import cpescone from './cpescone.jpg'
import lagodorta from './lagodorta.jpg'
import dep from './dep.jpg'
import piccolini from './piccolini.jpg'
import vigenovese from './vigenovese.jpg'
import pompeiese from './pompeiese.jpg'
import inavigli from './inavigli.jpg'
import troggia from './troggia.jpg'
import mais from './mais.jpg'
import gerola from './gerola.jpg'
import riti from './666.jpg'
import azuccolo from './azuccolo.jpg'
import ospedale from './ospedale.jpg'
import madre from './madre.jpg'
import muline from './muline.jpg'
import biscia from './biscia.jpg'
import gravmist from './gravmist.jpg'
import misteriosa from './misteriosa.jpg'
import canalgrande from './canalgrande.jpg'
import sang from './sang.jpg'

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        imageSrc={pontetresa}
        title="Lago di Lugano"
        description="Questo meraviglioso lago, determina parzialmente il confine tra l'Italia e la Svizzera in parte in provincia di Varese ed in parte in provincia di Como. Questa fotografia viene scattata a Ponte Tresa, un comune di confine, diviso in due parti, tra la Svizzera e l'Italia dal torrente Tresa, ed ogniuna ha due organizzazioni comunali diversi (Ponte Tresa Uff. Lavena Ponte Tresa, in Italia, municipio Ponte Tresa. Ponte Tresa Svizzera sede comunale in svizzera. La foto del lago è magnifica e consiglio questo posto a chi piace passeggare nel lungolago."
        linkbutton= "https://www.google.it/maps/place/21037+Lavena+Ponte+Tresa+VA/@45.9633011,8.8510939,15z/data=!3m1!4b1!4m6!3m5!1s0x4785d338608ab029:0x83d581dcd83319cf!8m2!3d45.9564617!4d8.8725744!16zL20vMGdoejZk?entry=ttu"
      />
      <Card
        imageSrc={naviglio}
        title="Naviglio Grande"
        description="Il Naviglio grande ad Abbiategrasso. Con una lunga storia di tradizioni, uso comune per il terasporto di sabbia depositato nei letti del fiume Ticino a Milano, Nasce il Naviglio grande, che partendo da Pavia, dal fiume ticino, viene costruito un canale che porta fino a Milano nel quartier Ticinese. Viene aperta una grane distesa (detta Darsena) nella quale si depositava la sabbia presa dal Ticino. Per far defluire le acque, venne creato un condotto (detto Naviglio Grande) che esattamente ad abbiategrasso si divide in due divisioni, la divisione di Bereguardo (Questa foto), e la divisione di Turbigo che fa defluire le acque di nuovo nel Ticino."
        linkbutton="https://www.google.it/maps/place/Alzaia+Naviglio+Grande,+Abbiategrasso+MI/@45.3958471,8.9414347,14.5z/data=!4m6!3m5!1s0x4786e58849ef6c0d:0x8ce872b6991ab9ce!8m2!3d45.3999132!4d8.9401864!16s%2Fg%2F1v62gjr2?entry=ttu"
      />
      <Card
      imageSrc={ceresole}
      title="Cascata del Dres a Ceresole Reale"
      description="Questa meravigliosa cascata , situata nella Valle Orco del Piemonte, si trova a Ceresole Reale che è un comune montano circondato dalle Alpi Graie, noto per le sue cascate spettacolari e per conservare tradizioni autentiche." 
      />
      <Card
      imageSrc={lagoceresole}
      title="Lago di Ceresole Reale"
      description="Questo meraviglioso lago, sempre situata nella Valle Orco del piemonte, si trova a Ceresole Reale che è un comune montano circondato dalle Alpi Graie, noto per le sue cascate spettacolari e per conservare tradizioni autentiche." 
      />
      <Card
      imageSrc={rggrande}
      title="Canale Irrigatorio Dirramazione Quintino Sella"
      description="Questo canale irrigatorio, gestito dalle aziende di irrigazione est Sesia, è uno dei più grandi canali irrigatori della zona Est Sesia. Partendo da Cameri (NO), ed entrando a Novara, ne esce particolarrmente più grande unendosi ad altri canali più piccoli. Arrivando in Lomellina, proprio a Cilavegna, (Sant'Anna), si divide in due subdiramatori, più piccoli, giungendo quiondi a Pavia ed a Mortara. Questa foto è stata scattata a Cilavegna, prima della divisione e sul ponticello dellla ciclabile, tra l'altro con una qualità meravigliosa" 
      />
      <Card
      imageSrc={cpescone}
      title="Cascata del Pescone"
      description="Questa Cascata, si trova sempre in Piemonte, ma dalla parte orientale, non troppo distante ne dal lago Maggiore, ne da quello d'Orta. Si trova esattamente ad Agrano (VB), ed è ottima per fare esperienze ed escursioni." 
      />
      <Card
      imageSrc={lagodorta}
      title="Isola San Giulio e lago d'Orta"
      description="Questo Lago, è più piccolo rispetto ai altri laghi glacuiali presenti nelle alpi, ma molto caratteristico, infatti lo rende unico a sè la propria piccolezza. Sulla costa Est, si affaccia Orta San Giulio, uno dei borghi più belli da visitare in Italia. Inoltre puoi visitare l'isola con soli 5€ per l'imbarcazione, che anch'essa è molto interessante da vedere." 
      />
      <Card
      imageSrc={dep}
      title="Fuoriuscita Depuratore Dir.Quintino Sella "
      description="Vedi Diramazione Quintino Sella" 
      />
      <Card
      imageSrc={piccolini}
      title="Roggia Piccolinese "
      description="La roggia piiccolinese, passa attraverso la frazione di Vigevano Piccolini, ed è possibile ammirarla, guardando il ponticello dopo il carcere" 
      />
      <Card
      imageSrc={vigenovese}
      title="Roggia Vigenovese "
      description="Il nome di questa roggia è stato inventando uneno dil nome del corso vicino (Genova) e della Località Vigevano. Questa roggia è Autentica ma mai come la roggia Madre " 
      />
      <Card
      imageSrc={pompeiese}
      title="Roggia Pompeiese "
      description="Questa roggia invece si trova sempre a vigevano, ma vicino alla via con il nome della città costruta dai romani, che venne distrutta dal Vesuvio nel 79 d.c" 
      />
      <Card
      imageSrc={inavigli}
      title="Naviglio Grande Notturno "
      description="Leggi Naviglio Grande" 
      />
      <Card
      imageSrc={troggia}
      title="Foto Roggia con tramonto "
      description="Questa roggia è stata scattata con il tramonto vicino a Gravellona Lomellina (PV)" 
      />
      <Card
      imageSrc={azuccolo}
      title="Roggia dell'agenzia Zuccolo "
      description="Questa è la roggia che attraversa i sotterranei dell'agenzia Zuccolo, ed esce in superficie attraversando la strada Provinciale" 
      />
      <Card
      imageSrc={riti}
      title="Roggia Dei Riti Satanici "
      description="Questa roggia attraversa un pozzo, che potrebbe essere utilizzato per i riti satanici (666)" 
      />
      <Card
      imageSrc={ospedale}
      title="Roggia Ospedaliera"
      description="Questa Roggia Attraversa l'Ospedale di vigevano,ed anche i sotterranei della città" 
      />
      <Card
      imageSrc={mais}
      title="Lago Maggiore nsu vista su Arona, con una Saetta in cielo"
      description="Il lago maggiore, è uno dei laghi glaciali più ampi per estesione. Si estende per la maggior parte in Italia (diviso in Piemonte e Lombardia), ed in parte in Svizzera nel canton Ticino. Il ticino è il fiume immissario e emissario del lafgo, assieme ad altri fiumi minori, come il Toce. Questa foto è stata scattata ad Angera, con vista su Arona dalla parte lombarda del lago." 
      />
      <Card
      imageSrc={biscia}
      title="Biscia Morta"
      description="Non c'entra con le rogge, ma comunque ha fatto parte di una delle nnostre avventure vicino alle roggia, quindi questo esemplare morto va premiato." 
      />
      <Card
      imageSrc={muline}
      title="La roggia con il piccolo mulino a Gravellona Notturna (Nome: Roggia del mulinello)"
      description="Questa roggia attraversa Gravellona, sia nel sottosuolo, sia esternamente, come in questo caso che attraversa il mulino vicino al Parco dei Tre Laghi. Questa fotto è stata scattata nella notte della più grande festa di Gravellona." 
      />
      <Card
      imageSrc={misteriosa}
      title="Roggia Misteriosa (Nome: Roggia Lacustre)"
      description="Questa roggia non ha una descizione pk è misteriosa" 
      />
      <Card
      imageSrc={gravmist}
      title="Roggia Gravellonese (Nome: Roggia delle tubature)"
      description="Questa roggia attraversea le campagne di gravellona, permenttendo così di irrigarli" 
      />
      <Card
      imageSrc={sang}
      title="roggia di San Giorgio Lomellina"
      description="Questa roggia invece si triova vicino a San Giorgio Lomellina, un piccolo comune della parte Sud della Lomellina" 
      />
      <Card
      imageSrc={canalgrande}
      title="Canal Grande di Venezia"
      description="Il Canal Grande di Venezia è il canale più largo e profondo della città. All'inizio nessun ponte non lo attraversava, fino a quando il ponte del Rialto non fu' completato, che gli diede dato il titolo di primo ponte sul canal grande." 
      />
      <Card
      imageSrc={madre}
      title="La roggia Madre"
      description="Ebbene si, lei è stata la prima roggia fotografata del profilo e da cui si è presa isprirazione a farlo. Ricordiamoci il detto 'Roggia Artigiani della Qualità 😉'" 
      />
    </div>
  );
};

export default CardContainer;