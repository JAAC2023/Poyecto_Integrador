const { DataTypes } = require('sequelize');

module.exports = (baseDeDatos) => {
   baseDeDatos.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: true,
         primaryKey: true,
         autoIncrement: true,
      },
      idUUID:{
         type: DataTypes.STRING,
         defaultValue: DataTypes.UUIDV4,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false,
         defaultValue: 'unknown',
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false,
         defaultValue: 'unknown',
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, 
   { timestamps: false });
};
