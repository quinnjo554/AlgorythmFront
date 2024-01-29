"use client";
import BubbleSortPage from "@/pages/BubbleSortLesson/BubbleSortPage";
import { CourseParams } from "@/utils/constants/courseParams";
import { Box } from "@mui/material";
import React from "react";

export const CourseContext = React.createContext<CourseParams>({
  courseId: "",
  lessonId: "",
});

function BubbleSort({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  return (
    <CourseContext.Provider value={params}>
      <Box>
        <BubbleSortPage></BubbleSortPage>
      </Box>
    </CourseContext.Provider>
  );
}

export default BubbleSort;
