import React from 'react';
import Card from './Card';
import './card.css';
import naviglio from './naviglio.jpg'
import pontetresa from './pontetresa.jpg'
import ceresole from './ceresole.jpg'

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
      description="Questa meravigliosa cascata , situata nella Valle Orco del Piemonte, si trova a Ceresole Reale che è un comune montano circondato dalle Alpi Graie, noto per le sue cascate spettacolari e per conservare tradizioni autentiche." />
    </div>
  );
};

export default CardContainer;