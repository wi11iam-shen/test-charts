import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush } from 'recharts';

const SynchronizedLineChart = ({data}) => (
 <div>
    <LineChart
      width={600}
      height={300}
      data={data}
      syncId="1"
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="stats.hp" name="HP" stroke="#8884d8" />
      <Brush dataKey="name" height={30} stroke="#8884d8" />
    </LineChart>
    <LineChart
      width={600}
      height={300}
      data={data}
      syncId="1"
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="stats.defense" name="Defense" stroke="#82ca9d" />
    </LineChart>
 </div>
);

export default SynchronizedLineChart;