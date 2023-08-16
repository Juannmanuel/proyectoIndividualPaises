import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDitail } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  //sacamos el id de la url mediante useParams para poder pasarle el id a la action y que busque el pais por ID y una vez que
  // se renderiza el componente de despacha una action para buscar pais por id
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.detail);

  //
  const generateActivities = () => {
    const listActivities = country.Activities?.length ? (
      country.Activities.map((activity) => (
        <li key={activity.ID}>
          {activity.name}
        </li>
      ))
    ) : (
      <p>
        No activities were found for this country. Add yours!{" "}
        <NavLink to={"/form"}>
          <button>Crea una actividad</button>
        </NavLink>
      </p>
    );
    return listActivities;
  };

  const generateLanguageList = () => {
    const languages = country.languages
      ? Object.values(country.languages).join(", ")
      : "languages not available";
    return languages;
  };

  useEffect(() => {
    dispatch(getDitail(id));
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>{country?.officialName}</h1>
      </div>

      <div className={style.image}>
      <img src={country?.flags} alt={country?.officialName} />
      </div>

      <div className={style.list}>
       <ul>
       <li>Official Name: {country.officialName}</li>
       <li>CommonName: {country.commonName}</li>
       <li>Population: {country.population}</li>
       <li>Capital: {country.capital}</li>
       <li>Languages:{generateLanguageList()}</li>
       </ul>
      </div>
        
      <div className={style.info}>
        <h2>
          {`${country.commonName} is a country located in ${country.continent}`}
        </h2>
        <p>
          {`With an estimated population of ${country.population} inhabitants, it is known for its rich history and unique culture.`}
        </p>
        <p>
          {`The capital of ${country.commonName} is ${country.capital}, offering stunning landscapes and various tourist attractions.`}
        </p>
        <p>
          {`The official languages of ${
            country.commonName
          } are ${generateLanguageList()}`}
        </p>
        <p>
          {`Explore the beauty of ${country.commonName} and discover everything this fascinating country has to offer!`}
        </p>
        <a target="_blank" href={country?.maps}>
          <button>Google Maps</button>
        </a>
      </div>

      <div className={style.containerActivities}>
        <h2>Actividades: </h2>
        <ul>{generateActivities()}</ul>
      </div>
    </div>
  );
}

export default Detail;
