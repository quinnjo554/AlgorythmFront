"use client";
import React from "react";

import { Box } from "@mui/material";

import useAuthenticatedUser, { useUserEmail } from "@/hooks/user/userHooks";
import LinearDeterminate from "@/components/Loading/LinearDeterminate";
import DashboardNav from "./components/Navbar/DashboardNav";
import DashboardNavHori from "./components/Navbar/DashboardNavHori";
import DashboardMain from "./components/Hero/DashboardMain";

function DashboardPage() {
  const user = useAuthenticatedUser(); //this is the problem, need to make
  if (!user) {
    return <LinearDeterminate />;
  }
  return (
    <Box className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardNav></DashboardNav>
      <DashboardNavHori user={user}>
        <DashboardMain user={user} />
      </DashboardNavHori>
    </Box>
  );
}

export default DashboardPage;
