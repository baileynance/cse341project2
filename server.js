const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const port = 3000;
 
app.get('/', (req, res) => {
  res.send("Hello");
});
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});