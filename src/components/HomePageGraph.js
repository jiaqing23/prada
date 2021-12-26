import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import Neovis from "neovis.js/dist/neovis.js";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NeoGraph from "./NeoGraph";

const useStyles = makeStyles((theme) => ({
  infobox: {
    top: "10vh",
    paddingLeft: "max(20px,5vw)",
    position: "absolute",
    color: "#FFF",
    ["@media screen and (max-width:991px)"]: {
      paddingBottom: "1vh",
    },
  },
  title: {
    fontSize: "2vw",
    ["@media screen and (max-width:991px)"]: {
      fontSize: "max(3.5vw, 25px)",
    },
  },
}));

export default function HomePageGraph() {
  const classes = useStyles();

  return (
    <div
      style={{
        textAlign: "left",
        position: "relative",
      }}
    >
      <NeoGraph />

      <div className={classes.infobox}>
        <h1 className={classes.title}>Knowledge Graph</h1>

        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "left",
            width: "max(20vw, 300px)",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}
