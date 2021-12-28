import React, { useState, useMemo } from "react";
import classNames from "classnames";
import styles from "assets/jss/pages/companyPage.js";
// @mui/material components
import { makeStyles } from "@material-ui/styles";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const useStyles = makeStyles(styles);
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      console.log(sortableItems);
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = key => {
        let direction = "ascending";
        if (
          sortConfig &&
          sortConfig.key === key &&
          sortConfig.direction === "ascending"
        ) {
          direction = "descending";
        }
        setSortConfig({ key, direction });
    };
    
    return { items: sortedItems, requestSort, sortConfig };
};

function ProductTable(props) {
    const classes = useStyles();
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = name => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const changeButtonColorFor = name => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? classes.activetablebutton : classes.tablebutton;
    };

    return (
        <div className={classNames(classes.main)}>
            <ul className={classNames(classes.tableul)}>
                <li className={classNames(classes.tableli)}>
                <button                
                    type="button"
                    onClick={() => {requestSort("companyName")}}
                    className={classNames(classes.tablebutton, getClassNamesFor("companyName"), changeButtonColorFor("companyName"))}
                >
                    PRADA
                </button>
                </li>
                <li className={classNames(classes.tableli)}>
                <button
                    type="button"
                    onClick={() => requestSort("platform")}
                    className={classNames(classes.tablebutton, getClassNamesFor("platform"),changeButtonColorFor("platform"))}
                >
                    Platform
                </button>
                </li>
                <li className={classNames(classes.tableli)}>
                <button
                    type="button"
                    onClick={() => requestSort("researchers")}
                    className={classNames(classes.tablebutton, getClassNamesFor("researchers"),changeButtonColorFor("researchers"))}
                >
                    Researchers
                </button>
                </li>
                <li className={classNames(classes.tableli)}>
                <button
                    type="button"
                    onClick={() => requestSort("algorithm")}
                    className={classNames(classes.tablebutton, getClassNamesFor("algorithm"),changeButtonColorFor("algorithm"))}
                >
                    Algorithm
                </button>
                </li>
                <li className={classNames(classes.tableli)}>
                <button
                    type="button"
                    onClick={() => requestSort("data")}
                    className={classNames(classes.tablebutton, getClassNamesFor("data"),changeButtonColorFor("data"))}
                >
                    Data
                </button>
                </li>
                <li className={classNames(classes.tableli)}>
                <button
                    type="button"
                    onClick={() => requestSort("applications")}
                    className={classNames(classes.tablebutton, getClassNamesFor("applications"),changeButtonColorFor("applications"))}
                >
                    Applications
                </button>
                </li>
            </ul>
            <div className={classNames(classes.tablecontainer)}>
            <table className={classNames(classes.sorttable)}>
                <thead>
                    <tr>
                        <th className={classNames(classes.tableth)}>
                            Rank
                        </th>
                        <th className={classNames(classes.tableth)}>
                            Company
                        </th>
                        <th className={classNames(classes.tableth)}>
                            Platform
                        </th>
                        <th className={classNames(classes.tableth)}>
                            Researchers
                        </th>
                        <th className={classNames(classes.tableth)}>
                            Algorithm
                        </th>
                        <th className={classNames(classes.tableth)}>
                            Data
                        </th>
                        <th className={classNames(classes.tableth)}>
                            Applications
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(product => (
                    <tr key={product.id}>
                        <td className={classNames(classes.tabletd)}>{product.rank}</td>
                        <td className={classNames(classes.tabletd)}>{product.companyName}</td>
                        <td className={classNames(classes.tabletd)}>{product.platform}</td>
                        <td className={classNames(classes.tabletd)}>{product.researchers}</td>
                        <td className={classNames(classes.tabletd)}>{product.algorithm}</td>
                        <td className={classNames(classes.tabletd)}>{product.data}</td>
                        <td className={classNames(classes.tabletd)}>{product.applications}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
  );
}

export default function CompanyPage(props) {
    return(
        <div className="app">
            <ProductTable
                products={[
                    { id: 1, rank: 1, companyName: "A", platform: "8", researchers: 20, algorithm: 12, data: 100, applications: 20 },
                    { id: 2, rank: 12, companyName: "C", platform: "4.9", researchers: 32, algorithm: 15, data: 101, applications: 20 },
                    {
                        id: 3,
                        rank: 13,
                        companyName: "veda",
                        platform: "6988.00",
                        researchers: 12,
                        algorithm: 19,
                        data: 102,
                        applications: 22
                    },
                    {
                        id: 4,
                        rank: 2,
                        companyName: "involve.ai",
                        platform: "3199.00",
                        researchers: 9,
                        algorithm: 18,
                        data: 103,
                        applications: 20
                    },
                    {
                        id: 5,
                        rank: 6,
                        companyName: "Urbint",
                        platform: "7199.00",
                        researchers: 99,
                        algorithm: 100,
                        data: 104,
                        applications: 26
                    },
                    {
                        id: 6,
                        rank: 18,
                        companyName: "Circulo Health",
                        platform: "5969.00",
                        researchers: 86,
                        algorithm: 36,
                        data: 105,
                        applications: 27
                    },
                    {
                        id: 7,
                        rank: 10,
                        companyName: "CCC",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 8,
                        rank: 1,
                        companyName: "Veritone",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 9,
                        rank: 1,
                        companyName: "LogicMonitor",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 10,
                        rank: 16,
                        companyName: "Nate",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 11,
                        rank: 6,
                        companyName: "People.ai",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 12,
                        rank: 1,
                        companyName: "Riskified",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 13,
                        rank: 1,
                        companyName: "CCC",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 14,
                        rank: 1,
                        companyName: "CCC",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 15,
                        rank: 1,
                        companyName: "CCC",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    },
                    {
                        id: 16,
                        rank: 1,
                        companyName: "CCC",
                        platform: "5399.00",
                        researchers: 12,
                        algorithm: 42,
                        data: 106,
                        applications: 28
                    }]
                    }
            />
        </div>        
    );
}