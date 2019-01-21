import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

class SideNav extends React.Component {
  render() {
    return (
      <div className="sidenav">
      <div className="wholeUser">
        <i className="fas fa-user"/>
        <div className="user"><strong>Logged in: </strong>username</div>
        </div>
        <div className="sideNavBlock">
        <NavLink exact to="/add"><i className="fas fa-plus fa-nav-icon"/>
						Add Parts
					</NavLink>
          <NavLink exact to="/get"><i className="fas fa-hand-paper fa-nav-icon"/>
						Get Parts
					</NavLink>
          <NavLink exact to="/bom"><i className="fas fa-table fa-nav-icon"/>
						BOMs
					</NavLink>
          <NavLink exact to="/kits"><i className="fas fa-suitcase fa-nav-icon"/>
						Parts Kits
					</NavLink>
          <NavLink exact to="/search"><i className="fas fa-search fa-nav-icon"/>
						Stock Search
					</NavLink>
          <NavLink exact to="/transactions"><i className="fas fa-folder-open fa-nav-icon"/>
						Transactions
					</NavLink>
      </div>
      </div>
    );
  }
  }
  

export default SideNav;
