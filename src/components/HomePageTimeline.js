import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiArchive } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
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

export default function HomePageTimeline(props) {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Description of Industrial AI Framework</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right , #415D95,#333E80 )",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #333E80" }}
          date="Platform"
          iconStyle={{ background: "#333E80", color: "#fff" }}
          icon={<HiArchive />}
        >
          <h3 className="vertical-timeline-element-title">
            The "Engine" of AI Machine
          </h3>
          <p>
            ·Software：High-Performance AI Library & Framework to build own
            custom models
            <br />
            ·Hardware：Different processes for specific tasks & Large-Scale
            Cluster
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right , #415D95,#333E80 )",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #333E80" }}
          date="Researchers"
          iconStyle={{ background: "#333E80", color: "#fff" }}
          icon={<HiArchive />}
        >
          <h3 className="vertical-timeline-element-title">
            The "Pilot" of AI Machine
          </h3>
          <p>
            Talents with "AI + X"
            <br />
            X: Domain Knowledge
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right , #415D95,#333E80 )",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #333E80" }}
          date="Applications"
          iconStyle={{ background: "#333E80", color: "#fff" }}
          icon={<HiArchive />}
        >
          <h3 className="vertical-timeline-element-title">
            The "Route-Map" of AI Machine
          </h3>
          <p>
            Algorithms provide the instructions for AI systems.
            <br />
            Power of Deep Learning: Neural nets use examples to automatically
            infer rules.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right , #415D95,#333E80 )",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #333E80" }}
          date="Data"
          iconStyle={{ background: "#333E80", color: "#fff" }}
          icon={<HiArchive />}
        >
          <h3 className="vertical-timeline-element-title">
            The "Fuel" of AI Machine
          </h3>
          <p>
            ·Tech giants who were pioneers in building massive data sets.
            <br />
            ·Without data, neural networks cannot learn.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right , #415D95,#333E80 )",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #333E80" }}
          date="Applications"
          iconStyle={{ background: "#333E80", color: "#fff" }}
          icon={<HiArchive />}
        >
          <h3 className="vertical-timeline-element-title">
            The "Destination" of AI Machine
          </h3>
          <p>
            ·Deals with CapEx <br />
            ·High Costs of Failure and Change
            <br />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div style={{ height: "10vh" }}></div>
    </div>
  );
}
