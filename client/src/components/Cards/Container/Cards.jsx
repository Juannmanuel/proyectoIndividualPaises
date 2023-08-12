import Card from "../singular/Card";
import style from "./Cards.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../../redux/actions";
import { order, population, continent } from "../../../redux/actions";

function Cards() {
  const [currentPage, setCurrentPage] = useState(0); //linea nueva
  const countries = useSelector((state) => state.copyCountries);
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities)
  

  //esta funcion recibe el parametro del button correspondiente, "AaZ" y hace
  //el dispatch con el parametro al reducer
  const handlerOrderForName = (parametro) => {
    dispatch(order(parametro.target.value));
  };
  const handlePopulation = (parametro) => {
    dispatch(population(parametro.target.value));
    
  };
  const handleContinent = (parametro) => {
    dispatch(continent(parametro.target.value));
    
  };

  //se cargan todos los paises cuando se renderiza el componente para que esten disponibles apenas abre la pantalla
  useEffect(() => {
    dispatch(getCountries());
    
  }, []);
  
  const totalPage = Math.ceil(countries?.length / 10); //linea nueva
  function getCountriesForPage() {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    return countries.slice(startIndex, endIndex);
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage - 1));
  }

  function handlePrevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  }

  function generateCards() {
    const countriesForPage = getCountriesForPage();
    return (
      <div className={style.Cards}>
        {
          countriesForPage.map((country) => (
            <Card
              key={country.id}
              id={country.id}
              commonName={country.commonName}
              officialName={country.officialName}
              flags={country.flags}
              continent={country.continent}
              flag={country.flag}
            />
          ))
        }
      </div>
    ) 
  }


  return (
    <div className={style.container}>

      <div className={style.buttonSelect}>
        <select onChange={handleContinent}>
          <option value="todos">All</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Africa">Africa</option>
        </select>
      </div>
      <div className={style.buttonSelect}>
        <select  className={style.buttonSelect} onChange={handlePopulation} name="population">
          <option value="default">default</option>
          <option value="mayor">mayor</option>
          <option value="menor">menor</option>
        </select>
      </div>  
      <div className={style.buttonSelect}>
        <select   name="order" onChange={handlerOrderForName}>
          <option value="default">Default</option>
          <option value="AaZ">A-Z</option>
          <option value="ZaA">Z-A</option>
        </select>
      </div>

      <div className={style.container}>{generateCards()}</div>
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >previo
        </button>
        <span>{currentPage + 1}</span>
        <button
          className={style.button}
          onClick={handleNextPage}
          disabled={currentPage === totalPage - 1}
        >Next
        </button>
      </div>
    </div>
);
}
export default Cards;






        



