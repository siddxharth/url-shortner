import React, {useState} from 'react'

const validateSubmit = (text) => {
  if(text === ''){
    alert("URL cannot be empty!")
  }
  if(text.includes(".")){
    alert("Wow! This is actually some kind of a URL!")
  }
}

export default function UrlInput() {
  const [text, setText] = useState('');
  return (
  <div>
    <div className='url-input-container'>
      <input className="url-input" type="text" id="url-input" placeholder="Shorten URL" onChange={(e)=>{setText(e.target.value)}}/>
      <button className="submit-btn" type="submit" onClick={() => validateSubmit(text)}>Go!</button>
    </div>
  </div>
  )
}