import React from "react";
import CounterNew from "./CounterNew";
import CounterOld from "./CounterOld";

export default function Home() {
  return (
    <>
      <div>Home</div>
      {/* <CounterNew name="New counter"/> */}
      <hr className="mt-10 ml-10" />
      <CounterOld name="Old counter"/>
    </>
  );
}
