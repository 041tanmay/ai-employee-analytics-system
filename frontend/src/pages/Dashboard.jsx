import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";
import EmployeeCard from "../components/EmployeeCard";
import SearchFilter from "../components/SearchFilter";
import ScoreChart from "../components/ScoreChart";
import Loader from "../components/Loader";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState("");

  const fetchEmployees = async () => {
    try {
      const { data } = await API.get("/employees");

      setEmployees(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchEmployees = async () => {
    try {
      const { data } = await API.get(
        `/employees/search?department=${department}`
      );

      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-6">
        <SearchFilter
          department={department}
          setDepartment={setDepartment}
          onSearch={searchEmployees}
        />

        <ScoreChart employees={employees} />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;