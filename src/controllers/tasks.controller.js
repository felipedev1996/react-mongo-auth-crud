import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {

  try {
     const tasks = await Task.find({ user: req.user.id }).populate("user");

  res.json(tasks);
  } catch (error) {
    return res.status(500).json({message:"Falla del servidor  " + error});
    
  }
 
};
export const createTask = async (req, res) => {

  try {
    const { title, description,date } = req.body;
    const task = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    await task.save();
    res.json(task);
  } catch (error) {
    return res.status(500).json({message:"Falla del servidor  " + error});
  }
 
};
export const deleteTask = async (req, res) => {
  try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json("Task not found");
     return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message:"Falla del servidor  " + error}); 
  }
  };

  export const updateTask = async (req, res) => {
    try {
      
      const { title, description } = req.body;
      const task = await Task.findByIdAndUpdate(
      {  id:req.params.id,},
        { title, description },
        { new: true }
      );
      return res.json(task);
    } catch (error) {
      return res.status(500).json({message:"Falla del servidor  " + error});
      
    }
  };
  
  


export const getTaskById = async (req, res) => {

  try {
    
    const tasks = await Task.findById(req.params.id)
    if (!tasks) return res.status(404).json("Task not found");
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({message:"Falla del servidor  " + error});
    
  }
};



