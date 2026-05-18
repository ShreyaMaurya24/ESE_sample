import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function MatchChart({ data }) {

  return (

    <div
      style={{
        width: "100%",
        height: 400,
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}
    >

      <h2>Match Score Graph</h2>

      <ResponsiveContainer width="100%" height="90%">

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="matchScore" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default MatchChart;