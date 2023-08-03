const { Router } = require("express")
const { getAllActivities, postActivity } = require("../Controllers/controllersActivities")
const routerActivities = Router()

routerActivities.get("/", getAllActivities)
routerActivities.post("/", postActivity)

module.exports = routerActivities;