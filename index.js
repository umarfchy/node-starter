const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3232;
app.listen(port, () => console.log(`It started`));
app.get("/", (req, res) => res.send("The server is live"));

// to handle express errors

// // Express v4.16.0 and higher
// // --------------------------
// const express = require('express');

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

// // For Express version less than 4.16.0
// // ------------------------------------
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
