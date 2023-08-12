import style from "./Activities.module.css"

function CardsActivities({name, difficulty, season, idPais}){


return (
    
    <div className={style.container}>
        <h2>Actividad: {name}</h2>
        <h2>Dificultad: {difficulty}</h2>
        <h2>Temporada: {season}</h2>
        <h2>Paises: {idPais?.map(el => {
            return <li key={el.id}>{el.commonName}</li>
        })} </h2>
    </div>
)
 }
                    






export default CardsActivities;