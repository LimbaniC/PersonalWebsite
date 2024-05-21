import React from 'react'
import pfp from '../assets/pfp.png';
import { Link } from 'react-router-dom';

const card = ({image, title, description, link}) => {
  return (
    <div className="card">
        <Link to={link}>
          <img className="card-image" alt="profile picture" src ={image}></img>
        </Link>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>

  )
}

export default card