const { Country, Activity } = require("../db") 
const { Op } = require("sequelize")

const getAllCountries = async (req, res) => {
    try {
        const getAllCountries = await Country.findAll()
        return res.status(200).send(getAllCountries)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

const getCountryById = async (req, res) => {
    const { idPais } = req.params
    try {
        const country = await Country.findOne({ where: { id: idPais }, include: { model: Activity } })
        if (!country) throw Error("No se encontro un pais con ese ID")
        return res.status(200).json(country)

    } catch (error) {
        return res.status(400).send({ "error": error.message })
    }
}

const getCountryByName = async (req, res) => {
    const { name } = req.query
    try {
        const countries = await Country.findAll({ where: { commonName: { [Op.iLike]: `${name}%` } || { officialName: { [Op.iLike]: `${name}%`} }} })
        if(!countries) throw Error("No se encontraron paises que coincidan con el nombre")
        return res.status(200).json(countries)
    } catch (error) {
        return res.status(400).send({ "error": error.message })
    }
}

module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByName
}