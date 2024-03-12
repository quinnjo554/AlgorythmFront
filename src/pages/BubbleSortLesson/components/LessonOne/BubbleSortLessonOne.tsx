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
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { BiCode } from "react-icons/bi";
import useAuthenticatedUser from "@/hooks/user/userHooks";
import LinearDeterminate from "@/components/Loading/LinearDeterminate";
import { useLessonsByCourseId } from "@/hooks/lessons/lessonHooks";
import { CourseContext } from "@/app/dashboard/bubblesort/[courseId]/[lessonId]/page";
import BubbleSortVisual from "@/components/Visualization/BubblesortVisual";
import Link from "next/link";
import { CourseParams } from "@/utils/constants/courseParams";
import { Lesson } from "@/models/Lesson/lesson";
import CodeLesson from "../CodeLesson/CodeLesson";
import VisualLesson from "../VisualLesson/VisualLesson";
import ImgLesson from "../ImgLesson/ImgLesson";
import { bubbleSortCode } from "@/utils/constants/LessonsCode";

export function incrementLessons(lessonId: number, lessons: Lesson[]) {
  if (Number(lessonId) < lessons.length - 1) {
    return Number(lessonId) + 1;
  }
  return Number(lessonId);
}

function BubbleSortLesson() {
  const user = useAuthenticatedUser();
  const ids = useContext(CourseContext);
  const { data: lessons } = useLessonsByCourseId(Number(ids.courseId)); //make code lesson and nonCodingLesson in db
  const lessonId = Number(ids.lessonId);
  if (!user) {
    return <LinearDeterminate />;
  }
  function renderLessonContent(lessons: Lesson[], lessonId: number) {
    const lessonType = lessons[lessonId].lessontype;

    switch (lessonType) {
      case "img":
        return <ImgLesson lessons={lessons} ids={ids} />;
      case "visual":
        return <VisualLesson lessons={lessons} ids={ids} />;
      case "code":
        return <CodeLesson algorithmSnipet={bubbleSortCode()} lessons={lessons} ids={ids} />;
      default:
        return null;
    }
  }
  //make a lessonImgCard, lessonVisualCard, LessonCodeCard
  return lessons ? renderLessonContent(lessons, lessonId) : <LinearProgress />;
}

export default BubbleSortLesson;
