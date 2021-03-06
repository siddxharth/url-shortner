import React, { useEffect, useState } from 'react';
import RecentLink from './RecentLink';
export default function ShortenLink() {

  const [data, setData] = useState('');
  const [text, setText] = useState('');
  var local_items = localStorage.getItem('urls');
  // const [clearLocal, setClearLocal] = useState(false);
  const [prevURLs, setPrevURLs] = useState(local_items ? JSON.parse(local_items) : []);
  async function FetchURL(text) {
    if (text === '') {
      setError("URL cannot be empty!");
      return;
    } else if (!(text.includes('.'))) {
      setError('Please enter a valid URL');
      return;
    } else if (text.includes('instagram')) {
      setError('Blacklisted URL. Cannot shorten this one.')
      return;
    }
    var fetched_url = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`).then(
      response => response.json()
    );
    await fetched_url;
    return { fetched_url };
  }

  async function handleSetData(text) {
    const temp_data = await FetchURL(text);
    setData(temp_data);
  }

  const [newList, setNewList] = useState([])
  useEffect(() => {
    function updateRecents() {
      var temp_links = prevURLs;
      const code = data?.fetched_url?.result.code;
      const short_link = data?.fetched_url?.result.short_link;
      const original_link = data?.fetched_url?.result.original_link;
      if (code !== undefined) {
        temp_links.push({ code, short_link, original_link });
      }
      temp_links = [...new Set(temp_links)];
      localStorage.setItem('urls', JSON.stringify(temp_links));
      setNewList(temp_links);
      setPrevURLs(temp_links);
    }
    updateRecents();
  }, [data]);

  const [error, setError] = useState('');
  return (
    <div>
      <div className='url-input-container'>
        <input className="url-input" type="text" id="url-input" placeholder="Shorten URL" onChange={(e) => { setText(e.target.value); }} />
        <button className="submit-btn" type="submit" onClick={() => { setError(''); handleSetData(text); }}>Go!</button>
      </div>
      <div className='error-wrapper'>
        <div className={`${error === '' ? 'error-msg-hidden' : 'error-msg'}`}>
          {error}
          <div className='close-btn' onClick={() => { setError('') }}>X</div>
        </div>
      </div>
      <div className="history-wrapper">
        <div className='history-container'>
          <div>History</div><button className='clear-btn' onClick={() => { setNewList([]); setPrevURLs([]); localStorage.clear(); }}>Clear History</button>
        </div>
      </div>
      <div>
        {newList.length === 0 ? <div className='empty-url-list'>{"Your shortened URLs will appear here"}</div> : newList.map((url) => (
          <div>
            <RecentLink key={url.code} original_link={url.original_link} short_link={url.short_link} />
          </div>
        )).reverse()}
      </div>
    </div>
  )
}