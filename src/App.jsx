import React from 'react';
import './App.css';
import ScannerPage from './scanner/ScannerPage';

const App = () => {
  return (
    <div className="App">
      <link rel="manifest" href="/manifest.json"></link>
      <ScannerPage />
    </div>
  );
}

export default App;
