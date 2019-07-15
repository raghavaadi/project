/*
Raghav 1701875
 */

'use strict';
const express = require('express');
const app = express();
const path = require('path');
const index = require('./routes/index.js');
const about = require('./routes/about.js');
const login = require('./routes/login.js');
const data = require('./routes/data.js');
const register = require('./routes/register.js');
const check = require('./routes/check.js');
const ty = require('./routes/hello.js')
var methodOverride = require('method-override')

const bodyParser = require('body-parser');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use('/',index);
app.use('/login',login);
app.use('/about',about);
app.use('/d123QWDQCDSata',data);
app.use('/register',register);
app.use( express.static( "public" ) );
app.use('/check',check);
app.use('/do',ty);
app.use(methodOverride());
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.render('error.ejs');
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`this is running on ${PORT}`);
  console.log('Press Ctrl+C');
});

