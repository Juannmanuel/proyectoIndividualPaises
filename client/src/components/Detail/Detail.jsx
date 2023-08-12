import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDitail } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import style from "./Detail.module.css"


function Detail() {
  //sacamos el id de la url mediante useParams para poder pasarle el id a la action y que busque el pais por ID y una vez que
  // se renderiza el componente de despacha una action para buscar pais por id 
  const { id } = useParams();
  const dispatch = useDispatch();
  const country =  useSelector((state) => state.detail);
  
  
  const listActivities = 
    country.Activities?.length ?
     country.Activities.map(activity =>  <li key={activity.ID}>{activity.name}</li>) 
    :<p>No se encontraron actividades para este pais, Agrega la tuya! <NavLink to={"/form"}>Crea una actividad</NavLink></p>
    


    useEffect(() => {
      dispatch(getDitail(id));
    }, [id]);
    
    


  //traemos nuestro estado global detail para poder renderizar el pais que nos llego por ID
  //se renderiza un div que contiene todo, hay un h1 donde se coloca el nombre oficial, una etiqueta img
  //que renderiza la imagen de la bandera y el nombre del pais en el texto alternativo
  //y un h2 donde está el texto que se muestra debajo de la bandera con toda la infotmacion del pais
  //tambien button google maps, lo envuelve una etiqueta <a> con el link de google maps
  //me falta terminar actividades
  

  return (
    <div className={style.detailContainer}>
      <div className={style.detailContainer}>
      <h1 className={style.detailTitle}>{country?.officialName}</h1>
      </div>
      <div className={style.detailImage}>
      <img  src={country?.flags} alt={country?.officialName} />
      </div>
      <div className={style.detailInfo} >
      <ul className={style.ul}>
        <li>CommonName: {country.commonName}</li>
        <li>Population: {country.population}</li>
        <li>Capital: {country.capital}</li>
        <li>Languages: {country.languages ? Object.values(country.languages).join(", ") : "languages not available"}</li>
        <li>Official Name: {country.officialName}</li>
        
      </ul>
      </div>
      <div className={style.detailParrafo}>
      <h2>{`${country.commonName} is a country located in ${country.continent}`}</h2>
      <p className={style.detailParagraph}>{`With an estimated population of ${country.population}inhabitants, it is known for its rich history and unique culture.`}</p>
      <p className={style.detailParagraph}>{`The capital of ${country.commonName} is ${country.capital}, offering stunning landscapes and various tourist attractions.`}</p>
      <p className={style.detailParagraph}>{`The official languages of ${country.commonName} are ${country.languages? Object.values(country.languages).join(", ") : "languages not available"}`}</p>
      <p className={style.detailParagraph}>{`Explore the beauty of ${country.commonName} and discover everything this fascinating country has to offer!`}</p>
      <a target="_blank" href={country?.maps}>
        <button>Google Maps</button>
      </a>
      </div>
      <h2>Actividades: </h2>
      <ul>
      {listActivities}
      </ul>
    </div>
  );
}

export default Detail;
