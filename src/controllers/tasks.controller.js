import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).populate("user",
   "email");

  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const tasks = await Task.findById(req.params.id).populate("user");
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description,date } = req.body;
  const task = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });
  await task.save();
  res.json(task);
};

export const updateTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true }
  );
  if (!task) return res.status(404).json("Task not found");
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json("Task not found");
 res.sendStatus(204);
};
