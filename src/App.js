import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
    
        <Navbar title="GLOW" about="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={  <TextForm heading="Enter Text" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={ <About mode={mode}/>}/>
        </Routes>  
    </>
  );
}

export default App;
