import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//*Style
import {GlobalStyle} from "./GlobalStyle";
//*Component
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>

          <GlobalStyle/>
        </Router>
 
  );
}

export default App;

