import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: 15, backgroundColor:"#00c8f8", border:"#000000", color:"#000000", width: 200 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
