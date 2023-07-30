import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";





function TasksPage() {


    const {getTasks,tasks} = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (!tasks.length) {
        return <h1>No tasks in your list</h1>;
    }
    return (
        <div className="grid grid-cols-3 gap-2">
           {tasks.map((task) => (
            
          <TaskCard key={task._id} task={task} />
               
           ))}
        </div>
    );
}
export default TasksPage;