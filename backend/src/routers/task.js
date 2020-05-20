const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


//creating a new task
router.post('/tasks', async (req, res) => {

    const task= new Task({
        ...req.body
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})


// getting all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks=await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})


// getting one task by id
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task= await Task.findOne({_id})

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})


//updating the task 
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'status','title']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const _id = req.params.id
        const task= await Task.findOne({_id},req.body,{new:true,runValidators:true})
        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update)=>task[update]=req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})


//deleting the task by id
router.delete('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const task= await Task.findOneAndDelete({_id},req.body)
        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router