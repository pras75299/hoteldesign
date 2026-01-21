const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
process.env.NODE_ENV = 'development';
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to the Database successfully');
})
.catch((error) => {
      console.error('Error connecting to the Database. \n', error);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});