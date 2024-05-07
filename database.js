const { Sequelize } = require('sequelize'); 
 
const sequelize = new Sequelize('bssdjzqx7hf60wjaquht', 'uv5lh8d0qdoszv3s', 'dpe8zBNr358NMmiW7ZOA', { 
 host: 'bssdjzqx7hf60wjaquht-mysql.services.clever-cloud.com', 
 dialect: 'mysql' 
}); 
 
sequelize.authenticate() 
 .then(() => { 
    console.log('Connection has been established successfully.'); 
 }) 
 .catch(err => { 
    console.error('Unable to connect to the database:', err); 
 }); 
 
module.exports = sequelize;