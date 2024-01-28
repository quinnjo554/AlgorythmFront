"use client";
import { Box } from "@mui/material";
import React from "react";
import DashboardNav from "../Dashboard/components/Navbar/DashboardNav";
import DashboardNavHori from "../Dashboard/components/Navbar/DashboardNavHori";
import LinearDeterminate from "@/components/Loading/LinearDeterminate";
import useAuthenticatedUser from "@/hooks/user/userHooks";
import BubbleSortLessonOne from "./components/LessonOne/BubbleSortLessonOne";

function BubbleSortPage() {
  const user = useAuthenticatedUser(); //this is the problem, need to make
  if (!user) {
    return <LinearDeterminate />;
  }
  return (
    <Box className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardNav></DashboardNav>
      <DashboardNavHori user={user}>
        <BubbleSortLessonOne></BubbleSortLessonOne>
      </DashboardNavHori>
    </Box>
  );
  //use userId or something for navigation so you can get user defined things
}

/**
 *
 */

export default BubbleSortPage;
