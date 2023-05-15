import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllAlbums } from "../../api-helpers/api-helpers";
import Albumitem from "./Albumitem";

const Albums = () => {
  const [albumes, setAlbums] = useState();
  useEffect(() => {
    getAllAlbums()
      .then((data) => setAlbums(data.albumes))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        width="40%"
        bgcolor={"#900C3F"}
        color="white"
        textAlign={"center"}
      >
        All Albums
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
      >
        {albumes &&
          albumes.map((album, index) => (
            <Albumitem
              key={index}
              id={album._id}
              albumUrl={album.albumUrl}
              releaseDate={album.releaseDate}
              title={album.title}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Albums;
