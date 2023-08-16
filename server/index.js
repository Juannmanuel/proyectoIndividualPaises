const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');

const PORT = 3001;

conn.sync({force: false }).then(() => {
  server.listen(PORT, async () => {
     const fullDB = await Country.findAll()
     if (!fullDB.length) {
      const { data } = await axios("http://localhost:5000/countries")
      const countryDB = data.map((pais) => {
        return {
          id: pais.cca3,
          commonName: pais.name.common,
          officialName: pais.name.official,
          flags: pais.flags.png,
          continent: pais.region,
          capital: pais.capital ? pais.capital[0] : "No hay capital",
          population: pais.population,
          maps: pais.maps ? pais.maps.googleMaps : "No hay mapa disponible",
          languages: pais.languages ? pais.languages : "No hay idiomas disponibles",
          flag: pais.flag ? pais.flag : null
          
        }
      })
      await Country.bulkCreate(countryDB)
    }
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
