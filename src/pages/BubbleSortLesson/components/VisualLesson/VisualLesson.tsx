import { Lesson } from "@/models/Lesson/lesson";
import { Card, Typography, CardContent, Button } from "@mui/material";
import React from "react";
import { BiCode } from "react-icons/bi";
import { incrementLessons } from "../LessonOne/BubbleSortLessonOne";
import BubbleSortVisual from "@/components/Visualization/BubblesortVisual";
import { CourseParams } from "@/utils/constants/courseParams";

function VisualLesson({
  lessons,
  ids,
}: {
  lessons: Lesson[];
  ids: CourseParams;
}) {
  const lessonId = Number(ids.lessonId);
  return (
    <div className="p-10 flex flex-col gap-2 md:gap-6">
      <div className="flex h-[80vh] flex-col md:flex-row gap-2 md:gap-2">
        <Card className="flex-1 h-full">
          <div className="text-sm italic p-3  bg-gray-300">
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
            <BubbleSortVisual></BubbleSortVisual>
            <Button
              href={`/dashboard/bubblesort/${Number(
                ids.courseId
              )}/${incrementLessons(lessonId, lessons)}`}
              className=" bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center gap-2"
            >
              <BiCode className="text-lg" />
              Next
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default VisualLesson;
