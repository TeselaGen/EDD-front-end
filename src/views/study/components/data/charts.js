import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";
import { ButtonGroup, Button, Intent, Classes } from "@blueprintjs/core";

const dataBar = [
  { name: "D-Glucose", a: 22, b: 17, c: 15, d: 13, e: 10, f: 12, g: 8, h: 9, i: 7, j:7, k:1, l:3 },
  { name: "Acetate", a: 1, b: 3, c: 1, d: 2, e: 1, f: 3, g: 2, h: 3, i: 1, j:2, k:2, l:3 },
  { name: "Optical Density", a: 1, b: 3, c: 2, d: 5, e: 7, f: 9, g: 8, h: 12, i: 13, j:15, k:16, l:13 }
];
const dataLine = [
  { name: "0", a: 22.22, b: 16.98, c: 0.1, d: 0, e: 0, f: 0 },
  { name: "2", a: 21, b: 15.5, c: 1, d: 0, e: 0.1, f: 0 },
  { name: "4", a: 18, b: 15.2, c: 3, d: 0, e: 0, f: 0.1 },
  { name: "6", a: 16, b: 14.7, c: 4.7, d: 0, e: 0, f: 0 },
  { name: "8", a: 15, b: 14, c: 5, d: 5, e: 0.1, f: 0.2 },
  { name: "10", a: 10.4, b: 11.1, c: 9.5, d: 9.6, e: 0.8, f: 0.9 },
  { name: "12", a: 5, b: 6, c: 12, d: 15, e: 1.39, f: 1.1 },
  { name: "14", a: 1, b: 3, c: 13, d: 16, e: 1.1, f: 1.2 },
  { name: "16", a: 1, b: 3, c: 17, d: 18, e: 1.2, f: 0.9 }
];


const charts = props => {
  switch (props.graph) {
    case "bar":
      return <div className="col-md-12 row">
          <BarChart width={1100} height={250} data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="a" fill="#106ba3" />
            <Bar dataKey="b" fill="#49a9ee" />
            <Bar dataKey="c" fill="#106ba3" />
            <Bar dataKey="d" fill="#49a9ee" />
            <Bar dataKey="e" fill="#106ba3" />
            <Bar dataKey="f" fill="#49a9ee" />
            <Bar dataKey="g" fill="#106ba3" />
            <Bar dataKey="h" fill="#49a9ee" />
            <Bar dataKey="i" fill="#106ba3" />
            <Bar dataKey="j" fill="#49a9ee" />
            <Bar dataKey="k" fill="#106ba3" />
            <Bar dataKey="l" fill="#49a9ee" />
          </BarChart>
        </div>;
    case "line":
      return <div className="col-md-12 row">
          <LineChart width={1100} height={250} data={dataLine} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="a" fill="#106ba3" />
            <Line dataKey="b" fill="#49a9ee" />
            <Line dataKey="c" fill="#106ba3" />
            <Line dataKey="d" fill="#49a9ee" />
            <Line dataKey="e" fill="#106ba3" />
            <Line dataKey="f" fill="#49a9ee" />
          </LineChart>
        </div>;

    default:
      break;
  }

};
export default charts;
