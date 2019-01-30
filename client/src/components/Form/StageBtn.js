import React from "react";

export function StageBtn(props) {
  return (
    <button {...props} style={{ float: "right", margin: 10, backgroundColor:"#00c8f8", border:"#000000", color:"#000000", width: 200 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
