import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  title: {
    zIndex: 10,
    width: "100vw",
  },
  partnerLogo: {
    height: "auto",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
}));

export default function PartnerBar(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        <h1
          style={{
            position: "relative",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "max(50px,8vw)",
              color: "#D8D8D8",
              opacity: "10%",
            }}
          >
            OUR PARTNERS
          </div>
          <h1
            style={{
              fontSize: "max(30px,2vw)",
              position: "absolute",
              bottom: "1vw",
              color: "white",
              width: "100%",
            }}
          >
            Partners
          </h1>
        </h1>
      </div>
      <div style={{ height: "3vw" }}></div>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={4} xs={6}>
          <img
            className={classes.partnerLogo}
            alt={"Missing Logo"}
            src={require("../assets/img/ntu-logo.png").default}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <img
            className={classes.partnerLogo}
            alt={"Missing Logo"}
            src={require("../assets/img/ntu-logo.png").default}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <img
            className={classes.partnerLogo}
            alt={"Missing Logo"}
            src={require("../assets/img/ntu-logo.png").default}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <img
            className={classes.partnerLogo}
            alt={"Missing Logo"}
            src={require("../assets/img/ntu-logo.png").default}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <img
            className={classes.partnerLogo}
            alt={"Missing Logo"}
            src={require("../assets/img/ntu-logo.png").default}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <img
            className={classes.partnerLogo}
            alt={"Missing Logo"}
            src={require("../assets/img/ntu-logo.png").default}
          />
        </Grid>
      </Grid>
      <div style={{ height: "5vw" }}></div>
    </div>
  );
}
