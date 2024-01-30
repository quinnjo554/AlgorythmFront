import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { BiCode } from "react-icons/bi";

function CodeInput({
  userText1,
  setUserInput,
}: {
  userText1: string;
  setUserInput: (value: string) => void;
}) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        m: 2,
      }}
    >
      <InputBase
        sx={{ m: 1, flex: 1 }}
        placeholder="Add Code"
        inputProps={{
          "aria-label": "Code",
          maxLength: 25, // Set the max character count here
        }}
        value={userText1}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <BiCode />
      </IconButton>
    </Paper>
  );
}

export default CodeInput;
