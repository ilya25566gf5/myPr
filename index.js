const express = require('express');
const { allIncome } = require('./allIncome');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/income', async (req, res) => {
  try {
    const income = await allIncome();
    res.json(income);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
