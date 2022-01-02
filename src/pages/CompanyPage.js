import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "assets/jss/pages/companyPage.js";
import { Link } from "react-router-dom";
// @mui/material components
import { makeStyles } from "@material-ui/styles";
import Pagination from "@mui/material/Pagination";
import { tables } from "./CompanyPageData";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const [tab, setTab] = useState("PRADA");
  const [page, setPage] = React.useState(1);
  const [firstload, setfirstload] = useState("true");
  const tabs = [
    "PRADA",
    "Platform",
    "Researchers",
    "Algorithm",
    "Data",
    "Applications",
  ];

  // wait for loading the full page
  useEffect(() => {
    if (
      (window.location.hash.split("/")[1] === undefined ||
        window.location.hash.split("/")[1] === "") &&
      firstload === "true"
    ) {
      document.getElementById("PRADA").click();
      setfirstload("false");
    }
  }, []);

  // deal with the dataset, get current tab and corresponding table
  const numOfItems = (name = "PRADA") => {
    var contenttable = tables[name];
    return contenttable.length;
  };

  var pradalength = numOfItems("PRADAtable");
  var platformlength = numOfItems("Platformtable");
  var researcherslength = numOfItems("Researcherstable");
  var algorithmlength = numOfItems("Algorithmtable");
  var datalength = numOfItems("Datatable");
  var applicationslength = numOfItems("Applicationstable");

  const checkCurrentTableLength = () => {
    if (tab === "PRADA") {
      return pradalength;
    } else if (tab === "Platform") {
      return platformlength;
    } else if (tab === "Researchers") {
      return researcherslength;
    } else if (tab === "Algorithm") {
      return algorithmlength;
    } else if (tab === "Data") {
      return datalength;
    } else {
      return applicationslength;
    }
  };

  var currenttablelength = checkCurrentTableLength();

  const changeButtonColorFor = (name = "PRADA") => {
    document.getElementById(name).style.background = "#3B4F8C";
    document.getElementById(name).style.color = "#ffffff";

    for (var tab in tabs) {
      var currenttab = tabs[tab];
      if (currenttab !== name) {
        document.getElementById(currenttab).style.color = "#3B4F8C";
        document.getElementById(currenttab).style.background = "#E5E5E5";
      }
    }
  };

  useEffect(() => {
    var name = tab + "table";
    loadContentTableFor(name);
  });

  const changePage = (event, value) => {
    setPage(value);
  };

  const displayPageContent = (name = "PRADAtable") => {
    var alltable = tables[name];
    var startrow = 16 * (page - 1) + 1;
    var endrow = 16 * page;

    if (endrow >= alltable.length) {
      endrow = alltable.length;
    }
    return alltable.slice(startrow - 1, endrow);
  };

  const loadContentTableFor = (name = "PRADAtable") => {
    const toDetailPage = (companyname) => {
      console.log(companyname);
    };

    const editButton = (buttonid, button) => {
      button.onclick = () => toDetailPage(buttonid);
      return button;
    };

    var contenttable = displayPageContent(name);
    var tablefeatures = Object.keys(contenttable[0]);
    console.log(tablefeatures);
    var tablehead = document.getElementById("tablehead");
    tablehead.innerHTML = "";
    for (var feature in tablefeatures) {
      var th = document.createElement("th");
      var thbutton = document.createElement("button");
      th.setAttribute("class", "tableth");
      thbutton.innerHTML = tablefeatures[feature];
      thbutton.className = classNames(classes.thbutton);
      th.appendChild(thbutton);
      tablehead.appendChild(th);
    }

    var tablebody = document.getElementById("tablebody");
    tablebody.innerHTML = "";
    for (var item in contenttable) {
      var tbodytr = document.createElement("tr");
      var row = contenttable[item];
      for (feature in tablefeatures) {
        var column = tablefeatures[feature];
        var td = document.createElement("td");
        td.innerHTML = row[column];
        if (column === "Rank") {
          if (row[column] === 1 || row[column] === 2 || row[column] === 3) {
            td.className = classes.ranktop3;
          } else {
            td.className = classes.rankothers;
          }
        } else if (column === "Company") {
          td.innerHTML = "";
          var link = document.createElement("a");
          link.href = "detail/" + String(row[column]);
          link.className = classes.companylink;
          var companybutton = document.createElement("button");
          companybutton.className = classes.companybutton;
          companybutton.id = row[column];

          var newcompanybutton = editButton(row[column], companybutton);
          link.innerHTML = row[column];
          newcompanybutton.appendChild(link);

          td.appendChild(newcompanybutton);
          td.className = classes.companytd;
        }
        tbodytr.appendChild(td);
      }
      tablebody.appendChild(tbodytr);
    }
  };

  return (
    <div className={classNames(classes.wholepage)}>
      <ul className={classNames(classes.tableul)}>
        <li className={classNames(classes.tableli)}>
          <Link to={"/company/PRADA"}>
            <button
              id="PRADA"
              type="button"
              onClick={() => {
                setTab("PRADA");
                setPage(1);
                changeButtonColorFor("PRADA");
              }}
              className={classNames(classes.tablebutton)}
            >
              PRADA
            </button>
          </Link>
        </li>
        <li className={classNames(classes.tableli)}>
          <Link to={"/company/Platform"}>
            <button
              id="Platform"
              type="button"
              onClick={() => {
                setTab("Platform");
                setPage(1);
                changeButtonColorFor("Platform");
              }}
              className={classNames(classes.tablebutton)}
            >
              Platform
            </button>
          </Link>
        </li>
        <li className={classNames(classes.tableli)}>
          <Link to={"/company/Researchers"}>
            <button
              id="Researchers"
              type="button"
              onClick={() => {
                setTab("Researchers");
                setPage(1);
                changeButtonColorFor("Researchers");
              }}
              className={classNames(classes.tablebutton)}
            >
              Researchers
            </button>
          </Link>
        </li>
        <li className={classNames(classes.tableli)}>
          <Link to={"/company/Algorithm"}>
            <button
              id="Algorithm"
              type="button"
              onClick={() => {
                setTab("Algorithm");
                setPage(1);
                changeButtonColorFor("Algorithm");
              }}
              className={classNames(classes.tablebutton)}
            >
              Algorithm
            </button>
          </Link>
        </li>
        <li className={classNames(classes.tableli)}>
          <Link to={"/company/Data"}>
            <button
              id="Data"
              type="button"
              onClick={() => {
                setTab("Data");
                setPage(1);
                changeButtonColorFor("Data");
              }}
              className={classNames(classes.tablebutton)}
            >
              Data
            </button>
          </Link>
        </li>
        <li className={classNames(classes.tableli)}>
          <Link to={"/company/Applications"}>
            <button
              id="Applications"
              type="button"
              onClick={() => {
                setTab("Applications");
                setPage(1);
                changeButtonColorFor("Applications");
              }}
              className={classNames(classes.tablebutton)}
            >
              Applications
            </button>
          </Link>
        </li>
      </ul>
      <table className={classNames(classes.contenttable)}>
        <thead>
          <tr id="tablehead" className={classNames(classes.tableheadtr)}></tr>
        </thead>
        <tbody id="tablebody" className={classNames(classes.tablebody)}></tbody>
      </table>
      <div className={classNames(classes.page)}>
        <Pagination
          count={Math.ceil(currenttablelength / 16)}
          showFirstButton
          showLastButton
          onChange={changePage}
        />
      </div>
    </div>
  );
}
