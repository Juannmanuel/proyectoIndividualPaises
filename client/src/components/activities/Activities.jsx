import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getActivities, filterActivities, deleteActivity, filterActivityForName } from "../../redux/actions";
import style from "./Activities.module.css"



function Activities(props) {
  const activities = useSelector((state) => state.activities);
  const copyActivities = useSelector((state) => state.copyActivities)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getActivities());
  }, []);

 const  handlerFilter = (event) => {
dispatch(filterActivities(event.target.value))
  }
const deleteAc = (event) => {
dispatch(deleteActivity(event.target.name))
dispatch(getActivities())

}
const handlerFilterForName = (event) => {
dispatch(filterActivityForName(event.target.value))
}

  const generateCardsActivities = () => {
    return activities.map((activity) =>{
     return <div className={style.card} key={activity.ID}>
        <h2>Actividad: {activity.name}</h2>
        <h2>Dificultad: {activity.difficulty}</h2>
        <h2>Temporada: {activity.season}</h2>
        <h2>Paises: {activity.Countries?.map(el => {
            return <li key={el.id}>{el.commonName}</li>
        })} </h2>
        <input className={style.deleteButton} type="submit" value="delete" onClick={deleteAc} name={activity.ID}/>
        
      </div>
        
      })

  }
  const generateListActivities = () => {
    return copyActivities.map((activity) => {
    return <option className={style.option} key={activity.ID} value={activity.ID}>{activity.name}</option>
    })
  }

  return (
    <div className={style.container}>
      <select onChange={handlerFilter} className={style.select}>
        <option className={style.option} value="default">seleccione...</option>
        <option className={style.option} value="Verano">verano</option>
        <option className={style.option} value="Invierno">invierno</option>
        <option className={style.option} value="Otoño">otoño</option>
        <option className={style.option} value="Primavera">primavera</option>
      </select>
      <div> 
      <select className={style.select} onChange={handlerFilterForName}>
      <option value="default">Choose an activity</option>
        {generateListActivities()}
      </select>
      </div> 
      <div className={style.card}>{generateCardsActivities()}</div>
      
    </div>
  );
}

export default Activities;
