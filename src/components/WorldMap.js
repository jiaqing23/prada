import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { MapView } from "@deck.gl/core";
import { IconLayer } from "@deck.gl/layers";

import IconClusterLayer from "./icon-cluster-layer";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "8vh",
    textAlign: "center",
    color: "white",
    fontSize: "2vw",
    // eslint-disable-next-line
    ["@media screen and (max-width:991px)"]: {
      fontSize: "max(3.5vw, 18px)",
      paddingBottom: "10vh",
    },
  },
}));

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json"; // eslint-disable-line

const MAP_VIEW = new MapView({ repeat: true });
const INITIAL_VIEW_STATE = {
  longitude: 0,
  latitude: 0,
  zoom: 1,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

function renderTooltip(info) {
  const { object, x, y } = info;

  if (info.objects) {
    return (
      <div className="tooltips interactive" style={{ left: x, top: y }}>
        {info.objects.map(({ name, year, mass, class: meteorClass }) => {
          return (
            <div key={name}>
              <h5>{name}</h5>
              <div>Year: {year || "unknown"}</div>
              <div>Class: {meteorClass}</div>
              <div>Mass: {mass}g</div>
            </div>
          );
        })}
      </div>
    );
  }

  if (!object) {
    return null;
  }

  return object.cluster ? (
    <div className="tooltips" style={{ left: x, top: y }}>
      {object.point_count} records
    </div>
  ) : (
    <div className="tooltips" style={{ left: x, top: y }}>
      {object.name} {object.year ? `(${object.year})` : ""}
    </div>
  );
}

/* eslint-disable react/no-deprecated */
export default function App({
  data = DATA_URL,
  iconMapping = require("./data/location-icon-mapping.json"),
  iconAtlas = "https://raw.githubusercontent.com/visgl/deck.gl/8.6-release/examples/website/icon/data/location-icon-atlas.png",
  showCluster = true,
  mapStyle = MAP_STYLE,
}) {
  const classes = useStyles();

  const [hoverInfo, setHoverInfo] = useState({});

  const hideTooltip = () => {
    setHoverInfo({});
  };
  const expandTooltip = (info) => {
    if (info.picked && showCluster) {
      setHoverInfo(info);
    } else {
      setHoverInfo({});
    }
  };

  const layerProps = {
    data,
    pickable: true,
    getPosition: (d) => d.coordinates,
    iconAtlas,
    iconMapping,
    onHover: !hoverInfo.objects && setHoverInfo,
  };

  const layer = showCluster
    ? new IconClusterLayer({ ...layerProps, id: "icon-cluster", sizeScale: 40 })
    : new IconLayer({
        ...layerProps,
        id: "icon",
        getIcon: (d) => "marker",
        sizeUnits: "meters",
        sizeScale: 2000,
        sizeMinPixels: 6,
      });

  return (
    <DeckGL
      layers={[layer]}
      views={MAP_VIEW}
      initialViewState={INITIAL_VIEW_STATE}
      controller={{ dragRotate: false, scrollZoom: false }}
      onViewStateChange={hideTooltip}
      onClick={expandTooltip}
      style={{ height: "100vh", width: "100vw", position: "relative" }}
    >
      <StaticMap
        reuseMaps
        mapStyle={mapStyle}
        preventStyleDiffing={true}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiamlhcWluZzIzIiwiYSI6ImNreGVxa2hueTFpcGIyd3RoZndrZjJoOXQifQ.1CBGBl6-Q3Foe83rNrgnUQ"
        }
      >
        <h1 className={classes.title}>AI StartUps In the World</h1>
      </StaticMap>

      {renderTooltip(hoverInfo)}
    </DeckGL>
  );
}
