import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const MyComposedChart = () => {
    const data = [{
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
          < h1 className = 'text-center pb-5 text-primary' > ComposedChart </h1> 
        <ComposedChart width={730} height={250} data={data}>
  < XAxis dataKey = "month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#FF00FF" />
  <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="sell" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="revenue" stroke="#0000FF" />
            </ComposedChart>
        </>

    );
};

export default MyComposedChart;