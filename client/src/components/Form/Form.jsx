import { useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, postActivies } from "../../redux/actions";
import Validation from "./validation";
import style from "./Form.module.css"

function Form(props){

const countries = useSelector((state) => state.countries)
const dispatch = useDispatch()
const [input, setInput] = useState({name: "", difficulty: "", season: "", idPais: []})
const [errors, setErrors] = useState({})


useEffect(() => {

dispatch(getCountries())

},[])
    
    


const handlerChange = (event) =>{
  
    setInput({
        ...input,
        [event.target.name] : event.target.value
})
    setErrors(Validation({
        ...input,
        [event.target.name] : event.target.value,
    }))
}

const handlerSelect = (event) =>{
    
    
    let countriesFilter = input.idPais.includes(event.target.value)
    if(countriesFilter){
       return alert("no se pueden repetir paises")
    }   
   
    setInput({
        ...input,
        idPais: [...input.idPais,event.target.value]
    })
    setErrors(Validation({
        ...input,
        idPais: [...input.idPais,event.target.value]
    }))
} 

const handlerdisable = () =>{
    // Obtener un array con los nombres de las propiedades del objeto error
     const errorFields = Object.keys(errors);

     // Verificar si al menos un mensaje de error no está vacío
     const anyError = errorFields.map((field) => errors[field] !== "").includes(true);

     return anyError; // Si hay algún mensaje de error no vacío, el botón estará deshabilitado, de lo contrario, estará habilitado
 }
const handlerSubmit = (event) => {
    event.preventDefault()
    dispatch(postActivies(input))
    
}


//["ARG","KEN"]



    return (
        <form className={style.form} onSubmit={handlerSubmit}>
            <label className={style.label}>Nombre de la actividad: </label>
            <input className={style.input} onChange={handlerChange} type="text" name="name" value={input.name} />
            {errors.name && <p>{errors.name}</p>}
            <label className={style.label} >Dificultad: </label>
            <input className={style.input} onChange={handlerChange} type="number" name="difficulty" value={input.difficulty}></input>
            {errors.difficulty && <p>{errors.difficulty}</p>}
            <label  className={style.label}>Temporada: </label>
            <select className={style.selector} onChange={handlerChange} name="season">
                <option className={style.option} value={"default"}>Season</option>
                <option className={style.option} value={"Verano"}>Verano</option>
                <option className={style.option} value={"Otoño"}>Otoño</option>
                <option className={style.option} value={"Invierno"}>Invierno</option>
                <option className={style.option} value={"Primavera"}>Primavera</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
            <label className={style.label}>Paises: </label>
            <select onChange={handlerSelect} name="idPais">
                
            {countries.map(country => {
                return <option className={style.option} key={country.id} value={country.id}>{country.commonName}</option>
            })}    
            </select>
                
                
            {errors.idPais && <p>{errors.idPais}</p>}
            <ul className={style.ul}>{input.idPais.map(pais => <li key={pais}>{pais}</li>)}</ul>
            <input className={style.input} type="submit" disabled={handlerdisable()} />
        </form>
            

                
            
    )
} 
//codigo dehalo a la mitad
export default Form