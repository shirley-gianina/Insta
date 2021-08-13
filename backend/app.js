require("dotenv").config();

const express = require("express");
const app = express();

const cors = require('cors')


const routes = require("./config/routes");

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
})