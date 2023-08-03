const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    commonName:{
      type: DataTypes.STRING,
      allowNull: false 
    },
    officialName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maps: {
      type: DataTypes.STRING
    },
    languages: {
      type: DataTypes.JSON
    },
    // borders: {
    //   type: DataTypes.ARRAY
    // }
    
}, {timestamps: false});
};
