"use client";
import { Box } from "@mui/material";
import React, { HTMLAttributes } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
function BarChartSort(props: HTMLAttributes<HTMLDivElement>) {
  const data = [
    { name: "Jan", count: 111 },
    { name: "Feb", count: 157 },
    { name: "Mar", count: 129 },
    { name: "Apr", count: 150 },
    { name: "May", count: 119 },
    { name: "Jun", count: 72 },
  ];

  return (
    <div {...props}>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 0, right: 2, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="#f3f4f6" vertical={false} />
          <XAxis dataKey="name" tickLine={false} padding={{ left: 16 }} />
          <YAxis tickLine={false} padding={{ bottom: 6 }} />
          <Tooltip labelStyle={{ textTransform: "capitalize" }} />
          <Bar dataKey="count" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartSort;
