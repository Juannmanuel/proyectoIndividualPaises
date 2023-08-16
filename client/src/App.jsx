import "./App.css";
import React from "react";
import Activities from "./components/activities/Activities";
import { Routes, Route, useLocation } from "react-router-dom";
import Cards from "./components/Cards/Container/Cards";
import Detail from "./components/Detail/Detail";
import { LandingPage } from "./components/LandingPage/landingPage";
import NavBar from "./components/Nav/NavBar";
import Form from "./components/Form/Form";


function App() {

  const location = useLocation()
  



  return (
    <div className="App" >
    
    {location.pathname !== "/" && <NavBar />}
    
       
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form/>}/>
        <Route path="/activities" element={<Activities/>}/>
      </Routes>
    </div>
  );
}

export default App;
