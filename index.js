require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');

const router = require ("./app/router");

const PORT = process.env.PORT || 5000;

// body parser
app.use(express.urlencoded({ extended: true }));

// CORS setup to allow requests from a specific origin or all origins
const corsOptions = {
    origin: process.env.CORS_DOMAINS ?? '*',
  };
app.use(cors(corsOptions));

//router
app.use(router);

app.listen(PORT, () => {
  console.log(`O'kanban REST API listening on port ${PORT}`)
})