import executeCode from "@/hooks/code/codeHooks";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { BiCode } from "react-icons/bi";

function CodeInput({ answerCode, sourceCode, setSourceOutput }: { answerCode: string, sourceCode: string, setSourceOutput: Dispatch<SetStateAction<string>> }) {
  async function handleRunCode() {
    console.log(sourceCode + answerCode);
    const output = await executeCode(sourceCode + answerCode);
    setSourceOutput(output.run.output);
  }
  return (
    <Button
      variant="contained"
      onClick={handleRunCode}
      sx={{
        p: '10px',
        backgroundColor: '#007bff', // Set your desired background color
        color: '#ffffff', // Set your desired text color
        '&:hover': {
          backgroundColor: '#0056b3', // Set hover background color
        },
      }}
      aria-label="Run Code"
    >
      <BiCode />
    </Button>
  );
}

export default CodeInput;
