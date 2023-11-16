import React from 'react'
import './Sugesstions.css';
import { Avatar } from '@mui/material';

function Sugesstions() {
  return (
    <div className='suggestions'>
      <div className='sugesstions__usernames'>
      <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">hello world</span>
            </div>
          </div>
          <button className="follow__button">Switch</button>
        </div>
      </div>
    </div>
  )
}

export default Sugesstions