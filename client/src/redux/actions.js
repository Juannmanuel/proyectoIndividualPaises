export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_DITAIL = "GET_DITAIL"
export const GET_BY_NAME = "GET_BY_NAME"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const POPULATION = "POPULATION"
export const CONTINENT = "CONTINENT"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES"
export const DELETE_ACTIVITY = "DELETE_ACTIVITY"
export const FILTER_ACTIVITY_FOR_NAME = "FILTER_ACTIVITY_FOR_NAME"
import axios from "axios"

const URL = "http://localhost:3001/countries"

export function getCountries() {
    return async function (dispatch) {
        try {
            await axios(URL).then((response) => dispatch({ type: GET_COUNTRIES, payload: response.data }))

        } catch (error) {
            console.log(error.message);
        }
    }
}
export function getDitail(id) {
    const URLID = `http://localhost:3001/countries/${id}`
    return async function (dispatch){
        await axios(URLID).then((response) => dispatch({type: GET_DITAIL, payload: response.data}))
    }
}
export function getActivities() {
return async function (dispatch){
    try {
        await axios(`http://localhost:3001/activities`).then((response) => dispatch({type: GET_ACTIVITIES, payload: response.data}))
    } catch (error) {
        console.log(error.message);
    }
}   
}
export function getByName(name){
    try {
        const URL = `http://localhost:3001/countries/name?name=${name}`
        return async function (dispatch) {
            await axios(URL).then((response) => dispatch({type: GET_BY_NAME, payload: response.data}))
        }
        
    } catch (error) {
       console.log(error.message); 
    }
}
export function postActivies(state){
    return async function(dispatch){
        try {
            await axios.post(`http://localhost:3001/activities`, state).then((response) => alert(response.data.message)) 
        } catch (error) {
            console.log(error.message);
        }
        
    }
}


export function order(parametro) {
    return {
        type: ORDER,
        payload: parametro
    }
}
export function population(parametro) {
    return {
        type: POPULATION,
        payload: parametro
    }
}
export function continent(parametro) {
    return {
        type: CONTINENT,
        payload: parametro
    }
}
export function filterActivities(parametro){
    return {
        type: FILTER_ACTIVITIES,
        payload: parametro
    }
}
export function deleteActivity(parametro){
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(`http://localhost:3001/activities/${parametro}`)
            alert(data.message)
        } catch (error) {
            console.log(error.message);
        }
    }
    
}

export function filterActivityForName(parametro){
    return {
        type: FILTER_ACTIVITY_FOR_NAME,
        payload: parametro
    }
} 

export function updateActivity (id, state){
    return async (dispatch) => {
        try {
            
            const { data } = await axios.put(`http://localhost:3001/activities/${id}`, state)
            alert(data.message)
        } catch (error) {
            console.log(error.message)
        }
    }
}
