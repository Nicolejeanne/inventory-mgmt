import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LogoutBtn(props) {
  return (
    <span className="btn btn-secondary logout-btn" {...props} role="button" tabIndex="0">
      Log out
    </span>
  );
}

export default LogoutBtn;
