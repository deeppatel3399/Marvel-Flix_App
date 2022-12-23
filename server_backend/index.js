const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');

require('./db.js');
require('./models/user');

const authRoutes = require('./routes/authRoute');

app.use(bodyParser.json());
app.use(authRoutes);

app.get('/',(req,res)=>{
    res.send("home page start");
});

app.listen(port,()=>{
    console.log("server start");
});