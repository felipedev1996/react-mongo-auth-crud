import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask,updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function loadTask() {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
      }
      loadTask();
    }
  }, []);

  const onSubmit = handleSubmit((data) => {

    if(params.id){
      updateTask(params.id, data);
    }else{
      createTask(data);
      navigate("/tasks");
    }
   
  });

  return (
    <div className=" bg-purple-800 max-w-md w-full p-10 rounded-md">
      <h2 className="text-2xl font-bold text-white">Add-Task</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
          autoFocus
        />
        <textarea
          rows="10"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
        ></textarea>
        <button className=" dislay-flex items-center justify-center bg-zinc-700 text-white px-4 py-2 rounded-md mt-5 hover:bg-blue-700 w-full">
          Save
        </button>
      </form>
    </div>
  );
}
export default TaskFormPage;
