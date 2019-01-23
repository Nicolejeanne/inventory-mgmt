import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{marginBottom:7}}>
      <input className="form-control" style={{width: 500, textAlign:"center"}} {...props} />
    </div>
  );
}
