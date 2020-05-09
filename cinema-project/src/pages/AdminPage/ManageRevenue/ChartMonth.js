import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import './ChartMonth.css';
class ChartMonth extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/Lrffmzfc/";
  
  render() {
    console.log(this.props);
    let Data = this.props.Data;
    Data.splice(12,1);
    
    return (
      <ResponsiveContainer width="95%" height={500}>
      <AreaChart
      width={1000}
      height={400}
        data={Data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#f26b38" fill="#f26b38" />
        
      </AreaChart>
      </ResponsiveContainer>
    );
  }
}
export default ChartMonth;