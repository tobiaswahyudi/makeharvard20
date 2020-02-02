import React, { useState } from 'react';
import './App.css';
import ScannerPage from './scanner/ScannerPage';
import BigView from './bigView/BigView';

const App = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <link rel="manifest" href="/manifest.json"></link>
      {page === 0 && <ScannerPage setPage={setPage} />}
      {page === 1 && <BigView />}
    </div>
  );
}

export default App;
