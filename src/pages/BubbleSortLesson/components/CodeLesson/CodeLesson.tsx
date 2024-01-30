import {
  Card,
  Typography,
  CardContent,
  Button,
  List,
  TextField,
  Checkbox,
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { BiCode } from "react-icons/bi";
import { incrementLessons } from "../LessonOne/BubbleSortLessonOne";
import { Lesson } from "@/models/Lesson/lesson";
import { CourseParams } from "@/utils/constants/courseParams";
import { getCodeQA } from "@/hooks/code/codeHooks";
import { bubbleSortCode } from "@/utils/constants/LessonsCode";
import CodeInput from "@/components/Inputs/CodeInput";

function CodeLesson({
  lessons,
  ids,
}: {
  lessons: Lesson[];
  ids: CourseParams;
}) {
  const lessonId = Number(ids.lessonId);
  const { data: code } = getCodeQA(lessonId + 1);
  const [userText1, setUserInput] = useState("");
  const [userText2, setUserInput2] = useState("");
  let description = lessons[lessonId].lessondescription;
  let parts = description.split("$"); // Split the description into parts

  // Now map the parts to Typography components
  let descriptionParts = parts.map((part, index) => (
    <Typography key={index} className="w-[60%] mb-5 text-xl ">
      {part}
    </Typography>
  ));
  //get code
  return (
    code && (
      <div className="p-10 flex flex-row gap-2 md:gap-6">
        <div className="flex h-[80vh] flex-col md:flex-row gap-2 md:gap-2">
          <Card className="flex-1 h-full">
            <div className="text-sm italic p-3 text-black bg-white">
              Computer Science - Algorithms
            </div>
            <Typography className="p-2 text-2xl" variant="h1" component="h1">
              {lessons[lessonId].lessonname} Lesson
            </Typography>
            <CardContent className=" prose p-4 h-[90%] bg-gray-50 overflow-y-visible sm:overflow-y-auto">
              <Box>{descriptionParts}</Box>
              <Divider />
              <Typography className="p-5">
                {code?.map((codes, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <Typography
                      variant="h1"
                      className=" text-xl"
                      sx={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color:
                          userText1.trim().toLowerCase().replace(/\s/g, "") ===
                            codes.output
                              .trim()
                              .toLowerCase()
                              .replace(/\s/g, "") ||
                          userText2.trim().toLowerCase().replace(/\s/g, "") ===
                            codes.output.trim().toLowerCase().replace(/\s/g, "")
                            ? "blue"
                            : "red",
                        mt: "20px",
                      }}
                    >
                      {index + 1}. {codes.questiontext}
                    </Typography>
                    <Typography>
                      {(userText1.trim().toLowerCase().replace(/\s/g, "") ===
                        codes.output.trim().toLowerCase().replace(/\s/g, "") ||
                        userText2.trim().toLowerCase().replace(/\s/g, "") ===
                          codes.output
                            .trim()
                            .toLowerCase()
                            .replace(/\s/g, "")) && <Checkbox checked />}
                    </Typography>
                  </div>
                ))}
              </Typography>
            </CardContent>
          </Card>
          <Card className="flex-1 h-full">
            <CardContent className="h-full flex flex-col items-center justify-center ">
              <Box className="h-full w-full">
                <Typography className="p-3 h-full rounded-2xl shadow-lg shadow-green-500 w-full bg-black flex flex-col items-center justify-center">
                  <pre>
                    <code className="text-3xl font-mono w-full text-green-600">
                      {bubbleSortCode(userText1, userText2)}
                    </code>
                  </pre>
                  <CodeInput
                    userText1={userText1}
                    setUserInput={setUserInput}
                  ></CodeInput>
                  <CodeInput
                    userText1={userText2}
                    setUserInput={setUserInput2}
                  ></CodeInput>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  );
}

export default CodeLesson;
