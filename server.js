// Configuración del server
const express = require("express");
const app = express();
const db = require("./api/db");
const models = require("./api/models");
const router = require("./api/routes/index");
const cors = require("cors");
const cookies = require("cookie-parser");

app.use(cookies());

app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);

db.sync({ force: false }).then(() => {
  app.listen(5432, () => console.log("Server ON PORT: 5432"));
});
