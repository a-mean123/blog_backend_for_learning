const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aminejbali32:123456789A@cluster0.e6a3hy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log('connected');
    })
    .catch(()=>{
        console.log('error');
    })