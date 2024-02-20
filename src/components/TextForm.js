import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const ConvertUP = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase","success")
  };
  const ConvertLo = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowercase","success")
  };
  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")
  };
  const OnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3 my-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            value={Text}
            onChange={OnChange}
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "white",
            }}
          ></textarea>
          <button className="my-3 btn btn-primary me-3" onClick={ConvertUP}>
            Change Text to UpperCase
          </button>
          <button className="btn btn-primary me-3" onClick={ConvertLo}>
            Change Tet to LowerCase
          </button>
          <button className="my-3 btn btn-primary" onClick={ClearText}>
            Clear Text
          </button>
        </div>
        <div className="container">
          <h3>Text Essentials</h3>
          <p>
            {Text.length} Characters and {Text.split(" ").filter((element)=>{return element.length!==0}).length} words{" "}
          </p>
        </div>
      </div>
    </>
  );
}
