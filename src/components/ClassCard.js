import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function ClassCard({ classRoom, deleteClass }) {
  const listImg = ["img/react.jpg", "img/react2.jpg", "img/react3.jpg"];
  const randImg = listImg[Math.floor(Math.random() * 3)];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={classRoom.className}
        height="140"
        image={randImg}
        sx={{ height: "180px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {classRoom.className}
        </Typography>{" "}
        <Typography variant="body3" color="text.secondary">
          Category: {classRoom.catName}
        </Typography>{" "}
        <Typography variant="body2" color="text.secondary">
          Teacher:{classRoom.teacherName}
        </Typography>{" "}
      </CardContent>{" "}
      <CardActions>
        <Grid container>
          <Grid item xs={6}>
            <Button variant="contained" size="small">
              Detail{" "}
            </Button>{" "}
          </Grid>
          <Grid item xs={6}>
            <form
              id="deleteClassForm"
              onSubmit={(event) => {
                deleteClass(event);
              }}
            >
              <Button
                variant="contained"
                size="small"
                color="secondary"
                type="submit"
                id="deleteClassButton"
              >
                Delete{" "}
              </Button>{" "}
            </form>
          </Grid>
        </Grid>
      </CardActions>{" "}
    </Card>
  );
}
