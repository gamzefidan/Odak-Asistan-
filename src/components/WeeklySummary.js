import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function WeeklySummary({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  const categoryTotals = completedTasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + task.duration;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map((key) => ({
    name: key,
    total: categoryTotals[key],
  }));

  return (
    <div className="chart-box">
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#4e4c93ff" />
      </BarChart>
    </div>
  );
}
export default WeeklySummary;
