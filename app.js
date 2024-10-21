require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require("cors");

var app = express();

var db = require("./app/models");
db.sequelize.sync();

const cor = cors({
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
});
app.use(cor);
app.options("*", cor);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/user.routes")(app);
require("./app/routes/admin.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/link.routes")(app);
require("./app/routes/education.routes")(app);
require("./app/routes/course.routes")(app);
require("./app/routes/experience.routes")(app);
require("./app/routes/project.routes")(app);
require("./app/routes/skill.routes")(app);
require("./app/routes/certification.routes")(app);
require("./app/routes/interest.routes")(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const PORT = process.env.PORT || 3026;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});