// TODO::import our packages...
const express = require("express");
const app = express();

// TODO::declare and define helper variables
const port = 8989;

// TODO::main middleware
app.get("/", (req, res) => {
  res.send(
    `<h1 style='textAlign:'center'>Welcome Sallam, From your Docker Image!!</h1>`
  );
});

// TODO::Start Event-loop
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
