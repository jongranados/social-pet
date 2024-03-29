/* DEPENDENCIES */
const express = require('express');
const routes = require('./routes'); 
const cors = require('cors');
const csurf = require('csurf'); 
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize'); 

/* CONFIGURATIONS */
const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

/* Security Middleware */
if (!isProduction) {
  app.use(cors());
};

app.use(
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);

app.use(
  csurf({ 
    cookie: { 
      secure: isProduction, 
      sameSite: isProduction && 'Lax', 
      httpOnly: true
    }
  })
);

/* ROUTES */
app.use(routes); 

/* ERROR HANDLING */
// catch unhandled requests and forward to error handler
app.use((_req, _res, next) => { 
  const err = new Error(`The requested resource couldn't be found.`);
  err.title = 'Resource Not Found'; 
  err.errors = [`The requested resource couldn't be found.`];
  err.status = 404; 
  
  next(err); 
});

// process sequelize errors
app.use((err, _req, _res, next) => { 
  if (err instanceof ValidationError) { 
    err.errors = err.errors.map((e) => e.message); 
    err.title = 'Sequelize validation error'; 
  }

  next (err); 
}); 

// custom error handler
app.use((err, _req, res, _next) => {
  res.status(err.status || 500); 
  res.json({ 
    title: err.title || 'Server error', 
    message: err.message, 
    errors: err.errors, 
    stack: isProduction ? null : err.stack,
  }); 
}); 

module.exports = app; 
