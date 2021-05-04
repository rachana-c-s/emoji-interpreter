import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": " smiling",
  "😨": "fearful",
  "😔": "sad",
  "❤️": "heart",
  "☀️": "sun",
  "🔥": "fire"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    // console.log(meaning);
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtt!</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3> emojis we know </h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
