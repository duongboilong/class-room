import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
//import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

import { useState, useEffect } from "react";

import ClassCard from "./ClassCard";
import MenuNav from "./MenuNav";
import { CodeSharp } from "@material-ui/icons";
const classRoom = {
  className: "React Course",
  subScription:
    "Learn how to implement a database, authentication & file uploads with React & Firebase",
};

const theme = createTheme();

export default function ClassList() {
  const [classListData, setClassListData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handle_submitAddClass = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        className: event.target.elements.className.value,
        catName: event.target.elements.catName.value,
        teacherName: event.target.elements.teacherName.value,
      }),
    };
    fetch("https://classroom-api-wnc.herokuapp.com/class", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const newData = {
          _id: data._id,
          ID: data.ID,
          className: data.className,
          catName: data.catName,
          teacherName: data.teacherName,
        };
        console.log(data);
        console.log(newData);
        console.log(classListData);

        const newClassList = [...classListData];
        newClassList.unshift(data);
        setClassListData(newClassList);
      });
  };

  const handle_submitDeleteClass = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        className: event.target.elements.className.value,
        catName: event.target.elements.catName.value,
        teacherName: event.target.elements.teacherName.value,
      }),
    };
    fetch("https://classroom-api-wnc.herokuapp.com/class", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const newData = {
          _id: data._id,
          ID: data.ID,
          className: data.className,
          catName: data.catName,
          teacherName: data.teacherName,
        };
        console.log(data);
        console.log(newData);
        console.log(classListData);

        const newClassList = [...classListData];
        newClassList.push(data);
        setClassListData(newClassList);
      });
  };

  useEffect(() => {
    fetch("https://classroom-api-wnc.herokuapp.com/class")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setClassListData(result);
          console.log(classListData);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        {/* <PhotoCameraIcon sx={{ mr: 2 }} />{" "} */}
        <MenuNav onSubmit={handle_submitAddClass}></MenuNav>
      </AppBar>{" "}
      <main sx={{ width: "80%" }}>
        {" "}
        {/* Hero unit */}
        {/* <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout{" "}
            </Typography>{" "}
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below— its
              contents, the creator, etc.Make it short and sweet, but not too
              short so folks don & apos; t simply skip over it entirely.{" "}
            </Typography>{" "}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"> Main call to action </Button>{" "}
              <Button variant="outlined"> Secondary action </Button>{" "}
            </Stack>{" "}
          </Container>{" "}
        </Box>{" "} */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {" "}
          {/* End hero unit */}{" "}
          <Grid container spacing={4}>
            {" "}
            {classListData.map((classRoom) => (
              <Grid item key={classRoom._id} xs={12} sm={6} md={4}>
                <ClassCard
                  classRoom={classRoom}
                  deleteClass={handle_submitDeleteClass}
                ></ClassCard>
              </Grid>
            ))}{" "}
          </Grid>{" "}
        </Container>{" "}
      </main>{" "}
      {/* Footer */}{" "}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer{" "}
        </Typography>{" "}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>{" "}
      </Box>{" "}
      {/* End footer */}{" "}
    </ThemeProvider>
  );
}
