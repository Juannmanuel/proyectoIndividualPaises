import React from "react";
import { NavLink } from "react-router-dom";

export function  LandingPage ()  {
    return <>
    <h1>Bienvenidos al Mundo!</h1>
    <NavLink to="/home"><button>Ingresar</button></NavLink>
    </>
}

