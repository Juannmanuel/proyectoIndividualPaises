import React from "react"
import { Link } from "react-router-dom"
import style from "./Card.module.css"

function Card({id ,commonName, officialName, flags, continent}){
   

    return <div className={style.card}>
    <h2 className={style.titulo}>{commonName} </h2>
    <Link to={`/detail/${id}`}><img className={style.cardimg} src={flags} alt={officialName} /></Link>
    <h3 className={style.subTitulo}>{`${continent}`}</h3>
    </div>


}

export default Card
