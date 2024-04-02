const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/task-manager';
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