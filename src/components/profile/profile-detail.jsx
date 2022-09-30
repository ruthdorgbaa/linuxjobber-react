import React from 'react'
import "./profile.css"
import profilePix from './asset/logo.svg'
import cam from './asset/cam.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

export default function Profile() {
  return (
      <div className='profile'>
          <div className='img-container'>
              <div className='imgs'>
                <img className='img-1' src={profilePix} />
                <img className='img-2' src={cam}/>
              </div>
              <h2>Ade Olu</h2>
          </div>
          <ul>
              <li>
                  <div className='btns'>
                  <FontAwesomeIcon icon="fa-light fa-user" />
             <p>Profile &gt;</p>
          </div>
              </li>
              <li>
              <div className='btns'>
              <p><button>icon</button>Courses &gt;</p>
          </div>    
          </li>
              <li>
              <div className='btns'>
          <p><button>icon</button> Attendance &gt;</p>
          </div>   
          </li>
          </ul>
          <div>
            <button>Logout</button>
          </div>
      </div>
      
  )
}
