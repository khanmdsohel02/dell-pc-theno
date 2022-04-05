import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <>
            < h1 className = 'text-center pb-5 text-primary' > LineChart </h1>
             <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
    
    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
    
    <Line type="monotone" dataKey="revenue" stroke="#000" />
    
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    < XAxis dataKey = "month" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </>

    );
};

export default MyLineChart;