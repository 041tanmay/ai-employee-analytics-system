import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/signup", form);

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-linear-to-br from-slate-900 to-cyan-900">
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 p-10 rounded-2xl w-96 shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded bg-slate-700"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-700"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-slate-700"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-cyan-500 p-3 rounded font-bold">
          Signup
        </button>

        <p className="mt-4 text-center">
          Already have account?{" "}
          <Link to="/" className="text-cyan-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;