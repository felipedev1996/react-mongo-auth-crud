import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function loginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors,isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  },[isAuthenticated]);

  return (
    <div className="flex items-center justify-center h-wh-[calc(100vh-100px)]">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2text-white text-center">
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">email is required</p>
          )}
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">password is required</p>
          )}
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-5"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between mt-5 ">
          Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default loginPage;
