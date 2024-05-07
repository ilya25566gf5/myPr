
const sequelize = require('./database');
const { Income } = require('../models/Income');


const { Income } = require('../models/Income');

exports.handler = async function(event, context) {
  try {
    const allIncome = await Income.findAll({
      attributes: ['amount', 'date']
    });
    return {
      statusCode: 200,
      body: JSON.stringify(allIncome),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Server error',
    };
  }
};
