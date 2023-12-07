import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
        .then(res => res.text())
        .then(data => setData(data));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          data : {data}
        </p>

      </header>
    </div>
  );
}

export default App;
