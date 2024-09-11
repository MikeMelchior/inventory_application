require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');

// routers
const indexRouter = require("./routes/index");
const carRouter = require('./routes/car');
const manufacturerRouter = require('./routes/manufacturer');
const modelRouter = require('./routes/model');

// config
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// routing paths
app.use("/", indexRouter);
app.use("/catalog/cars", carRouter);
app.use("/catalog/manufacturers", manufacturerRouter);
app.use("/catalog/models", modelRouter);

// set port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));

