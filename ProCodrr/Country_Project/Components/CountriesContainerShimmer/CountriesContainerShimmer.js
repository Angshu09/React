import React from "react";
import "./CountriesContainerShimmer.css";

export default function CountriesContainerShimmer() {
  /* const arr = new Array(10)
    console.log(arr) //[Empty * 10]
    arr.fill(1)
    console.log(arr) //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    const arr2 =  Array.from({length: 10})
    console.log(arr2) //[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    arr2.fill(2)
    console.log(arr2) //[2, 2, 2, 2, 2, 2, 2, 2, 2, 2] */

  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}
  