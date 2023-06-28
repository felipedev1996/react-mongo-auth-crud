import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { signup, user } = useAuth();

  console.log(user);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
    // console.log(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md max-h-4 p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-5"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />

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
