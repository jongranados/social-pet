/* DEPENDENCIES */
const express = require('express');
const cors = require('cors');
const multer = require('multer'); 
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

/* CONFIGURATIONS */
const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}

app.use(
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);

module.exports = app; 
