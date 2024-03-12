import { Card, Typography, CardContent, Button } from "@mui/material";
import React from "react";
import { BiCode } from "react-icons/bi";
import { incrementLessons } from "../LessonOne/BubbleSortLessonOne";
import { Lesson } from "@/models/Lesson/lesson";
import { CourseParams } from "@/utils/constants/courseParams";

function ImgLesson({ lessons, ids }: { lessons: Lesson[]; ids: CourseParams }) {
  const lessonId = Number(ids.lessonId);
  let description = lessons[lessonId].lessondescription;
  let parts = description.split("$");

  let descriptionParts = parts.map((part, index) => (
    <Typography key={index} className="w-[60%] mb-5 text-xl ">
      {part}
    </Typography>
  ));

  return (
    <div className="p-10 flex flex-col gap-2 md:gap-6">
      <div className="flex h-[80vh] flex-col md:flex-row gap-2 md:gap-2">
        <Card className="flex-1 h-full">
          <div className="text-sm italic p-3  bg-slate-300">
            Computer Science - Sorting Algorithms
          </div>
          <Typography className="p-4 text-2xl" variant="h1" component="h1">
            {lessons[lessonId].lessonname} Lesson
          </Typography>
          <CardContent className="prose prose-lg p-5 h-[90%] overflow-y-scroll bg-gray-50">
            <Typography>{descriptionParts}</Typography>
          </CardContent>
        </Card>
        <Card className="flex-1 h-full">
          <CardContent className="h-full flex flex-col items-center justify-center ">
            <img
              alt="Bubble Sort"
              className="w-full h-full aspect-[1/1] overflow-hidden rounded-lg object-fit object-center"
              height="200"
              src={lessons[lessonId].imageurl}
              width="200"
            />
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

export default ImgLesson;
