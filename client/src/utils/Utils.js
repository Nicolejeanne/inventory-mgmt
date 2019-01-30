import React from "react";
import API from "./API";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

const newParts = () => {
  return API.getParts()
}
  // const newPart = () => {
  // const statusChance = Math.random();
  //   return {
  //     firstName: namor.generate({ words: 1, numbers: 0 }),
  //     lastName: namor.generate({ words: 1, numbers: 0 }),
  //     age: Math.floor(Math.random() * 30),
  //     visits: Math.floor(Math.random() * 100),
  //     progress: Math.floor(Math.random() * 100),
  //     status:
  //       statusChance > 0.66
  //         ? "relationship"
  //         : statusChance > 0.33 ? "complicated" : "single"
  //   };
  // };
  
  export default function makeData(len = 50) {
    return range(len).map(d => {
      return {
        ...newParts(),
        children: range(10).map(newParts)
      };
    });
  }
