const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static('public'));

var corsOptions = {
  origin: 'https://producthackers.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// No CORS
app.get('/no-cors', (req, res) => {
  res.json({msg: 'This is CORS-disabled!'})
});

// All CORS Origins
app.get('/all-cors', cors(), (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

// CORS enabled for PH Website
app.get('/ph-cors', cors(corsOptions), (req, res) => {
  res.json({msg: 'This is CORS-enabled for PH Origins!'})
});

app.listen(process.env.PORT || 3000);

module.exports = app;