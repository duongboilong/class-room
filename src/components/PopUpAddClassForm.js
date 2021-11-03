import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./popup.css";

export default function PopUpAddClassForm({ onSubmit }) {
  const handleAddButtonClick = () => {
    console.log("sdfsf");
  };
  return (
    <Box
      className="popUpAddClass"
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
      noValidate
      autoComplete="off"
      bgcolor="primary.main"
      onSubmit={(event) => onSubmit(event)}
    >
      <h3>Add a new class</h3>
      <TextField
        className="inputTextField"
        id="classNameTxt"
        name="className"
        label="Class Name:"
        variant="outlined"
      />
      <TextField
        className="inputTextField"
        id="catNameTxt"
        label="Category:"
        name="catName"
        variant="outlined"
      />
      <TextField
        className="inputTextField"
        id="teacherNameTxt"
        label="Teacher:"
        name="teacherName"
        variant="outlined"
      />

      <Button variant="contained" type="submit" color="success">
        Add
      </Button>
    </Box>
  );
}
