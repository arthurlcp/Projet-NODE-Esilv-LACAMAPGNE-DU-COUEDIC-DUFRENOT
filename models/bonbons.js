const {Model, DataTypes} = require("sequelize");
const connection = require("./db");
const categorieBonbon = require('./categorieBonbon');

class Bonbon extends Model {}

Bonbon.init(
    {
        nom :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        prix: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poids: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        categorie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "categoriesBonbons",
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        modelName: "bonbons",
    });
Bonbon.belongsTo(categorieBonbon, {foreignKey: 'categorie_id'});
module.exports = Bonbon;
