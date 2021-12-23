const init = require('./db/index');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 1003;
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => console.log(`listening on port: ${port}`));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

init();
