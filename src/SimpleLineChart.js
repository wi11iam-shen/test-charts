import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';

const SimpleLineChart = ({data}) => (
 <LineChart width={730} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="stats.hp" name="HP" stroke="#8884d8" />
    <Line type="monotone" dataKey="stats.attack" name="Attack" stroke="#82ca9d" />
    <Line type="monotone" dataKey="stats.defense" name="Defense" stroke="#2d82d8" />
    <Line type="monotone" dataKey="stats.special-attack" name="Special Attack" stroke="#ff0000" />
    <Line type="monotone" dataKey="stats.special-defense" name="Special Defense" stroke="#00ff00" />
    <Line type="monotone" dataKey="stats.speed" name="Speed" stroke="#78d8ad" />
    <Brush dataKey="name" height={30} stroke="#82ca9d" />
 </LineChart>
);

export default SimpleLineChart;
