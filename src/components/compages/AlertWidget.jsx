import React from 'react';
import './AlertWidget.css';

const AlertWidget = ({ type, message }) => {
  return (
    <div className={`alert-widget ${type}`}>
      <span className="alert-icon"></span>
      <span className="alert-message">{message}</span>
    </div>
  );
};

export default AlertWidget;
