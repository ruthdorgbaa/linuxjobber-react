import React from 'react'
import "./profile.css"
import profilePix from './asset/logo.svg'
import cam from './asset/cam.svg'
import profileIcon from "./asset/profile-icon.svg"
import courseIcon from "./asset/course-icon.svg"
import attendanceIcon from "./asset/attendance-icon.svg"
import logoutIcon from "./asset/logout-icon.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

export default function Profile() {
  return (
      <div className='profile'>
          <div className='img-container'>
              <div className='imgs' >
                <img className='img-1' src={profilePix} alt="profile-pix"/>
                <img className='img-2' src={cam}alt="cam"/>
              </div>
              <h2>Ruth Dorgbaa</h2>
          </div>
          <div>
            <div className='btns'>
             <button><img src={profileIcon} alt="profile-icon" /></button> 
             <p>Profile &gt;</p>
          </div>
        
        <div className='btns'>
          <button>
          <img src={courseIcon} alt="course-icon" />
          </button>
              <p>Courses &gt;</p>
          </div>    
      
          <div className='btns'>
              <button><img src={attendanceIcon} alt="attendance-icon" /></button>
              <p>Attendance &gt;</p>
        </div> 
        
        </div>
        <div className='logout-btn'>
          <img src={logoutIcon} alt="logout-con" />
          <button> Logout</button> 
        </div>
      </div>
      
  )
}
