require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http'); 
const cors = require('cors');
const connectDB = require('../configure/store');
const authRoutes = require('../router/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', authRoutes);

connectDB();

module.exports.handler = serverless(app); 