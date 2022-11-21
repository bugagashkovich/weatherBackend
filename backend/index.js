const express = require("express");
const cors = require("cors");
const app = express();

routes = require("./routing/routes/index");

const host = "127.0.0.1";
const port = 4000;
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(port, () => console.log(`Weather server listens ${port}`));
