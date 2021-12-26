import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";

import { title } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles(() => ({
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
}));

export default function TestPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12}>
          <h2 className={classes.title}>{props.title}</h2>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            cursus erat, id hendrerit diam. Pellentesque viverra, leo auctor
            consequat bibendum, tellus eros auctor turpis, ut rhoncus neque
            metus vitae sem. Morbi consectetur finibus purus, sed ullamcorper
            arcu ullamcorper et. Sed facilisis ultrices erat. Aenean commodo
            ante sed risus faucibus suscipit nec eget dui. Vestibulum interdum
            enim efficitur nunc eleifend cursus. Sed enim diam, iaculis id massa
            quis, porttitor consequat lacus. Aliquam erat volutpat. In efficitur
            libero a ante pulvinar, vitae molestie est finibus. Fusce ut sem
            quis elit suscipit suscipit eu ut nunc. Phasellus tempor, erat eu
            molestie aliquet, est orci semper augue, id venenatis eros orci eget
            sapien. Mauris eget libero vitae libero interdum ultrices ac
            sagittis dui. Proin a orci vel metus pretium mattis et non purus.
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            cursus erat, id hendrerit diam. Pellentesque viverra, leo auctor
            consequat bibendum, tellus eros auctor turpis, ut rhoncus neque
            metus vitae sem. Morbi consectetur finibus purus, sed ullamcorper
            arcu ullamcorper et. Sed facilisis ultrices erat. Aenean commodo
            ante sed risus faucibus suscipit nec eget dui. Vestibulum interdum
            enim efficitur nunc eleifend cursus. Sed enim diam, iaculis id massa
            quis, porttitor consequat lacus. Aliquam erat volutpat. In efficitur
            libero a ante pulvinar, vitae molestie est finibus. Fusce ut sem
            quis elit suscipit suscipit eu ut nunc. Phasellus tempor, erat eu
            molestie aliquet, est orci semper augue, id venenatis eros orci eget
            sapien. Mauris eget libero vitae libero interdum ultrices ac
            sagittis dui. Proin a orci vel metus pretium mattis et non purus.
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            cursus erat, id hendrerit diam. Pellentesque viverra, leo auctor
            consequat bibendum, tellus eros auctor turpis, ut rhoncus neque
            metus vitae sem. Morbi consectetur finibus purus, sed ullamcorper
            arcu ullamcorper et. Sed facilisis ultrices erat. Aenean commodo
            ante sed risus faucibus suscipit nec eget dui. Vestibulum interdum
            enim efficitur nunc eleifend cursus. Sed enim diam, iaculis id massa
            quis, porttitor consequat lacus. Aliquam erat volutpat. In efficitur
            libero a ante pulvinar, vitae molestie est finibus. Fusce ut sem
            quis elit suscipit suscipit eu ut nunc. Phasellus tempor, erat eu
            molestie aliquet, est orci semper augue, id venenatis eros orci eget
            sapien. Mauris eget libero vitae libero interdum ultrices ac
            sagittis dui. Proin a orci vel metus pretium mattis et non purus.
          </h5>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}
