const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
// app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World 2!')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});