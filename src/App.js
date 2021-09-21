import React, { useState } from "react";
import "./styles.css";
var color = "#3B82F6";
var count = 0;
var temp;

export default function App() {
  var emojiDictionary = {
    "😅": "embarassed",
    "😂": "laughing",
    "😋 ": "yummy",
    "😡": "angry",
    "😢": "sad",
    "😩": "tired",
    "😎": "cool",
    "": "",
    "": ""
  };

  // To convert the Dictionary to a list
  var emojisWeKnow = Object.keys(emojiDictionary);
  console.log(emojisWeKnow);
  const shoppingList = ["milk.", "eggs", "chicken", "Maggi"];
  var [userInput, setUserInput] = useState("");
  const [likeCounter, setLikeCounter] = useState(0);
  const [meaning, setMMeaning] = useState("");

  // function ClickHandler() {
  //   var newLikeCounter = likeCounter + 1;
  //   setLikeCounter(newLikeCounter);
  // }
  function inputHandler(event) {
    setUserInput(event.target.value);
  }
  function getBg(index) {
    if (index % 2 == 0) {
      return "white";
    }
    return "grey";
  }
  function emojiInputHandler(eveny) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We do not have that in our database🥺";
    }
    setMMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>emoji interpreter</h1>
      {/* <button onClick={ClickHandler}>Counter</button>
      <h2>{likeCounter}</h2> */}
      <input onChange={emojiInputHandler}></input>
      {/* <div>{userInput}</div> */}
      <h2>
        {emojiDictionary[event]}
        {meaning}
      </h2>
      <h3>Emojis we Know :</h3>
      <ul>
        {emojisWeKnow.map(function (item, index) {
          return (
            <li
              style={{
                fontSize: "2rem",
                backgroundColor: getBg(index),
                padding: "0.5rem",
                cursor: "pointer"
              }}
              key={item}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </li>
          );
          // <li style = {{backgroundColor : getBg(index),padding:'1rem',cursor:"pointer"}}>{item}</li>
        })}
      </ul>
      {/* <textarea id="txtInput" placeholder = "Enter Emoji"></textarea> */}
    </div>
  );
}
