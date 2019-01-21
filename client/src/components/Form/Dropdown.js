import React from "react";

export function Dropdown(props) {
  return (
    <div className="dropdown" >
    <button className="btn btn-secondary dropdown-toggle" style={{backgroundColor:"#ffffff", color:"#000000", width:225, textAlign:"left"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {props.placeholder}
  </button>
  <a class="dropdown-item" href="#" {...props} />
    </div>
  );
}