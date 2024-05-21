import React from 'react'
import exampleproject1 from '../pagewriting/exampleproject1.json';


const projectpage = () => {
  return (
    <div>
        <h1>{exampleproject1.title}</h1>
        <p>{exampleproject1.main_body}</p>
    </div>
  )
}

export default projectpage;