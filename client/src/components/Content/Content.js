import React from "react";
import "./style.css";
import { NavLink, Route } from "react-router-dom";
import Add from "../../pages/AddParts/index";
import Get from "../../pages/GetParts/index";
import BOMs from "../../pages/BOMs/index";
import Kits from "../../pages/PartsKits/index";
import Search from "../../pages/StockSearch/index";
import Transactions from "../../pages/Transactions/index";


class Content extends React.Component {
  render() {
    return (
      <div className="content">
      <Route exact path="/add" component={Add} />
      <Route exact path="/get" component={Get} />
      <Route exact path="/bom" component={BOMs} />
      <Route exact path="/kits" component={Kits} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/transactions" component={Transactions} />
      </div>
    );
  }
  }
  

export default Content;
