import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"




function NavBar(){

    return(
        <nav className={style.nav}>
        
        <NavLink to={"/home"}><button  className={style.button}>Home</button></NavLink>
        <NavLink to={"/activities"}><button>Activities</button></NavLink>
        <NavLink to={"/form"}><button>Create Activity</button></NavLink>
        
        </nav>   
) 
}

export default NavBar






   
     
        
  


