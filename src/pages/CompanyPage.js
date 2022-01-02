import React, {useEffect,useState} from "react";
import classNames from "classnames";
import styles from "assets/jss/pages/companyPage.js";
import { Link } from "react-router-dom";
// @mui/material components
import { makeStyles } from "@material-ui/styles";
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
    const classes = useStyles();
    const [tab, setTab] = useState("PRADA");
    const [page, setPage] = React.useState(1);
    const [firstload, setfirstload] = useState("true");
    const tabs = ["PRADA", "Platform", "Researchers", "Algorithm", "Data", "Applications"]

    // fake dataset
    const tables = {
        "PRADAtable":[
        { Rank: 1, Company: "veda", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 2, Company: "involved.ai", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 3, Company: "CCC", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 4, Company: "Circulo Health", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 5, Company: "Veritone", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 6, Company: "LogicMonitor", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 7, Company: "Nate", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 8, Company: "People.ai", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 9, Company: "Moveworks", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 10, Company: "Grammarly", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 }, 
        { Rank: 11, Company: "AlphaSense", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 12, Company: "Tempus", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 13, Company: "Ascent", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 14, Company: "Narrative Science Name", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 15, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 16, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 17, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 18, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 19, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 20, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 21, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 22, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 23, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 24, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 25, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 26, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 }, 
        { Rank: 27, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 28, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 29, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 30, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 31, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 32, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 33, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 34, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 35, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 36, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 37, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 38, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 39, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 40, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 41, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 42, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 }],

        "Platformtable":[
        { Rank: 1, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 2, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 }],

        "Researcherstable":[
        { Rank: 1, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 2, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 }],

        "Algorithmtable":[
        { Rank: 1, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 2, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 3, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 4, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 5, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 6, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 7, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 8, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 9, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 10, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 11, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 12, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 13, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 14, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 15, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 16, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 17, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 18, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 }],

        "Datatable":[
        { Rank: 1, Company: "Riskified", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 },
        { Rank: 2, Company: "Urbint", Platform: 4.9, Researchers: 7.9, Algorithm: 9.8, Data: 8.7, Applications: 9.4 }],

        "Applicationstable":[
        { Rank: 1, Company: "Nate", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 },
        { Rank: 2, Company: "Urbint", Publications: 4.9, Patents: 35, Number_of_articles: 183, Algorithm: 9.4 }],
    }

    // wait for loading the full page
    useEffect(() => {
        if ((window.location.hash.split('/')[1]==undefined||window.location.hash.split('/')[1]=="")&&(firstload=="true")) {
            var defaultbutton = document.getElementById("PRADA").click();
            setfirstload("false");
        }
    });

    // deal with the dataset, get current tab and corresponding table
    const numOfItems = (name="PRADA") => {
        var contenttable = tables[name]
        var tablelength = contenttable.length
        return tablelength
    }

    var pradalength = numOfItems("PRADAtable")
    var platformlength = numOfItems("Platformtable")
    var researcherslength = numOfItems("Researcherstable")
    var algorithmlength = numOfItems("Algorithmtable")
    var datalength = numOfItems("Datatable")
    var applicationslength = numOfItems("Applicationstable")

    const checkCurrentTableLength = () => {
        if (tab == "PRADA") {
            var currenttablelength = pradalength
        } else if (tab == "Platform") {
            var currenttablelength = platformlength
        } else if (tab == "Researchers") {
            var currenttablelength = researcherslength
        } else if (tab == "Algorithm") {
            var currenttablelength = algorithmlength
        } else if (tab == "Data") {
            var currenttablelength = datalength
        } else {
            var currenttablelength = applicationslength
        }
        return currenttablelength;
    }

    var currenttablelength = checkCurrentTableLength();
        
    const changeButtonColorFor = (name="PRADA") => {
        document.getElementById(name).style.background = "#3B4F8C";
        document.getElementById(name).style.color = "#ffffff";

        for (var tab in tabs)
        { 
            var currenttab = tabs[tab]
            if (currenttab != name)
            {
                document.getElementById(currenttab).style.color = "#3B4F8C";
                document.getElementById(currenttab).style.background = "#E5E5E5";
            }
        }
    }

    useEffect(() => {
        var name = tab + "table" 
        loadContentTableFor(name) 
    })

    const changePage = (event, value) => {      
        setPage(value)  
    }

    const displayPageContent = (name="PRADAtable") => {
        // var currentPage = page 
        // console.log(currentPage)
        console.log(page)
        var alltable = tables[name]
        var startrow = 16*(page-1)+1
        var endrow = 16*page 

        if (endrow >= alltable.length) {
            endrow = alltable.length
        }
        var contenttable = alltable.slice(startrow-1, endrow)
        return contenttable
    }

    const loadContentTableFor = (name="PRADAtable") => {
        const toDetailPage = (companyname) => {
            console.log(companyname)
        }

        const editButton = (buttonid, button) => {
            button.onclick = () => toDetailPage(buttonid)
            return button
        }

        var contenttable = displayPageContent(name)
        var tablefeatures = Object.keys(contenttable[0])
        console.log(tablefeatures)
        var tablehead = document.getElementById("tablehead")
        tablehead.innerHTML = ""
        for (var feature in tablefeatures) {
            var th = document.createElement("th")
            var thbutton = document.createElement("button")
            th.setAttribute("class", "tableth")
            thbutton.innerHTML = tablefeatures[feature]
            thbutton.className = classNames(classes.thbutton)
            th.appendChild(thbutton)
            tablehead.appendChild(th) 
        }
    
        var tablebody = document.getElementById("tablebody")
        tablebody.innerHTML = ""
        for (var item in contenttable) {
            var tbodytr = document.createElement("tr")
            var row = contenttable[item]
            for (var feature in tablefeatures) {
                var column = tablefeatures[feature]
                var td = document.createElement("td")
                td.innerHTML = row[column]
                if (column == "Rank") {
                    if (row[column] == 1 || row[column] == 2 || row[column] == 3) {
                        td.className = classes.ranktop3
                    } else {
                        td.className = classes.rankothers
                    }
                } else if (column == "Company") {
                    td.innerHTML = ""
                    var link = document.createElement("a")
                    link.href = "companydetailspage/" + String(row[column])
                    link.className = classes.companylink
                    var companybutton = document.createElement("button")
                    companybutton.className = classes.companybutton
                    companybutton.id = row[column]
                    
                    var newcompanybutton = editButton(row[column], companybutton)
                    link.innerHTML = row[column]
                    newcompanybutton.appendChild(link)

                    td.appendChild(newcompanybutton)
                    td.className = classes.companytd                                    
                }
                tbodytr.appendChild(td)
            }
            tablebody.appendChild(tbodytr)
        }
    }

    return (
        <div className={classNames(classes.wholepage)}>
            <ul className={classNames(classes.tableul)}>
                <li className={classNames(classes.tableli)}>
                    <Link to={"/company/PRADA"}>
                        <button   
                            id="PRADA"             
                            type="button"
                            onClick={()=>{setTab('PRADA');setPage(1);changeButtonColorFor("PRADA");}}
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
                            onClick={()=>{setTab('Platform');setPage(1);changeButtonColorFor("Platform");}}
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
                            onClick={()=>{setTab('Researchers');setPage(1);changeButtonColorFor("Researchers")}}
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
                            onClick={()=>{setTab('Algorithm');setPage(1);changeButtonColorFor("Algorithm");}}
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
                            onClick={()=>{setTab('Data');setPage(1);changeButtonColorFor("Data");}}
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
                            onClick={()=>{setTab('Applications');setPage(1);changeButtonColorFor("Applications");}}
                            className={classNames(classes.tablebutton)}
                        >
                            Applications
                        </button> 
                    </Link>
                </li>
            </ul>
            <table className={classNames(classes.contenttable)}>
                <thead>
                    <tr 
                        id="tablehead"
                        className={classNames(classes.tableheadtr)}>
                    </tr>
                </thead>
                <tbody 
                    id="tablebody"
                    className={classNames(classes.tablebody)}>
                </tbody>
            </table>
            <div className={classNames(classes.page)}>
                <Pagination 
                    count={Math.ceil(currenttablelength/16)} 
                    showFirstButton 
                    showLastButton 
                    onChange={changePage}/>
            </div>
        </div>
    );
}