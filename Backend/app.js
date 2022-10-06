const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");

const app = express();

mongoose.connect(process.env.DB_CONNECTION,
   { useUnifiedTopology: true, useNewUrlParser: true },
   (req,res) => {
      console.log('DB connection established!');
   });

   console.log(process.env.DB_CONNECTION);

app.use(express.json());


const userRouter = require('./routes/userRoute');
app.use('/user', userRouter);



app.listen(4000, () => {
   console.log('Listening to PORT : 4000');
});