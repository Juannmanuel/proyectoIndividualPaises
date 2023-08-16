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
         await Activity.findOne({where: {ID: respuesta.ID  }, include: {model: Country}})
         return res.status(201).json({ "message": "Actividad creada correctamente"})
    } catch (error) {
         return res.status(400).send({ "error": error.message })
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
const updateActivity = async (req, res) => {
    const { id } = req.params;
  const { name, difficulty, duration, season, idPais } = req.body;
  try {
    const response = await Activity.update(
      { name, difficulty, duration, season, idPais },
      { where: { ID: id } }
    );

    res.status(200).json({ msg: "Actividad actualizada con éxito!", response });
  } catch (error) {
    res.status(500).json({ error: "Error al editar la actividad" });
  }
}
const getActivityById = async (req, res) => {
    const { ID } = req.params
    try {
        const response = await Activity.findOne({where: {ID: ID}, include : [{model: Country, attributes: ["id"]}]})
        // if(!response) throw Error("No se encontro un pais con ese Id")
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send({"message": error.message})
    }
}

module.exports = {
    getAllActivities,
    postActivity,
    deleteActivity,
    updateActivity,
    getActivityById
}

// const { Country, Activity } = require("../db");

// const getAllActivities = async (req, res) => {
//     try {
//!         // Consultar todas las actividades, incluyendo la relación con el país correspondiente
//         const getAllActivities = await Activity.findAll({ include: Country });
        
// !        // Devolver las actividades como respuesta con el estado 200 (OK)
//         return res.status(200).json(getAllActivities);
//     } catch (error) {
//  !       // Manejar errores y enviar una respuesta con estado 400 (Bad Request)
//         res.status(400).send({ error: error.message });
//     }
// };

// const postActivity = async (req, res) => {
//     const { name, difficulty, season, idPais } = req.body;
//     try {
//   !      // Verificar si se proporcionan todos los datos obligatorios
//         if (!name || !difficulty || !season || !idPais) {
//             throw Error("Faltan datos obligatorios");
//         }

//    !     // Crear una nueva actividad en la base de datos
//         const respuesta = await Activity.create({ name, difficulty, season });

//     !    // Asociar la actividad con el país especificado
//         await respuesta.setCountries(idPais);

//      !   // Buscar la actividad recién creada, incluyendo la relación con el país
//         const activityWithCountry = await Activity.findOne({
//             where: { ID: respuesta.ID },
//             include: { model: Country }
//         });

//       !  // Devolver un mensaje de éxito con el estado 201 (Created)
//         return res.status(201).json({ "message": "Actividad creada correctamente" });
//     } catch (error) {
//        ! // Manejar errores y enviar una respuesta con estado 400 (Bad Request)
//         return res.status(400).send({ "error": error.message });
//     }
// };

// const deleteActivity = async (req, res) => {
//     const { id } = req.params;
//     try {
//       !  // Eliminar una actividad basada en su ID
//         await Activity.destroy({ where: { ID: id } });
        
//       !  // Devolver un mensaje de éxito con el estado 200 (OK)
//         return res.status(200).send({ "message": `La actividad fue eliminada correctamente` });
//     } catch (error) {
//      !   // Manejar errores y enviar una respuesta con estado 400 (Bad Request)
//         return res.status(400).send(error.message);
//     }
// };

// const updateActivity = async () => {
//    ! // Implementar la lógica para actualizar una actividad (pendiente)
// };

// module.exports = {
//     getAllActivities,
//     postActivity,
//     deleteActivity,
//     updateActivity
// };