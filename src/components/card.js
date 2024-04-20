import React from 'react'
import pfp from '../assets/pfp.png';

const card = () => {
  return (
    <div className="card">
        <img className="card-image" alt="profile picture" src ={pfp}></img>
        <h2>Limbani</h2>
        <p>My name is Limbani. I am a Computer Science student at UMass</p>
    </div>
  )
}

export default card