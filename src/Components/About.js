import React from 'react'

function About() {
  return (
    <div className={`container my-3 `}>
      <h1>Functionalities in TextUtils :</h1>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">UpperCase</h5>
          <p className="card-text">Changes the text into uppercase</p>
        </div>
      </div>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">LowerCase</h5>
          <p className="card-text">Changes the text into lowercase</p>
        </div>
      </div>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">Clear Text</h5>
          <p className="card-text">Clears the text</p>
        </div>
      </div>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">Copy Text</h5>
          <p className="card-text">Copies the text to clipboard</p>
        </div>
      </div>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">Paste Text</h5>
          <p className="card-text">Pastes the text from clipboard</p>
        </div>
      </div>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">Dark and Light Modes</h5>
          <p className="card-text">Toggle between dark and light modes</p>
        </div>
      </div>

      <div className="card w-75 my-3">
        <div className="card-body">
          <h5 className="card-title">Text Summary</h5>
          <p className="card-text">
            This tells about the number of words and characters , as well as the time to read the text.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
