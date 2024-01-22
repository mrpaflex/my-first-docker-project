const express = require('express');
const app = express();
const {connectToMongoDB} = require('./config/db');

connectToMongoDB()

app.get('/', (req, res)=>{
    res.send('hello docker i am ready for you')
});

app.listen(4000, ()=>{
    console.log('now running port 4000')
})