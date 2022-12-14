const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
const corsOptions = {
  origin: 'https://producthackers.com',
  // origin: ['https://producthackers.com', 'https://www.havaianas-store.com', /\.example2\.com$/] => We can filter for some origins, also we use regex
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ['GET', 'POST']
};

// app.use(cors()) => Other way to declare All CORS Origins

// app.use(cors(corsOptions)) => Other way to declare CORS for a single Origin

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

app.options('/ph-cors-methods', cors(corsOptions)) // enable pre-flight request for POST

app.post('/ph-cors-methods',cors(corsOptions),  (req, res) => {
  res.json({msg: 'This is CORS-enabled for PH Origins with request methods!', body: req.body})
});

app.listen(process.env.PORT || 3000);

module.exports = app;