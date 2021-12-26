import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles(() => ({
  image: {
    height: "80vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  title: {
    zIndex: 10,
    width: "100vw",
  },
  line: {
    margin: "auto",
    textAlign: "center",
    color: "white",
  },
  datarow: {
    background: "linear-gradient(to right ,#394C80,#1A3071 )",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  datacell: {
    margin: "2vw",
    color: "white",
  },
  datacellnum: {
    fontSize: "30px",
  },
  datacelltext: {
    fontSize: "15px",
    color: "#B5B5B5",
  },
}));

export default function HomePageBanner(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div
        className={classes.image}
        style={{
          backgroundImage:
            "url(" + require("../assets/img/landing-bg.png").default + ")",
        }}
      >
        <div className={classes.title}>
          <h1 className={classes.line} style={{ fontSize: "max(50px,6vw)" }}>
            PRADA
          </h1>
          <h1 className={classes.line} style={{ fontSize: "max(15px,2vw)" }}>
            INDUSTRAIL AI - CHALLENGES AND STRATEGIC PLANNING FRAMEWORK
          </h1>
          <div className="navbarPlatformBottomRow" style={{ marginTop: "5vh" }}>
            <div>
              <p>RESEARCH (COMPANY / RESEARCH NAME)</p>
              <button>
                <i class="fas fa-search"></i> SEARCH
              </button>
            </div>
          </div>
          {/* <Grid container spacing={2}>
            <Grid item md={4} xs={2}></Grid>
            <Grid item md={4} xs={8}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item md={4} xs={2}></Grid>
          </Grid> */}
        </div>
      </div>

      <div className={classes.datarow}>
        <div className={classes.datacell}>
          <h1 className={classes.datacellnum}>47,000</h1>
          <h3 className={classes.datacelltext}>AI Startups</h3>
        </div>
        <div className={classes.datacell}>
          <h1 className={classes.datacellnum}>1,987,026</h1>
          <h3 className={classes.datacelltext}>Researchers</h3>
        </div>
        <div className={classes.datacell}>
          <h1 className={classes.datacellnum}>563,000</h1>
          <h3 className={classes.datacelltext}>Publications</h3>
        </div>
        <div className={classes.datacell}>
          <h1 className={classes.datacellnum}>3,760,649</h1>
          <h3 className={classes.datacelltext}>Collection Data</h3>
        </div>
        <div className={classes.datacell}>
          <h1 className={classes.datacellnum}>1,457,942</h1>
          <h3 className={classes.datacelltext}>Application</h3>
        </div>
        <div className={classes.datacell}>
          <h1 className={classes.datacellnum}>753,720</h1>
          <h3 className={classes.datacelltext}>News</h3>
        </div>
      </div>
    </div>
  );
}
