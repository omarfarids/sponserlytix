import React, { useContext, PureComponent } from "react";
import { AppContext } from "../components/context";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import "./styles/chart.css";

const data = [
  {
    name: 2000,
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 2000,
    uv: 3,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 2000,
    uv: 2,
    pv: 2400,
    amt: 2400,
  },
];

const Chart = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
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
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
              <stop offset="5%" stopColor="#129a74" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis dataKey="counter" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="counter"
            stroke="#8884d8"
            fill="url(#colorUv)"
            name="Total"
          />
          <Area
            type="monotone"
            dataKey="anime"
            stroke="#8884d8"
            fill="#8884d8"
            name="Animes"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
