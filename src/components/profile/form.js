import React from 'react'
import "./profile.css"
export default function Form() {
  return (
    <div className='form'>
        <ol>
            <li>
                <p>Course of study in school</p>
                <input type="text" />
            </li>
            <li>
                <p>Are you a student?</p>
                <div className='btns'>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </li>
            <li>
                <p>Did you graduate?</p>
                <div className='btns'>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </li>
            <li>
                <p>Does your country require post-graduation service?</p>
                <div className='btns'>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </li>
        </ol>
    </div>
  )
}
