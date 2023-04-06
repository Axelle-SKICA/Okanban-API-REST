require("dotenv").config();

const express = require('express');
const app = express();

const router = require ("./app/router");

const PORT = process.env.PORT || 5000;

// body parser
app.use(express.urlencoded({ extended: true }));

//router
app.use(router);

app.listen(PORT, () => {
  console.log(`Okanban REST API listening on port ${PORT}`)
})