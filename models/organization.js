'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  organization.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'organization',
  });
  return organization;
};