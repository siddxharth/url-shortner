import React from 'react'

export default function RecentLink(props) {
  return (
    <div className="recent-link-wrapper">
      <div className='recent-link-container'>
        <span className='recent-link-long'>
          {props.original_link}
        </span>
        <span className='recent-link-right'>
          <span className='recent-link-short'>{props.short_link}</span>
          <button className='copy-btn'>Copy</button>
        </span>
      </div>
    </div>
  )
}
