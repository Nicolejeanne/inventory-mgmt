import React from "react";
import "./tableStyle.css";

export function Table(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="tableHeader" />
            <th scope="col" className="tableHeader">
              Part Number
            </th>
            <th scope="col" className="tableHeader">
              Part Type
            </th>
            <th scope="col" className="tableHeader">
              Description
            </th>
            <th scope="col" className="tableHeader">
              Manufacturer
            </th>
            <th scope="col" className="tableHeader">
              Quantity
            </th>
            <th scope="col" className="tableHeader">
              Conforming?
            </th>
            <th scope="col" className="tableHeader">
              Cabinet
            </th>
            <th scope="col" className="tableHeader">
              Delete
            </th>
          </tr>
        </thead>
        <tbody />
      </table>
      <div className="noParts" />
    </div>
  );
}
