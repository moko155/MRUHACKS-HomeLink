// Main App component
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        HomeLink App
      </main>
    </div>
  );
};

export default App;
