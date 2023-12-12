// import React, {useEffect, useState} from "react";
import "./App.css";
import Main from "./Main";

function App() {

  // const [data, setData] = useState([]);
  //
  // useEffect(() => {
  //   fetch("/api/data")
  //       .then(res => res.text())
  //       .then(data => setData(data));
  // },[]);

  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
