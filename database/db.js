const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/simple-budget-db';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose 
 .connect(mongoURI , options)
 .then(() => {
    console.log('connected to MongoDB');
 })
 .catch((error) => {
    console.error('error connecting to MongoDB' , error)
 })