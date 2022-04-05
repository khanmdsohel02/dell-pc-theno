import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
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
              < h1 className = 'text-center pb-5 text-primary' > BarChart </h1> 
         <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  < XAxis dataKey = "month" />
  <YAxis />
  <Tooltip />
  <Legend />
  < Bar dataKey = "investment"
  fill = "#8884d8" />
  <Bar dataKey="sell" fill="#82ca9d" />
  < Bar dataKey = "revenue"
  fill = "#FFA500" />
</BarChart></>
    );
};

export default MyBarChart;