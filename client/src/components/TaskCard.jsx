import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {


    const {deleteTask} = useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
     <header className="flex justify-between">
     <h1 className="text-2xl font-bold ">{task.title}</h1>
     </header>
      <p className="text-slate-400">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
      <div className="flex gap-x-2">
        <button onClick={async () => {deleteTask(task._id)}} className="bg-purple-700 text-white px-4 mt-5 py-1 rounded-md hover:bg-purple-600">Delete</button>
        <Link to={`/tasks/${task._id}`}  className="bg-blue-500 text-white px-4 mt-5 py-1 rounded-md hover:bg-blue-700">Update</Link>
      </div>
    </div>
  );
}

export default TaskCard;
