// import React, {useEffect, useState} from "react";
import "./App.css";
import Main from "./routes/Main";
import {Route, Router} from "react-router-dom";
import LocationPage from "./routes/LocationPage";

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
        <Router>
            <Route path="/">
                <Main />
            </Route>
            <Route path="/location">
                <LocationPage/>
            </Route>
        </Router>
    </div>
  );
}

export default App;
