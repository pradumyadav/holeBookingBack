const express = require("express");
const cors = require("cors");
const routes = require("./routes/loginRoutes");
const connection = require("./configur/db");
const allDataroutes = require("./routes/allDataroutes");

const app = express();
app.use(express.json())
app.use(cors());
app.use("/api",allDataroutes)
app.use("/user",routes);

app.listen(4001, async() => {
  try {
    await connection();
    console.log("We are on port 4001");
  } catch (err) {
    console.log(err);
  }
});
