import React from "react";
import { makeStyles } from "@material-ui/styles";
import { container } from "assets/jss/material-kit-react.js";
import HomePageBanner from "components/HomePageBanner.js";
import HomePageTimeline from "components/HomePageTimeline.js";
import PartnerBar from "components/PartnerBar.js";
import StackChart from "components/StackChart.js";
import StackChart2 from "components/StackChart2.js";
import WorldMap from "components/WorldMap.js";
import HomePageGraph from "components/HomePageGraph";
import HomeNavbar from "components/HomeNavbar";

const useStyles = makeStyles(() => ({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundColor: "#0A1B4F" }}>
      <HomeNavbar />
      <HomePageBanner />
      <WorldMap />
      <StackChart />
      <HomePageTimeline />
      <HomePageGraph />
      <StackChart2 />
      <PartnerBar />
    </div>
  );
}
