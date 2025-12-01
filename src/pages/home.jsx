import React from 'react'
import '../App.css'
import myimg from '../assets/image.png'

const home = () => {
  return (
      <div className='flexr'>
      <div>
      <h1 className='ni'>Sourav P Bijoy</h1>
      <h2>Welcome to my <i>Portfolio</i></h2>
      <h3>Full Stack Developer | AI/ML Enthusiast</h3>
      <h4>Mail: <a href="mailto:Souravpbijoy@gmail.com">Souravpbijoy@gmail.com</a></h4>
    </div>
    <div>
      <img src={myimg} className="me" style={{ borderRadius: "75px" }} alt="My logo" />
    </div>
    </div>
  )
}

export default home