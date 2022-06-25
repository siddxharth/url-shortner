import React, { useState } from 'react';

export default function ShortenLink() {
  var data = '';
  async function FetchURL(text) {
    if (text === '') {
      alert("URL cannot be empty!");
      return;
    } else if (!(text.includes('.'))){
      alert('Please enter a valid URL');
      return;
    }
    data = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`).then(
      response => response.json()
    );
    JSON.stringify(data);
    localStorage.setItem('url', data.result.short_link);
    console.log(data.result.short_link);
    return { data };
  }
  const [text, setText] = useState('');
  return (
    <div>
      <div className='url-input-container'>
        <input className="url-input" type="text" id="url-input" placeholder="Shorten URL" onChange={(e) => { setText(e.target.value) }} />
        <button className="submit-btn" type="submit" onClick={() => FetchURL(text)}>Go!</button>
      </div>
    </div>
  )
}