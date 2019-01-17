import React from "react";
import "./style.css";
import LogoutBtn from "../LogoutBtn/index";
import ReportBugBtn from "../ReportBugBtn/index";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <i className="fas fa-warehouse" />EAD Inventory Management System
      </a>
      <ReportBugBtn/>
      <LogoutBtn />
    </nav>
  );
}

export default Nav;
