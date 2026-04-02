import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 5000, expense: 2800 },
  { month: "Apr", income: 4500, expense: 2000 },
];

const pieData = [
  { name: "Food", value: 1500 },
  { name: "Shopping", value: 2000 },
  { name: "Bills", value: 1000 },
];

export default function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      
      {/* Line Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Income vs Expense</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" />
            <Line type="monotone" dataKey="expense" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Spending Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              {pieData.map((entry, index) => (
                <Cell key={index} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}