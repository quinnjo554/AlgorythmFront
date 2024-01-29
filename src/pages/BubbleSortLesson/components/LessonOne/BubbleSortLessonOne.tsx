import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  LinearProgress,
} from "@mui/material";

import Landing from "../../../../../public/landingImg.jpg";
import React, { useContext } from "react";
import { BiCode } from "react-icons/bi";
import useAuthenticatedUser from "@/hooks/user/userHooks";
import LinearDeterminate from "@/components/Loading/LinearDeterminate";
import { useLessonsByCourseId } from "@/hooks/lessons/lessonHooks";
import { CourseContext } from "@/app/dashboard/bubblesort/[courseId]/[lessonId]/page";
import BubbleSortVisual from "@/components/Visualization/BubblesortVisual";
import Link from "next/link";
import { CourseParams } from "@/utils/constants/courseParams";
import { Lesson } from "@/models/Lesson/lesson";

function incrementLessons(ids: CourseParams, lessons: Lesson[]) {
  if (Number(ids.lessonId) < lessons.length - 1) {
    return Number(ids.lessonId) + 1;
  }
  return Number(ids.lessonId);
}

function BubbleSortLesson() {
  const user = useAuthenticatedUser();
  const ids = useContext(CourseContext);
  const { data: lessons } = useLessonsByCourseId(Number(ids.courseId)); //make code lesson and nonCodingLesson in db
  const lessonId = Number(ids.lessonId);
  if (!user) {
    return <LinearDeterminate />;
  }
  let lessonContent;
  if (lessons) {
    lessonContent = lessons[lessonId].imageurl ? (
      <img
        alt="Bubble Sort"
        className="w-full h-full aspect-[1/1] overflow-hidden rounded-lg object-fit object-center"
        height="200"
        src={lessons[lessonId].imageurl}
        width="200"
      />
    ) : (
      <BubbleSortVisual />
    );
  }
  return lessons ? (
    <div className="p-10 flex flex-col gap-2 md:gap-6">
      <div className="flex h-[80vh] flex-col md:flex-row gap-2 md:gap-2">
        <Card className="flex-1 h-full">
          <div className="text-sm italic px-4 mt-3">
            Computer Science - Sorting Algorithms
          </div>
          <Typography className="p-4 text-2xl" variant="h1" component="h1">
            {lessons[lessonId].lessonname} Lesson
          </Typography>
          <CardContent className="prose prose-lg p-5 h-full">
            <Typography>{lessons[lessonId].lessondescription}</Typography>
          </CardContent>
        </Card>
        <Card className="flex-1 h-full">
          <CardContent className="h-full flex flex-col items-center justify-center ">
            {lessonContent}
            <Button
              href={`/dashboard/bubblesort/1/${incrementLessons(ids, lessons)}`}
              className=" bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center gap-2"
            >
              <BiCode className="text-lg" />
              Next
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  ) : (
    <LinearProgress />
  );
}

export default BubbleSortLesson;
