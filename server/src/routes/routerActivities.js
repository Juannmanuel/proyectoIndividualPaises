const { Router } = require("express")
const { getAllActivities, postActivity, deleteActivity, updateActivity, getActivityById } = require("../Controllers/controllersActivities")
const routerActivities = Router()

routerActivities.get("/", getAllActivities)
routerActivities.post("/", postActivity)
routerActivities.delete("/:id", deleteActivity)
routerActivities.put("/:id", updateActivity)
routerActivities.get("/:ID", getActivityById)

module.exports = routerActivities;