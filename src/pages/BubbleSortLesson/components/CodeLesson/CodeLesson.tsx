import {
  Card,
  Typography,
  CardContent,
  Checkbox,
  Box,
  Divider,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Lesson } from "@/models/Lesson/lesson";
import { CourseParams } from "@/utils/constants/courseParams";
import { getCodeQA } from "@/hooks/code/codeHooks";
import CodeInput from "@/components/Inputs/CodeInput";
import Editor from "@monaco-editor/react"
import { editor as monacoEditor } from 'monaco-editor';
function CodeLesson({
  lessons,
  ids,
  algorithmSnipet
}: {
  lessons: Lesson[];
  ids: CourseParams;
  algorithmSnipet: string
}) {
  const lessonId = Number(ids.lessonId);
  const { data: code } = getCodeQA(lessonId + 1);
  const [sourceOutput, setSourceOutput] = useState("");
  let description = lessons[lessonId].lessondescription;
  let parts = description.split("$"); // Split the description into parts
  const editorRef = useRef<monacoEditor.IStandaloneCodeEditor | null>(null);
  const [editorValue, setEditorValue] = useState('');

  function handleEditorDidMount(editor: monacoEditor.IStandaloneCodeEditor, monaco: typeof monacoEditor) {
    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      setEditorValue(editor.getValue());
    });
  }

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
                <div style={{ marginBottom: "20px" }}>
                  <Typography
                    variant="h1"
                    className=" text-xl"
                    sx={{
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color:
                        sourceOutput.trim().toLowerCase().replace(/\s/g, "") ===
                          code.output
                            .trim()
                            .toLowerCase()
                            .replace(/\s/g, "")
                          ? "blue"
                          : "red",
                      mt: "20px",
                    }}
                  >
                    {code.questiontext}
                  </Typography>
                  <Typography>
                    {sourceOutput.trim().toLowerCase().replace(/\s/g, "") ===
                      code.output.trim().toLowerCase().replace(/\s/g, "")
                      && <Checkbox checked />}
                  </Typography>
                </div>
              </Typography>
            </CardContent>
          </Card>
          <Card className="flex-1 h-full">
            <CardContent className="h-full flex flex-col items-center justify-center ">
              <Box className="h-full w-full">
                <Editor className="z-10," height="90%"
                  width="100%" theme="vs-dark" defaultLanguage="cpp"
                  value={algorithmSnipet}
                  onMount={handleEditorDidMount} />
                <Card className="bg-black text-white">
                  <Typography>Output:</Typography>
                  <code>
                    {sourceOutput}
                  </code>
                </Card>
                <CodeInput answerCode={code.answercode} setSourceOutput={setSourceOutput} sourceCode={editorValue} />
              </Box>
            </CardContent>
          </Card>
        </div>
      </div >
    )
  );
}

export default CodeLesson;
