import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handlemyBoxTextChange = (event) =>{
        console.log("Onchange");
        setText(event.target.value);
    };

const [text, setText] = useState("Enter your text here");



    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 mt-5">
                <textarea value={text} onChange={handlemyBoxTextChange} className="form-control mb-3" id="myBox" rows="8"></textarea>
                <button className='btn btn-primary' onClick={handleUpClick} >Convert To Uppercase</button>
            </div>
        </div>
    )
}
