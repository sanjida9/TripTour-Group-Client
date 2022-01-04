import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { Container } from "react-bootstrap";

const Chart = () => {
  const [hotel, setHotel] = useState([]);
  const [pkg, setPkg] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get("https://infinite-reaches-98033.herokuapp.com/hotels")
      .then((res) => {
        setHotel(res.data);
        console.log(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://infinite-reaches-98033.herokuapp.com/watches")
      .then((res) => {
        setPkg(res.data);
        console.log(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://infinite-reaches-98033.herokuapp.com/order")
      .then((res) => {
        setOrder(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Container>
        <h1 className=" text-center fw-bold  text-3xl p-5">
          Users Order Details
        </h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={order}
            width={700}
            height={500}
            margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="userEmail"
              interval={"preserveStartEnd"}
              tickFormatter={(value) => value + " "}
            />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalCost"
              stroke="red"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="status"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <h1 className=" text-center fw-bold text-4xl p-5">Package Details</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={500}
            height={300}
            data={pkg}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="city"
              stroke="black"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <h1 className=" text-center fw-bold text-4xl p-5">Hotel Details</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={500}
            height={300}
            data={hotel}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="hotel"
              stroke="black"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Container>
    </div>
  );
};

export default Chart;
