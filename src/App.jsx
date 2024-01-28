import { useState } from 'react'
import  './style.css'
import MyPic from './assets/pic.jpg'
function App() {
 
  const githubVisit = () => {
    window.open('https://github.com/jeovDev','_blank')
  }
  const fmVisit = () => {
    window.open('https://www.frontendmentor.io/profile/jeovDev','_blank')
  }
  const lnkVisit = () => {
    window.open('https://www.linkedin.com/in/jeovannelugo/','_blank')
  }
  const ytVisit = () => {
    window.open('https://www.youtube.com/@coding_ideas','_blank')
  }
  const igVisit = () => {
    window.open('https://www.instagram.com/__jeov__/','_blank')
  }
  return (
  <div className='body'>
     <div className="content-container">
      <div className="image">
        <img src={MyPic} alt="" />
      </div>
      <div className='about'>
           <div className='name'>Jeovanne Lugo</div>
           <div className='address'>Cagayan de Oro, Philippines</div>
           <div className='introduction'>"Software Developer."</div>
      </div>
      <div className="buttons">
         <button onClick={githubVisit}> Github </button>
         <button onClick={fmVisit}>Frontend Mentor  </button>
         <button onClick={lnkVisit}>LinkedIn </button>
         <button onClick={ytVisit}>Youtube </button>
         <button onClick={igVisit}>Instagram </button>
      </div>
     </div>
  </div>
  )
}

export default App
