import React from "react";
import { NavLink } from "react-router-dom";
import style from "./landingPage.module.css"

export function  LandingPage ()  {
    return <div >
    <h1>Bienvenidos al Mundo!</h1>
    <NavLink to="/home"><button>Ingresar</button></NavLink>
    </div>
}

