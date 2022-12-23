const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const user = mongoose.model('user');

const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/signup',(req,res)=>{
    res.send("this is sign up page");
    console.log(req.body);

    const{username , password , email} = req.body;

    if(!username||!password||!email)
    {
        return res.status(422).send({error:"plz fill all the fields"});
    }

    user.findOne({username:username})
    .then(async(saveduser)=>{
            if(saveduser)
            {
                return res.status(422).send({error:"already registered"});
            }

            const User = new user({
                username,
                password,
                email
            });

            try{
                await User.save();
                res.send({message:"user saved successfully"});
            }
            catch(err){
                console.log('db error',err);
                return res.status(422).send({error:err.message});
            }
        }
    )
});

module.exports = router;