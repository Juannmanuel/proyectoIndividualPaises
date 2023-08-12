const { Country, Activity } = require("../db")

const getAllActivities = async (req, res) => {
    try {
        const getAllActivities = await Activity.findAll({include: Country})
        return res.status(200).json(getAllActivities)
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
const deleteActivity = async (req, res) => {
const {id} = req.params
try {
    await Activity.destroy({where: {ID: id}})
    return res.status(200).send({"message": `La actividad fue eliminada correctamente`})
} catch (error) {
    return res.status(400).send(error.message)
}

}

module.exports = {
    getAllActivities,
    postActivity,
    deleteActivity
}