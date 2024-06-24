import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [alert,setAlert] = useState(null)

    const showMessage = (msg,type)=>{
        setAlert({
            msg : msg,
            type : type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleOnClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        showMessage("Changed to Uppercase !","success")
    }

    const handleLowerCase = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        showMessage("Changed To Lowercase !", "success")
    }

    const handleClearText = () => {
        let newText = ""
        let confirmation = window.confirm("Are you sure?")
        if (confirmation) {
            setText(newText)
            showMessage("Text Cleared !", "success")
        } else {
            showMessage("Permission denied to clear the text !", "danger")
        }

        
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            showMessage("Text Copied to Clipboard !", "success")
          }).catch(err => {
            console.error('Failed to copy text: ', err);
            showMessage("Failed to copy the text !", "danger")
          });
    }

    const handlePaste = () => {
        navigator.clipboard.readText().then( (text)=> {
            setText(text)
            showMessage("Successfully pasted the text !", "success")
        })
    }

    
    const handleSwitchChange = () => {
        setDarkMode(!darkMode)
    }
   

  return (
    <>
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'} `}>
        <div style={{height:'55px'}}>
        {alert && alert.msg && (
        <div className={`alert alert-${alert.type}`} role="alert">
            {alert.msg}
        </div>
        )}
        </div>
      
            
        <div className={`container my-15`}  >
        <h1 >{props.heading}</h1>
        <div className="form-check form-switch my-1" >
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleSwitchChange} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch To {darkMode ? 'Light' : 'Dark'} Mode</label>
        </div>
        <div className="mb-3 my-3">
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} btn-info my-3 mx-2`}   onClick={handleCopy} >Copy Text</button>
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} btn-info my-3 mx-2`}  onClick={handlePaste}>Paste Text</button>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} btn-primary my-3 mx-2`}  onClick={handleOnClick}>Change to UpperCase</button>
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} btn-primary my-3 mx-2`} onClick={handleLowerCase}>Change to LowerCase</button>
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} btn-primary my-3 mx-2`}  onClick={handleClearText}>Clear Text</button>
        
        </div>
    </div>
    <div className={`container my-2`} >
        <h3>Text Summary: </h3>
        <h6>{text.length>0 ? text.split(/\s+/).filter((ele)=>{return ele.length!=0}).length + ' words and ' + text.length + ' characters' : "Enter something in text box to see the summary"} </h6>
        <h6>{text.length>0 ? text.split(/\s+/).filter((ele)=>{return ele.length!=0}).length * 0.008 + ' minutes read': ""} </h6>

        <h3>Preview: </h3>
        <p>{text.length>0 ? text : "Nothing to preview!!"}</p>
        </div>

    </div>
    
</>
  )
}
