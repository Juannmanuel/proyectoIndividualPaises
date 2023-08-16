import {
  GET_COUNTRIES,
  GET_DITAIL,
  ORDER,
  GET_BY_NAME,
  POPULATION,
  CONTINENT,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES,
  FILTER_ACTIVITY_FOR_NAME,

} from "./actions";

const globalState = {
  countries: [],
  copyCountries: [],
  activities: [],
  copyActivities: [],
  detail: {},
  updetaActivity: {}
};

function rootReducer(state = globalState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        copyCountries: action.payload,
      };
    case GET_DITAIL:
      return {
         ...state,
          detail: action.payload };


    case GET_BY_NAME:
      return {
         ...state,
          copyCountries: [...action.payload] };
    case ORDER:
         let countriesOrder = [...state.countries];
         countriesOrder.sort((a, b) => {
         if (action.payload === "AaZ") {
        return a.commonName.localeCompare(b.commonName);
        } else if (action.payload === "ZaA") {
        return b.commonName.localeCompare(a.commonName);
        }
      });
      return { 
         ...state,
         copyCountries: action.payload === "AaZ" || action.payload === "ZaA" ?
         countriesOrder 
         : state.countries };


    case POPULATION:
      let populationFilter = [...state.copyCountries]
      if (action.payload === "mayor") {
        populationFilter.sort((a, b) => {
          return b.population - a.population
        })
      } else if (action.payload === "menor") {
        populationFilter.sort((a, b) => {
          return a.population - b.population
        })
      }
      return { 
        ...state,
        copyCountries: action.payload === "mayor" || action.payload === "menor" 
        ? populationFilter 
        : state.countries };


    case CONTINENT:
        let continentFilter = [...state.countries]
        const functionFilter = action.payload === "todos"
        ? continentFilter
        : continentFilter.filter((country) => country.continent == action.payload)
      return { 
        ...state,
         copyCountries: functionFilter };



    case GET_ACTIVITIES:
      return { 
        ...state,
        activities: action.payload,
        copyActivities: action.payload }


    case FILTER_ACTIVITIES:
      const filterActivity = [...state.copyActivities]
      const resultFilter = filterActivity.filter((activity) => activity.season === action.payload)
      return {
        ...state,
        activities: action.payload === "default"
        ? state.copyActivities 
        : resultFilter} 

    case FILTER_ACTIVITY_FOR_NAME: 
      const filterAc = [...state.copyActivities]
      const resultFilterAc = filterAc.filter((activity) => activity.ID === action.payload ) 
      return {
        ...state,
        activities: action.payload === "default"
        ? state.copyActivities 
        : resultFilterAc}
          
    default:
      return { ...state };
  }
}

export default rootReducer;
