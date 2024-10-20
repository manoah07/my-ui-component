import React from 'react';
import './App.css';
import Pricing from './components/Pricing';  // Ensure this path is correct
import './Pricing.css';

function App() {
  return (
    <div className="App">
      {/* This line renders the Pricing component */}
      <Pricing />
    </div>
  );
}

export default App;
