import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TextDecore from './components/TextDecore';
import Alerts from './components/Alerts';
import React,{useState} from 'react';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
  };

  return (
    <>
      <Navbar title={"TextEditor"} about={`About Us`} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextDecore alert={showAlert}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
