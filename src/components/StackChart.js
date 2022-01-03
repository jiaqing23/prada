import React from "react";
import * as d3 from "d3";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    top: "10vh",
    paddingLeft: "max(100px,10vw)",
    fontSize: "2vw",
    position: "absolute",
    color: "#FFF",
    ["@media screen and (max-width:991px)"]: {
      fontSize: "max(3.5vw, 25px)",
      paddingBottom: "1vh",
    },
  },
}));

export const useD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  return ref;
};

function BarChart() {
  const classes = useStyles();

  const ref = useD3((svg) => {
    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 50, bottom: 20, left: 50 },
      width = 1400 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv(
      "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv"
    ).then(function (data) {
      // List of groups = header of the csv files
      var keys = data.columns.slice(1).slice(5, 8);

      // Add X axis
      var x = d3
        .scaleLinear()
        .domain(
          d3.extent(data, function (d) {
            return d.year;
          })
        )
        .range([margin.left, width + margin.left]);
      svg
        .append("g")
        .attr("transform", "translate(0," + (height + margin.top) + ")")
        .style("color", "white")
        .call(d3.axisBottom(x).ticks(5));

      // Add Y axis
      var y = d3
        .scaleLinear()
        .domain([-100000, 100000])
        .range([height + margin.top, margin.top]);
      svg
        .append("g")
        .attr("transform", "translate(" + [margin.left, 0] + ")")
        .style("color", "white")
        .call(d3.axisLeft(y));

      // color palette
      var color = d3
        .scaleOrdinal()
        .domain(keys)
        .range([
          "#FF688D",
          "#027AFF",
          "#3B4F8C",
          "#984ea3",
          "#ff7f00",
          "#ffff33",
          "#a65628",
          "#f781bf",
        ]);

      //stack the data?
      var stackedData = d3.stack().offset(d3.stackOffsetSilhouette).keys(keys)(
        data
      );

      // Show the areas
      svg
        .selectAll("mylayers")
        .data(stackedData)
        .enter()
        .append("path")
        .style("fill", function (d) {
          return color(d.key);
        })
        .attr(
          "d",
          d3
            .area()
            .x(function (d, i) {
              return x(d.data.year);
            })
            .y0(function (d) {
              return y(d[0]);
            })
            .y1(function (d) {
              return y(d[1]);
            })
        );
    });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        textAlign: "center",
        position: "relative",
      }}
    >
      <svg
        ref={ref}
        style={{ marginTop: "10vh", marginBottom: "auto", marginLeft: "auto" }}
      ></svg>
      <h1 className={classes.title}>
        <div style={{ textAlign: "left" }}>Trend Chart of</div>
        <div style={{ textAlign: "left" }}>Startup Types</div>
        <div style={{ textAlign: "left", fontSize: "15px", marginTop: "1vh" }}>
          Starting in 2000
        </div>
        <div style={{ textAlign: "left", fontSize: "15px", color: "#999" }}>
          Predicting after 2020
        </div>
      </h1>
    </div>
  );
}

export default BarChart;
