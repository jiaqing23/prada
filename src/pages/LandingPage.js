import Parallax from "components/Parallax.js";
import styles from "assets/jss/pages/landingPage.js";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(styles);
export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <Parallax
        filter
        image={require("../assets/img/landing-bg.jpg").default}
      ></Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>{props.child}</div>
      </div>
    </div>
  );
}
