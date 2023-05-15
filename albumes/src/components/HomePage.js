import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import imageWedding from "./DSC_5664.jpg";
import Albumitem from "./Albums/Albumitem";
import { Link } from "react-router-dom";
import { getAllAlbums } from "../api-helpers/api-helpers";

const HomePage = () => {
  const [albumes, setAlbums] = useState([]);
  useEffect(() => {
    getAllAlbums()
      .then((data) => setAlbums(data.albumes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={"60%"} height={"50vh"} padding={2}>
        <img
          src={imageWedding}
          alt="imageWedding"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Release
        </Typography>
      </Box>

      <Box
        display={"flex"}
        width={"80%"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {albumes &&
          albumes
            .slice(0, 4)
            .map((album, index) => (
              <Albumitem
                id={album.id}
                titile={album.titile}
                albumUrl={album.album}
                releaseDate={album.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/albums"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Albums
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
