import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase" , "success")
    }

    const handleCopy = ()=>{
        // console.log("LowerCase was clicked" + text);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }

    const handleOnChange = (e)=>{
        // console.log("On Change");
        setText(e.target.value);
    }

    const [text, setText] = useState("");
    // setText("New Text");
  return (
    <>
    <div className="container"
        style={{color: props.greenMode === "green" ? "white" : props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea 
  className="form-control" 
  value={text} 
  onChange={handleOnChange} 
  style={{
    backgroundColor: props.greenMode === "green" ? "#A5D6A7" : props.mode === "dark" ? "grey" : "white", 
    color: props.greenMode === "green" ? "#004d40" : props.mode === "dark" ? "white" : "#042743",
  }} 
  id="myBox" 
  rows="8">
</textarea>

      </div>
      <button className="btn btn-primary " onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2"
        style={{ color: props.greenMode === "green" ? "white" : props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}
