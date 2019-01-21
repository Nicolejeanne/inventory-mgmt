import React from "react";

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
        style={{border:"#ADADAD", borderWidth:2, borderStyle:"solid", marginTop:25, paddingRight:0, paddingLeft:0}}
    >
      {children}
    </div>
  );
}
