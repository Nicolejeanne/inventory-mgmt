import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{marginBottom:7}}>
      <input className="form-control" style={{width: 225}} {...props} />
    </div>
  );
}
