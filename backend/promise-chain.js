require('../task-manager/src/db/mongoose')
const  Task=require('../task-manager/src/models/task')
// Task.findByIdAndDelete('5d1342164353924b900b8177').then((task)=>{
//    console.log('deleting',task)
//    return Task.find({completed:false})
// }).then((tas)=>{
//     console.log(tas)
// }).catch((e)=>{
//     console.log(e)
// })

const deletetaskandcount=async (id)=>{
    const deletedtask=await Task.findByIdAndDelete(id)
    const counttask= await Task.countDocuments({completed:false})
    return counttask
}
deletetaskandcount('5d135f22c3bddb534c155002').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})