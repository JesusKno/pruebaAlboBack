import taskModel from '../models/task.js'

const getAllTasks = async( req, res ) =>{

    const taskList = await taskModel.find()
    res.status(200).json(taskList)
}

const saveNewTask = async(req, res) =>{

    console.log(req.body)

    const taskData = taskModel(req.body)

    await taskData.save()

    console.log(taskData)

    res.send({Message: "Task Saved"})

}

const updateTask = async(req, res) => {
    
    const taskId = req.params.id

    await taskModel.findByIdAndUpdate(taskId, req.body, {useFindAndModify: false}).then(
        data => {
            console.log(data);
            if(!data){
                res.status(400).send({Message: "Task not found"});
            }else{
                res.status(201).send({Message: "Task update succesfully"})
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

export {
    getAllTasks,
    saveNewTask,
    updateTask,
    deleteTask
}