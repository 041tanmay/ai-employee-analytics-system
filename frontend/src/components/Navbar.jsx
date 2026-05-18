import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-slate-900 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Employee Analytics
      </h1>

      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/add-employee">Add Employee</Link>

        <Link to="/ai">AI Recommendations</Link>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;