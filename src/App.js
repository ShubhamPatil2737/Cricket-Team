import React from "react";
import "./styles.css";
import { useState } from "react";

const categories = {
  Batsmen: [
    { name: " Virat kholi", rating: "5/5", position: "1D" },
    { name: "Rohit Sharma", rating: "4.9/5", position: "Opener" },
    { name: "David Warner", rating: "4.5/5", position: "Opener" }
  ],

  MiddelOrder: [
    { name: "SuryaKumar Yadav", rating: "5/5", position: "2D" },
    { name: "Ab devilliers", rating: "5/5", position: "3D" },
    { name: "Hardik Pandya", rating: "4.8/5", position: "4D" }
  ],
  Bowlers: [
    { name: "Rashid Khan", rating: "5/5", position: "7D" },
    { name: "Jasprit Bumrha", rating: "4.8/5", position: "8D" },
    { name: "Mitchel Stark", rating: "4.5/5", position: "9D" },
    { name: "R Ashwim", rating: "4.5/5", position: "6D" }
  ],

  WicketKeeper: [{ name: "Jos Buttler", rating: "4.8/5", position: "5D" }]
};

export default function App() {
  const [activeCategory, setActive] = useState("Batsmen");
  function categoryClickHandler(category) {
    setActive(category);
  }
  return (
    <div className="App">
      <h1>My Cricket Rating</h1>
      <p>This is my All Time XI</p>
      <div>
        {Object.keys(categories).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#F87171",
              borderRadius: "0.25rem",
              padding: "0.5rem  1rem",
              border: "1px solid #F87171",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {categories[activeCategory].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #F87171",
                width: "50%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <p style={{ fontSize: "larger", display: "inline" }}>
                {" "}
                {item.name} ({item.position}){" "}
              </p>
              <p style={{ fontSize: "smaller" }}> {item.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
