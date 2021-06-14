const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Site extends Model {}

Site.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    site_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'site',
  }
);

module.exports = Site;
