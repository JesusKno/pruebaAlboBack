import taskModel from '../models/task.js'

const getAllTasks = async( req, res ) =>{

    try {
        const taskList = await taskModel.find()
        res.status(200).json(taskList)
    } catch (error) {
        res.status(500).send({Message: "Server Error"})
    }
}

const saveNewTask = async(req, res) =>{

    const taskData = taskModel(req.body)

    await taskData.save().then(
        data => {
            console.log(data);
            if(!data){
                res.status(400).send({Message: "Task not saved"});
            }else{
                res.status(201).send({Message: "Task Saved"})
            }
        }
    ).catch(err => {
        res.status(500).send({Message: err})
    })

}

const updateTask = async(req, res) => {
    
    const taskId = req.params.id

    await taskModel.findByIdAndUpdate(taskId, req.body, {useFindAndModify: false}).then(
        data => {
            console.log(data);
            if(!data){
                res.status(400).send({Message: "Task not found"});
            }else{
                res.status(200).send({Message: "Task update succesfully"})
            }
        }
    ).catch(err => {
        res.status(500).send({Message: err})
    })
}

const deleteTask = async(req, res) => {
    
    const taskId = req.params.id

    await taskModel.findByIdAndDelete(taskId).then(
        data => {
            console.log(data);
            if(!data){
                res.status(400).send({Message: "Task not found"});
            }else{
                res.status(200).send({Message: "Task delete succesfully"})
            }
        }
    ).catch(err => {
        res.status(500).send({Message: err})
    })
}



const updateTaskStatus = async(req, res) => {
    
    const taskId = req.params.id

    await taskModel.updateOne({_id: taskId}, {$set: {taskComplete: true}}).then(
        data => {
            console.log(data);
            if(!data){
                res.status(400).send({Message: "Task not found"});
            }else{
                res.status(200).send({Message: "Task update succesfully"})
            }
        }
    ).catch(err => {
        res.status(500).send({Message: err})
    })
}

export {
    getAllTasks,
    saveNewTask,
    updateTask,
    deleteTask,
    updateTaskStatus
}