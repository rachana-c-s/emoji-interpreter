import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setlikeCounter] = useState(0);

  function likeClickHandler() {
    var newlikeCounterValue = likeCounter + 1;
    setlikeCounter(newlikeCounterValue);
    // console.log("clicked!", likecounter);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <button onClick={likeClickHandler}> Like !</button>
      {likeCounter}
    </div>
  );
}
