const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3001

// app.use((req,res,next)=>{
//     if(req.method=='GET')
//     {
//         res.send("get user is disabled")
//     }
//     else{
//         next()
//     }
// })

app.use(express.json())
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task=require('./models/task')

// const User=require('./models/user')
// const main= async()=>{
//     // const task= await Task.findById('5d1c3b02863d40065c900633')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user= await User.findById('5d1c4adec894c327589e8019')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
