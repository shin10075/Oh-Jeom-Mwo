// import React, {useEffect, useState} from "react";
import "./App.css";
import Main from "./routes/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/location" element={<LocationPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
