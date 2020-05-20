const express = require('express')
require('./db/mongoose')

const cors = require('cors');

const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use(taskRouter)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
