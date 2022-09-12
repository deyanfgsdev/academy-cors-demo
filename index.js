const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static('public'));

app.use(cors());

//index.js
app.get('/', (req, res) => {
  // res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(process.env.PORT || 3000);

module.exports = app;