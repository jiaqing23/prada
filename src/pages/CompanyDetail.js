import Grammarly from "../assets/img/icon-grammarly.png";
import PradaGraph from "../assets/img/prada-graph.png";
import CompanyDetailBackground from "../assets/img/Background.png";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Platform from "pages/companyDetail/Platform";
import Application from "pages/companyDetail/Application";
import Researchers from "pages/companyDetail/Researchers";
import Overview from "pages/companyDetail/Overview";

const useStyles = makeStyles((theme) => ({
  grammarlyLogo: {
    position: "absolute",
    bottom: "-80px",
    left: "30px",
    backgroundColor: "white",
    boxShadow: "0 0 5px 2px dimgrey",
    borderRadius: "100%",
    padding: "20px",
    "& img": {
      height: "120px",
    },
  },
  grammarlyHeader: {
    width: "100%",
    backgroundImage: `url(${CompanyDetailBackground})`,
    height: "200px",
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    "& h1": {
      color: "white",
      marginLeft: "230px",
      fontSize: "39px",
      fontWeight: 600,
    },
  },
}));

const CompanyDetail = () => {
  const classes = useStyles();

  const [page, setPage] = useState("platform");
  return (
    <div>
      <div className={classes.grammarlyHeader}>
        <h1>Grammarly</h1>
        <div className={classes.grammarlyLogo}>
          <img src={Grammarly} alt="" />
        </div>
      </div>
      <div className="pradaRankContainer">
        <div className="pradaRank">
          <h4>Prada Rank</h4>
          <p className="pradaRankNum">
            <span>12</span>/ 38504
          </p>
        </div>
        <div className="pradaRank pradaRankChart">
          <h4>Prada Radar Chart</h4>
          <img src={PradaGraph} alt="" />
        </div>
      </div>
      <div className="grammarlyBar">
        <button onClick={() => setPage("overview")}>
          OVERVIEW{" "}
          <span
            className={`grammarlyBarHidden ${
              page === "" ? "grammarlyBarSelected" : ""
            }`}
          ></span>
        </button>
        <button onClick={() => setPage("platform")}>
          PLATFORM{" "}
          <span
            className={`grammarlyBarHidden ${
              page === "platform" ? "grammarlyBarSelected" : ""
            }`}
          ></span>
        </button>
        <button onClick={() => setPage("researchers")}>
          RESEARCHERS{" "}
          <span
            className={`grammarlyBarHidden ${
              page === "researchers" ? "grammarlyBarSelected" : ""
            }`}
          ></span>
        </button>
        <button onClick={() => setPage("algorithm")}>
          ALOGRITHM{" "}
          <span
            className={`grammarlyBarHidden ${
              page === "" ? "grammarlyBarSelected" : ""
            }`}
          ></span>
        </button>
        <button onClick={() => setPage("data")}>
          DATA{" "}
          <span
            className={`grammarlyBarHidden ${
              page === "" ? "grammarlyBarSelected" : ""
            }`}
          ></span>
        </button>
        <button
          onClick={() => setPage("application")}
          style={{ borderRight: "none" }}
        >
          APPLICATION{" "}
          <span
            className={`grammarlyBarHidden ${
              page === "application" ? "grammarlyBarSelected" : ""
            }`}
          ></span>
        </button>
      </div>

      {(page === "overview" && <Overview />) ||
        (page === "platform" && <Platform />) ||
        (page === "researchers" && <Researchers />) ||
        (page === "application" && <Application />)}
    </div>
  );
};

export default CompanyDetail;
