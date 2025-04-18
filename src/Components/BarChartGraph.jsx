import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,BarChart, Bar,PieChart, Pie, Cell  } from 'recharts';

export const BarChartGraph = ({summaryData}) => {
  return (
    <BarChart width={600} height={300} data={summaryData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="_id.month" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="total" fill="#82ca9d" />
</BarChart>
  )
}
