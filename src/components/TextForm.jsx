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
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success")
    }
    const handleClear = ()=>{
      let newText = ""
      setText(newText);
      props.showAlert("Cleared text", "success");
    }

    const handleOnChange = (e)=>{
        // console.log("On Change");
        setText(e.target.value);
    }

    const [text, setText] = useState("");
    // setText("New Text");
    const buttonClass = props.greenMode === "green" ? "btn-success" : "btn-primary";
  return (
    <>
    <div className="container"
        style={{color: props.greenMode === "green" ? "white" : props.mode === "dark" ? "white" : "#042743" }}>
        <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
      <textarea 
  className="form-control" 
  value={text} 
  onChange={handleOnChange} 
  style={{
    backgroundColor: props.greenMode === "green" ? "#A5D6A7" : props.mode === "dark" ? "#13466e" : "white", 
    color: props.greenMode === "green" ? "black" : props.mode === "dark" ? "white" : "#042743",
  }} 
  id="myBox" 
  rows="8">
</textarea>
      </div>
      <button disabled={text.length===0} className={`btn ${buttonClass} my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className={`btn ${buttonClass} mx-1 my-2`} onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className={`btn ${buttonClass} mx-1 my-2`} onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className={`btn ${buttonClass} mx-1 my-2`} onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-2"
        style={{ color: props.greenMode === "green" ? "white" : props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  );
}
