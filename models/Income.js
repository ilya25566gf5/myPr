const sequelize = require('../database.js'); 
 const Income = sequelize.define('Income', { 
 id_income: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
 }, 
 amount: { 
    type: DataTypes.FLOAT 
 }, 
 date: { 
    type: DataTypes.DATE 
 } 
}, { 
 tableName: 'Income', 
 timestamps: false 
}); 
 
module.exports = Income;