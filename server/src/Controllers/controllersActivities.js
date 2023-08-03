const { Country, Activity } = require("../db")

const getAllActivities = async (req, res) => {
    try {
        const getAllActivities = await Activity.findAll()
        return res.status(200).send(getAllActivities)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
const postActivity = async (req, res) => {
    const { name, difficulty, season, idPais } = req.body
    try {
        if (!name || !difficulty || !season || !idPais) throw Error("Faltan datos obligatorios")
        const respuesta =  await Activity.create({ name, difficulty, season })
        await respuesta.setCountries(idPais);
        const actividadCreada = await Activity.findOne({where: {ID: respuesta.ID  }, include: {model: Country}})
    return res.status(200).json({ "message": "Actividad creada correctamente", actividadCreada })
    } catch (error) {
        return res.status(404).send({ "error": error.message })
    }
}

module.exports = {
    getAllActivities,
    postActivity
}