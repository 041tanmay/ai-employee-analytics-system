import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ScoreChart({ employees }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        Performance Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={employees}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="performanceScore" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreChart;