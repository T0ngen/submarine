// components/LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css'; // Убедитесь, что CSS-файл существует

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;