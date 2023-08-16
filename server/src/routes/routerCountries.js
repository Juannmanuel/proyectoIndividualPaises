//Importa los módulos de rutas routerActivities y routerCountries, y luego utiliza el enrutador de Express para definir rutas adicionales. En este caso, se asigna el enrutador routerCountries a la ruta "/countries" y el enrutador routerActivities a la ruta "/activities"
const { Router } = require("express")
const routerCountries = Router()
const { getAllCountries, getCountryById, getCountryByName }  = require("../Controllers/controllersCountries");

routerCountries.get("/", getAllCountries)
routerCountries.get("/name", getCountryByName)
routerCountries.get("/:idPais", getCountryById)

module.exports = routerCountries;