import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
    
  // });
  let myStyle = {
    color: props.greenMode === "black" ? "#A5D6A7" : props.mode === 'dark'?'white' : '#042743',
    backgroundColor: props.greenMode === "green" ? "#A5D6A7" : props.mode === 'dark'?'rgb(36, 74, 104)' : 'white',
    // border: "1px solid",
    // borderColor:  props.mode === 'dark'?'white' : '#042743',
  }
  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.greenMode === "green" ? "white" : props.mode === 'dark'?'white' : '#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Easily examine and process your text with our powerful tools. Whether you need to check word count, adjust formatting, or analyze structure, our platform helps you refine your content effortlessly.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Word Utility offers all its features at no cost! Modify, format, and enhance your text without any restrictions. No hidden fees—just a seamless editing experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Access Word Utility from any device or browser. Whether you're using Chrome, Firefox, Edge, or Safari, our platform is fully optimized to work smoothly without installation or downloads.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
