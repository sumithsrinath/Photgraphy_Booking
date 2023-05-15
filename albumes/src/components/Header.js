import { AppBar, Toolbar, Autocomplete, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { getAllAlbums } from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setvalue] = useState(0);
  const [albums, setAlbums] = useState();

  useEffect(() => {
    getAllAlbums()
      .then((data) => setAlbums(data.albums))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
          <PhotoLibraryIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={albums ? albums.map((option) => option.title) : []}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Accross multiple Albums"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setvalue(val)}
          >
            <Tab LinkComponent={Link} to="/Admin" label={"Admin"} />
            <Tab LinkComponent={Link} to="/Auth" label={"Auth"} />
            <Tab LinkComponent={Link} to="/albums" label={"Albums"} />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
