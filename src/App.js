import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode('light');
      showAlert("Light Mode Enabled","success");
    } else {
      setMode('dark');
      showAlert("Dark Mode Enabled","danger");
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
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <TextForms heading="Enter Text To Analyze" showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
