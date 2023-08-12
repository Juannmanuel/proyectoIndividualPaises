const { Router } = require("express")
const { getAllActivities, postActivity, deleteActivity } = require("../Controllers/controllersActivities")
const routerActivities = Router()

routerActivities.get("/", getAllActivities)
routerActivities.post("/", postActivity)
routerActivities.delete("/:id", deleteActivity)

module.exports = routerActivities;