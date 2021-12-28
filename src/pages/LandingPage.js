import Parallax from "components/Parallax.js";
import styles from "assets/jss/pages/landingPage.js";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(styles);
export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <img 
      className={"background"} 
      src={require('../assets/img/bg.png').default} 
      style={{width: "100%"}}
      alt=""/>

      <div className={classNames(classes.main)}>
        <div className={classes.container}>{props.child}</div>
      </div>
    </div>
  );
}
