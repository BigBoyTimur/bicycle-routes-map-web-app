const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {Sequelize} = require('sequelize');
const cookieParser = require('cookie-parser');


const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/bikeRoutes'));
app.use('/', require('./routes/userPathRoutes'));


const port = 8000;

app.listen(port, () => console.log(`server is running on port: ${port}`));