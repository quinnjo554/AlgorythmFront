"use client";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import { Session, getSession } from "@auth0/nextjs-auth0";
import { Box } from "@mui/material";
import React from "react";

function Dashboard() {
  return (
    <Box>
      <DashboardPage></DashboardPage>
    </Box>
  );
}

export default Dashboard;
