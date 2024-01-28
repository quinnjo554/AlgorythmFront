import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import Landing from "../../../../../public/landingImg.jpg";
import React from "react";
import { BiCode } from "react-icons/bi";
import useAuthenticatedUser from "@/hooks/user/userHooks";
import LinearDeterminate from "@/components/Loading/LinearDeterminate";

function BubbleSortLessonOne() {
  const user = useAuthenticatedUser(); //this is the problem, need to make

  if (!user) {
    return <LinearDeterminate />;
  }
  return (
    <div className="p-10  flex flex-col gap-2 md:gap-6">
      <div className="flex h-[80vh] flex-col md:flex-row gap-2 md:gap-2">
        <Card className="flex-1 h-full">
          <div className="text-sm italic px-4 mt-3">
            Computer Science - Sorting Algorithms
          </div>
          <Typography className="p-4 text-2xl" variant="h1" component="h1">
            Bubble Sort Lesson
          </Typography>
          <CardContent className="prose prose-lg p-5 h-full">
            <Typography>
              Bubble Sort is a simple sorting algorithm that repeatedly steps
              through the list, compares adjacent elements and swaps them if
              they are in the wrong order. The pass through the list is repeated
              until the list is sorted.
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex-1 h-full">
          <Typography>Visual Representation</Typography>
          <CardContent className="h-full flex flex-col items-center justify-center ">
            <img
              alt="Bubble Sort"
              className="w-full aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
              height="600"
              src={Landing.src}
              width="600"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center gap-2">
              <BiCode className="text-lg" />
              Next
            </Button>
          </CardContent>
        </Card>
        <Card className="flex-1 h-full">
          <Typography>Notes</Typography>
          <CardContent className="prose prose-lg ">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default BubbleSortLessonOne;
