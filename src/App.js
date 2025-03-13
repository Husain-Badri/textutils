import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className='container'>
      <TextForms heading="Enter Text To Analyze"/>
      </div>
    </>
  );
}

export default App;
