import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ReportBugBtn(props) {
  return (
    <span className="btn btn-secondary reportbug-btn" {...props} role="button" tabIndex="0">
      Report a bug
    </span>
  );
}

export default ReportBugBtn;
