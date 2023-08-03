const { Router } = require("express")
const routerCountries = Router()
const { getAllCountries, getCountryById, getCountryByName }  = require("../Controllers/controllersCountries");

routerCountries.get("/", getAllCountries)
routerCountries.get("/name", getCountryByName)
routerCountries.get("/:idPais", getCountryById)

module.exports = routerCountries;