

// this file connects the project to the mongodb server on 27017

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/edunomics', {
    useNewUrlParser: true,
    useCreateIndex: true
})