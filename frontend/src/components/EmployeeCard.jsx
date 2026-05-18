function EmployeeCard({ employee }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition">
      <h2 className="text-2xl font-bold text-cyan-400">
        {employee.name}
      </h2>

      <p>{employee.email}</p>

      <p className="mt-2">
        Department:
        <span className="text-cyan-300">
          {" "}
          {employee.department}
        </span>
      </p>

      <p>
        Experience:
        <span className="text-green-400">
          {" "}
          {employee.experience} years
        </span>
      </p>

      <p>
        Performance:
        <span className="text-yellow-400">
          {" "}
          {employee.performanceScore}
        </span>
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {employee.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-cyan-500 px-2 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EmployeeCard;