import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate(); // este hook redirecciona a la pagina que le indiques;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
    // console.log(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md max-h-4 p-10 rounded-md">
      {RegisterErrors.map((error, i) => (
        <div className="bg-red-500 p-2text-white">
          {error}
          </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">username is required</p>
        )}

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
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
