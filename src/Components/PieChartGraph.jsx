import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,BarChart, Bar,PieChart, Pie, Cell  } from 'recharts';

export const PieChartGraph = ({totalIncome,totalExpense}) => {
    const pieData = [
        { name: "Income", value: totalIncome },
        { name: "Expense", value: totalExpense }
      ];
      const COLORS = ["#00C49F", "#FF8042"];
  return (
    <PieChart width={200} height={200}>
  <Pie
    data={pieData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={100}
    fill="#8884d8"
    label
  >
    {pieData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip />
</PieChart>
  )
}
