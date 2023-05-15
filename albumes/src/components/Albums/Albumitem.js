import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Albumitem = ({ titile, releaseDate, albumUrl, id }) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        height: 320,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width={"100%"} src={albumUrl} alt={titile} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titile}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ margin: "auto" }} size="small">
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default Albumitem;
