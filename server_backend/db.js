const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongo_url).then(
    ()=>{
        console.log('connected with database');
    }
).
catch((err)=>
{
    console.log(`database not connected`+err);
});
