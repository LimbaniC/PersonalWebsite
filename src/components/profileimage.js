import React from 'react';
import pfp from '../assets/pfp.png';
import './pfpstyle.css';

function profileimage() {
    function tapImage() {
        window.location.href = 'https://github.com/LimbaniC';
      }
    

  return (
    <div >
        <button onClick={tapImage}></button>
        <a href="https://github.com/LimbaniC">
        <img className="pfpstyling" src={pfp} alt="Profile" />
        </a> 
    </div>
  );
}

export default profileimage;
