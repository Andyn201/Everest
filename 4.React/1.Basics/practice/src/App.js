import React from 'react';
import './App.css';

//   Components
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main title="Hello" text="This is a sentence"/>
      <Section />

    </div>
  );
}

export default App;
