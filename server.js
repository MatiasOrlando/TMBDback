// Configuración del server
const express = require("express");
const app = express();
const db = require("./api/db/index");
const models = require("./api/models");
const router = require("./api/routes/index");
const cors = require("cors");
const cookies = require("cookie-parser");
require("dotenv").config();

app.use(cookies());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "https://tmdb-front-five.vercel.app/",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);

db.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`SERVER RUNNING TMDB PROJECT : ${process.env.PORT}`)
  );
});
