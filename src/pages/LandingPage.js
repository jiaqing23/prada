import styles from "assets/jss/pages/landingPage.js";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(styles);
export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>{props.child}</div>
      </div>
    </div>
  );
}
