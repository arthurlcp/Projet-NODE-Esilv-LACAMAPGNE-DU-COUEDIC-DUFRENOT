const {Model, DataTypes} = require('sequelize');
const connection = require('./db');
const user = require('./user');

class CommandeBonbon extends Model {}


CommandeBonbon.init(
    {


        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },

        montant_total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        adresse_livraison: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 

        ville_livraison: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize: connection,
        modelName: 'commandeBonbons',
    }
);

CommandeBonbon.belongsTo(user, {foreignKey: 'user_id'});

module.exports = CommandeBonbon;