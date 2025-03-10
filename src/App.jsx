import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [greenMode, setGreenMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setGreenMode("light");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  const toggleGreenMode = () => {
    if (greenMode === 'light') {
      setGreenMode('green');
      setMode("light");
      document.body.style.backgroundColor = '#004d40';
      showAlert("Green mode is enabled", "success");
    } else {
      setGreenMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <Router>
    <Navbar title="Word Utility" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode} toggleGreenMode={toggleGreenMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Word Utility - Word Counter, Character Counter" mode={mode} greenMode={greenMode} />} />
        <Route exact path="/about" element={<About greenMode={greenMode} mode={mode} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
