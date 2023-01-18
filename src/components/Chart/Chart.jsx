import React, { PureComponent } from "react";

//* Area Chart (reChart) *//
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//* Style *//
import "./chart.scss";

//* Data for Chart *//
const data = [
  { name: "Jaueray", Total: 1200 },
  { name: "Feburary", Total: 1000 },
  { name: "March", Total: 1450 },
  { name: "Aprail", Total: 2000 },
  { name: "May", Total: 1300 },
];

const Chart = (props) => {
  return (
    <div className="chart" style={{width: props.user ? '700px' : '500px', height: '400px'}}>
      <p className="title">Last 5 months Revenue</p>
      <ResponsiveContainer width="100%" height="100%" aspect={props.user && 6 / 3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
