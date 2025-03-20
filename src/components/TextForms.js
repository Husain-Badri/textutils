import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleLcClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handlemyBoxTextChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3 mt-5">
                    <textarea placeholder='Enter Text Here...' value={text} onChange={handlemyBoxTextChange} className="form-control mb-3" id="myBox" rows="8"></textarea>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert To Uppercase</button>
                    <button className='btn btn-info' onClick={handleLcClick} >Convert To Lowercase</button>
                </div>
            </div>
            <div className='container my-4'>
                <h1>Your Text Summary</h1>
                <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length * 0.008} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}