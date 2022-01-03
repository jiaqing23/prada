import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles(() => ({
  listContainer: {
    justifyContent: "space-between",
    marginTop: "10px",
    alignItems: "center",
    "& h6": {
      fontWeight: 600,
      color: "#027AFF",
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      width: "20vw",
      padding: 0,
      borderBottom: "2px solid lightgrey",
    },
  },
  filterTitle: {
    padding: "10px 20px",
    paddingTop: "20px",
    "& h5": {
      fontWeight: 600,
      fontSize: "18px",
      color: "#0a1b50",
    },
    "& h4": {
      fontWeight: 500,
      fontSize: "15px",
    },
  },
}));

const Algorithm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;

  const [publicationPagination, setPublicationPagination] = useState(1);
  const [patentsPagination, setPatentsPagination] = useState(1);
  return (
    <div>
      <div className="productInfoContainer">
        <div className="productInfo" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                backgroundColor: "#F8F9FA",
                width: "80%",
                height: "80%",
                margin: "5%",
              }}
            >
              <div className={classes.filterTitle}>
                <h5>Number_of_articles</h5>
                <h4>35</h4>
              </div>
              <div className={classes.filterTitle}>
                <h5>FILTER BY</h5>
                <h5>Publications</h5>
                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gilad}
                          onChange={handleChange}
                          name="gilad"
                        />
                      }
                      label="Engineering"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
                          onChange={handleChange}
                          name="jason"
                        />
                      }
                      label="Computer System"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={handleChange}
                          name="antoine"
                        />
                      }
                      label="Security"
                    />
                  </FormGroup>
                </FormControl>
                <div style={{ height: "2vh" }} />
                <h5>Patents</h5>
                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gilad}
                          onChange={handleChange}
                          name="gilad"
                        />
                      }
                      label="Systems"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
                          onChange={handleChange}
                          name="jason"
                        />
                      }
                      label="Networking"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={handleChange}
                          name="antoine"
                        />
                      }
                      label="Computer"
                    />
                  </FormGroup>
                </FormControl>
              </div>
              <Button sx={{ m: 2 }} variant="contained">
                Clear All
              </Button>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className="productInfoHeader">
              <h5>Publication</h5>
            </div>
            <div className="productInfoBody">
              <div className={classes.listContainer}>
                <h6>
                  A Hadoop Based Distributed Loading Approach to Parallel Data
                  Warehouses
                </h6>
                <p>
                  · Publication date: Jun 12, 2011
                  <br />· Publication description: SIGMOD
                </p>
              </div>
              <div className={classes.listContainer}>
                <h6>
                  A new algorithm for small-large table outer joins in parallel
                  DBMS
                </h6>
                <p>
                  · Publication date: Jun 12, 2011
                  <br />· Publication description: SIGMOD
                </p>
              </div>
              <div className={classes.listContainer}>
                <h6>
                  Distributed Loading Approach to Parallel Data Warehouses
                </h6>
                <p>
                  · Publication date: Jun 2010 <br />· Publication description:
                  SIGMOD, Proceedings of the 2010 international conference on
                  Management of data
                </p>
              </div>
              <div className={classes.listContainer}>
                <h6>Approach to Parallel Data Warehouses</h6>
                <p>
                  · Publication date: Jun 12, 2011
                  <br /> · Publication description: SIGMOD
                </p>
              </div>
              <div className={classes.pagination}>
                <div>
                  <p
                    className={`number ${
                      publicationPagination === 1 ? "numberSelected" : ""
                    }`}
                    onClick={() => setPublicationPagination(1)}
                  >
                    1
                  </p>
                  <p
                    className={`number ${
                      publicationPagination === 2 ? "numberSelected" : ""
                    }`}
                    onClick={() => setPublicationPagination(2)}
                  >
                    2
                  </p>
                  <p
                    className={`number ${
                      publicationPagination === 3 ? "numberSelected" : ""
                    }`}
                    onClick={() => setPublicationPagination(3)}
                  >
                    3
                  </p>
                </div>
              </div>
            </div>
            <div className="productInfoHeader" style={{ marginTop: "5vh" }}>
              <h5>Patents</h5>
            </div>
            <div className="productInfoBody">
              <div className={classes.listContainer}>
                <h6>Approach to Parallel Data Warehouses</h6>
                <p>
                  · Publication date: Jun 12, 2011
                  <br /> · Publication description: SIGMOD
                </p>
              </div>
              <div className={classes.pagination}>
                <div>
                  <p
                    className={`number ${
                      patentsPagination === 1 ? "numberSelected" : ""
                    }`}
                    onClick={() => setPatentsPagination(1)}
                  >
                    1
                  </p>
                  <p
                    className={`number ${
                      patentsPagination === 2 ? "numberSelected" : ""
                    }`}
                    onClick={() => setPatentsPagination(2)}
                  >
                    2
                  </p>
                  <p
                    className={`number ${
                      patentsPagination === 3 ? "numberSelected" : ""
                    }`}
                    onClick={() => setPatentsPagination(3)}
                  >
                    3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
