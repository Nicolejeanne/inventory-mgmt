import React, { Component } from "react";
import "./style.css";


function SideNav() {
  return (
    <div className="sidenav">
    <div className="wholeUser">
      <i className="fas fa-user"/>
      <div className="user"><strong>Logged in: </strong>username</div>
      </div>
      <div className="sideNavBlock">
      <a href="#addParts"><i class="fas fa-plus fa-nav-icon"></i>Add Parts</a>
      <a href="#getParts"><i class="fas fa-hand-paper fa-nav-icon"></i>Get Parts</a>
      <a href="#boms"><i class="fas fa-table fa-nav-icon"></i>BOMs</a>
      <a href="#partsKits"><i class="fas fa-suitcase fa-nav-icon"></i>Parts Kits</a>
      <a href="#stockSearch"><i class="fas fa-search fa-nav-icon"></i>Stock Search</a>
      <a href="#transactions"><i class="fas fa-folder-open fa-nav-icon"></i>Transactions</a>
      
    </div>
    </div>
  );
}

export default SideNav;
