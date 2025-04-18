import React from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,BarChart, Bar,PieChart, Pie, Cell  } from 'recharts';
export const LineChartGraph = ({summaryData}) => {
  return (
    <LineChart width={200} height={200}  data={summaryData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis  dataKey="_id.month"/>
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="total" stroke="#53b72f" />
    </LineChart>
  )
}
