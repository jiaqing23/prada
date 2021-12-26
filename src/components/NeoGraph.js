import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import Neovis from "neovis.js/dist/neovis.js";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

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

export default function NeoGraph(props) {
  const classes = useStyles();
  const {
    width,
    height,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
    containerId,
  } = props;

  const visRef = useRef();

  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,
      labels: {
        Person: {
          caption: "name",
          color: {
            background: "red",
            border: "#aa0000",
            highlight: "000000",
          },
          size: 1,
          community: "community",
          font: {
            size: 20,
            color: "#fff",
            strokeWidth: 0,
          },
        },
        Movie: {
          caption: "title",
          font: {
            size: 20,
            color: "#fff",
            strokeWidth: 0,
          },
        },
      },
      relationships: {
        ACTED_IN: {
          caption: false,
          thickness: "count",
        },
      },
      initial_cypher:
        "MATCH (p:Person)-[r:ACTED_IN]->(m:Movie) RETURN p,r,m LIMIT 20",
    };
    const vis = new Neovis(config);
    vis.render();
  }, [neo4jUri, neo4jUser, neo4jPassword]);

  return (
    <div
      id="id0"
      ref={visRef}
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${backgroundColor}`,
      }}
    ></div>
  );
}

NeoGraph.defaultProps = {
  width: "100vw",
  height: "100vh",
  containerId: "id0",
  neo4jUri: "bolt://3.95.134.255:7687",
  neo4jUser: "neo4j",
  neo4jPassword: "talks-refrigerator-dial",
  backgroundColor: "#1A3071",
};
