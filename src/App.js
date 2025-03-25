import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode('light');
      showAlert("Light Mode Enabled", "success");
    } else {
      setMode('dark');
      showAlert("Dark Mode Enabled", "danger");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Router> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForms heading="Enter Text To Analyze" showAlert={showAlert} />} />
          <Route path="*" element={<div className="text-center text-danger"><h2>404 - Page Not Found</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
