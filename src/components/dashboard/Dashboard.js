import MyAreaChart from "../Chart/MyAreaChart";
import MyBarChart from "../Chart/MyBarChart";
import MyComposedChart from "../Chart/MyComposedChart";
import MyLineChart from "../Chart/MyLineChart";
import "./dashboard.css"

const Dashboard = () => {
  
    return (
        <div className='charts'>
            <div className="chart">
<MyLineChart></MyLineChart>
            </div>
            <div className="chart">
  < MyAreaChart > </MyAreaChart>
            </div>
            <div className="chart">
    <MyBarChart></MyBarChart>
            </div>
            <div className="chart">
   <MyComposedChart></MyComposedChart>
            </div>
      
        </div>
    );
};

export default Dashboard;