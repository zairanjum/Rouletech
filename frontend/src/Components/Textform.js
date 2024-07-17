import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpperCaseClick = () => {
        setText(text.toUpperCase())
    }

    const handleLowerCaseClick = () => {
        setText(text.toLowerCase())
    }

    const handleClearBox = () => {
        setText('')
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

  return (
    <div className="container my-4 " >
    <div className="mb-5" style={ {fontSize:'10px', fontWeight: 'bold', fontFamily:'sans-serif'}} >
    <h3>{props.heading}</h3>
    <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="5"></textarea>
    </div>
    <button className="btn btn-secondary mx-2"  onClick={handleClearBox}>Convert to Clearbox</button>
    <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2"  onClick={handleLowerCaseClick}>Convert to LowerCase</button>
    
    </div>
  )
}
