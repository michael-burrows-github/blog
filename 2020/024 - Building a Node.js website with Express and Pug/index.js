const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const servicesRouter = require('./routes/services');
app.use('/services', servicesRouter);

app.listen(port, () => {
  console.log("Server Started...");
});
