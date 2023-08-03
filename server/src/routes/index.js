const { Router } = require("express");
const routerActivities = require("./routerActivities")
const routerCountries = require("./routerCountries")
const router = Router();


router.use("/countries", routerCountries);
router.use("/activities", routerActivities);



module.exports = router;
