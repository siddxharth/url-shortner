import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function RecentLink(props) {
  return (
    <div className="recent-link-wrapper">
      <div className='recent-link-container'>
        <span className='recent-link-long'>
          {props.original_link}
        </span>
        <span className='recent-link-right'>
          <span className='recent-link-short'>{props.short_link}</span>
          <CopyToClipboard text={props.short_link}
          onCopy={() => {alert('Link copied to clipboard!')}}>
          <button className='copy-btn'>Copy</button>
        </CopyToClipboard>
        </span>
      </div>
    </div>
  )
}