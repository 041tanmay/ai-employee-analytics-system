import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function AddEmployee() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/employees", {
        ...form,
        skills: form.skills.split(","),
      });

      alert("Employee Added Successfully");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="flex justify-center items-center mt-10">
        <form
          onSubmit={submitHandler}
          className="bg-slate-800 p-10 rounded-2xl w-125"
        >
          <h1 className="text-3xl font-bold mb-6 text-cyan-400">
            Add Employee
          </h1>

          {Object.keys(form).map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key}
              className="w-full p-3 mb-4 rounded bg-slate-700"
              onChange={(e) =>
                setForm({
                  ...form,
                  [key]: e.target.value,
                })
              }
            />
          ))}

          <button className="w-full bg-cyan-500 p-3 rounded">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;