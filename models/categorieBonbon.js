const {Model, DataTypes} = require('sequelize');
const connection = require('./db');

class categorieBonbon extends Model {}

categorieBonbon.init(
    {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize: connection,
        modelName: 'categorieBonbons',
    }
);

module.exports = categorieBonbon;