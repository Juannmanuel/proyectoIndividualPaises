import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getActivities, filterActivities, deleteActivity, filterActivityForName } from "../../redux/actions";
import CardsActivities from "./CardsActivities";
import { NavLink } from "react-router-dom";
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

}
const handlerFilterForName = (event) => {
dispatch(filterActivityForName(event.target.value))
}

  const generateCardsActivities = () => {
    
    return activities.map((activity) => {
      return <div key={activity.ID}>
        <div key={activity.ID}>
        <CardsActivities
        className={style.card} 
        key={activity.ID}
        idPais={activity.Countries}
        name={activity.name}
        difficulty={activity.difficulty}
        season={activity.season}
       />
      </div>
      <input className={style.deleteButton} type="submit" value="delete" onClick={deleteAc} name={activity.ID} />
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
      <select className={style.container} onChange={handlerFilterForName}>
      <option value="default">seleccione una actividad...</option>
        {generateListActivities()}
      </select>
      
      <div  className={style.container}>{generateCardsActivities()}</div>
      
    </div>
  );
}

export default Activities;
