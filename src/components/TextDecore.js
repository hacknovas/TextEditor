import React, { useState } from 'react';

export default function TextDecore(props) {

    const [text, setText] = useState("Enter Your Text Here");

    const upClick = (e) => {
        let newtext = e.target.value;
        setText(newtext);

    }
    const convertUpCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext); 
        props.showAlert("Changed","success");
    }

    const convertLoCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const clearText = () => {
        let newtext = text.toLowerCase();
        setText("");
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><b><h1>Enter Your Text</h1></b></label>
                <textarea className="form-control" value={text} onChange={upClick} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn-primary mx-2" onClick={convertUpCase}>Upper Case</button>
            <button className="btn-primary mx-2" onClick={convertLoCase}>Lower Case</button>
            <button className="btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </>
    );
}
