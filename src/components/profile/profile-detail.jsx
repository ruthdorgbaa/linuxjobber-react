import React from 'react'
import "./profile.css"
import profilePix from './asset/logo.svg'
import cam from './asset/cam.svg'
import profileIcon from "./asset/profile-icon.svg"
import courseIcon from "./asset/course-icon.svg"
import attendanceIcon from "./asset/attendance-icon.svg"
import logoutIcon from "./asset/logout-icon.svg"
 

export default function Profile() {
  return (
      <div className='profile'>
          <div className='img-container'>
              <div className='imgs' >
                <img className='img-1' src={profilePix} alt="profile-pix"/>
                <img className='img-2' src={cam}alt="cam"/>
              </div>
              <h2>Ade Olu</h2>
          </div>
          <div className='profile-section'>
            <div className='profile-area'>
              <button className='profile-btn'><img src={profileIcon} alt="profile-icon" /></button> 
              <p>Profile</p>
              <p>&gt;</p>
            </div>
        
            <div className='profile-area'>
              <button className='profile-btn'>
                <img src={courseIcon} alt="course-icon" />
              </button>
                <p>Courses</p>
                <p>&gt;</p>
            </div>    
      
            <div className='profile-area'>
                <button className='profile-btn'><img src={attendanceIcon} alt="attendance-icon" /></button>
                <p>Attendance</p>
                <p>&gt;</p>
            </div> 
          </div>
          <div className='logout-area'>
            <img src={logoutIcon} alt="logout-con" />
            <button> Logout</button> 
          </div>
      </div>  
  )
}
