const mongoose = require('mongoose')

// model for the task
const Task = mongoose.model('Task', {
    //the contents of the to do task
    description: {
        type: String,
        required: true,
        trim: true
    },
    //status of the to do task
    status: {
        type: String,
        default: "to do"
    },
    // heading of the to do task
    title:{
        type:String,
        required:true
    },
    
})

module.exports = Task