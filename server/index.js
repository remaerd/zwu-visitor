//const express
const express = require('express');
//const app
const app = express();
//const port
const port = 3000;
//const bodyParser
const bodyParser = require('body-parser');
//const cors
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use("/api", require("./router"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});