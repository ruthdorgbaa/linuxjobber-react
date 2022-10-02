import React, {  useState } from "react";
import "./profile.css";
import tick from "./asset/tick.svg";
import pen from "./asset/pen.svg";
import Profile from "./profile-detail";

export default function Form() {
  const [next, setNext] = useState(1)
  const handleClick = () => {
    setNext(next + 1)
  }
  
  console.log()
  
  return (
    <>
      {next === 1 ? <FormOne handleClick={handleClick}/>:<FormTwo />}
      <Profile/>
      <FormThree />
      <FormFour />
      <FormFive />
      <CourseDetail />
    </>
  );
}

function FormOne({handleClick}) {
  return (
    <div className="form">
      <div className="tick">
        <img src={tick} alt="tick-icon" />
      </div>
      <div className="form-detail">
        <p>
          {" "}
          <span>1.</span> Course of study in school:
        </p>
        <input type="text" placeholder="Course of study" />
      </div>
      <div className="form-detail">
        <p>
          {" "}
          <span>2.</span>Are you a student?
        </p>
        <div className="btns">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
      <div className="form-detail">
        <p>
          <span>3.</span>Did you graduate?
        </p>
        <div className="btns">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
      <div className="form-detail">
        <p>
          <span>4.</span>Does your country require post-graduation service?
        </p>
        <div className="btns">
          <button>Yes</button>
          <button>No</button>
        </div>
        <div className="done-section">
          <button onClick={handleClick} className="done-btn">Next Step ></button>
        </div>
      </div>
    </div>
  );
}

function FormTwo() {
  const [range, setRange] = useState({
    cyber: 1,
    developer: 1,
    designer: 1,
    devops: 1,
  });

  const handleBg = (val) => {
    let len = ((val - 1) * 100) / (10 - 1);
    len = len + "% 100%";
    return { backgroundSize: len };
  };
  const handleChange = (e) => {

    // target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    const { name, value } = e.target;
    setRange({ ...range, [name]: value });
  };
  return (
    <div className="form form-two">
      <div className="tick">
        <img src={tick} alt="tick-icon" />
      </div>

      <p>Score your level of interest in these job titles:</p>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">CyberSecurity</label>
          <span>{range.cyber}/10</span>
        </div>
        <br />
        <input
          style={handleBg(range.cyber)}
          name="cyber"
          value={range.cyber}
          onChange={handleChange}
          type="range"
          min={1}
          max={10}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">Developer</label>
          <span>{range.developer}/10</span>
        </div>
        <br />
        <input
          style={handleBg(range.developer)}
          name="developer"
          value={range.developer}
          onChange={handleChange}
          type="range"
          min={1}
          max={10}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">DevOps</label>
          <span>{range.devops}/10</span>
        </div>
        <br />
        <input
          style={handleBg(range.devops)}
          name="devops"
          value={range.devops}
          onChange={handleChange}
          type="range"
          min={1}
          max={10}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">Designer</label>
          <span>{range.designer}/10</span>
        </div>
        <br />
        <input
          style={handleBg(range.designer)}
          name="designer"
          value={range.designer}
          onChange={handleChange}
          type="range"
          min={1}
          max={10}
        />
      </div>
      <div className="done-section">
        <button className="done-btn">Done</button>
      </div>
    </div>
  );
}

function FormThree() {
  return (
    <div className="form">
      <div className="tick">
        <img src={tick} alt="tick-icon" />
      </div>
      <div className="form-three">
        <div className="form-three-input-section">
          <label htmlFor="">First Name:</label>
          <br />
          <div className="three-input">
            <p>First name</p>
            <img src={pen} alt="icon" />
          </div>
        </div>
        <div className="form-three-input-section">
          <label htmlFor="">Last Name:</label>
          <br />
          <div className="three-input">
            <p>Last name</p>
            <img src={pen} alt="icon" />
          </div>
        </div>
        <div className="form-three-input-section">
          <label htmlFor="">Email</label>
          <br />
          <div className="three-input">
            <p>Email</p>
            <img src={pen} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
function FormFour() {
  return (
    <div className="form">
      <div className="tick">
        <img src={tick} alt="tick-icon" />
      </div>
      <div className="form-three">
        <div className="form-three-input-section">
          <label htmlFor="">Course of study in school:</label>
          <br />
          <div className="three-input">
            <p>English Language</p>
          </div>
        </div>
        <div className="form-three-input-section">
          <label htmlFor="">I am a student:</label>
          <br />
          <div className="three-input">
            <p>Writer</p>
          </div>
        </div>
        <div className="form-three-input-section">
          <label htmlFor="">Graduation date:</label>
          <br />
          <div className="three-input">
            <p>October 4th, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormFive() {
  const handleBg = (val) => {
    let len = ((val - 1) * 100) / (10 - 1);
    len = len + "% 100%";
    return { backgroundSize: len };
  };
  return (
    <div className="form">
      <p className="p5">My interest</p>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">Designer</label>
          <span>{6}/10</span>
        </div>
        <br />
        <input
          className="form-five-range"
          style={handleBg(6)}
          name="designer"
          value={6}
          type="range"
          min={1}
          max={10}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">Write</label>
          <span>{5}/10</span>
        </div>
        <br />
        <input
          className="form-five-range"
          style={handleBg(5)}
          name="designer"
          value={5}
          type="range"
          min={1}
          max={10}
        />
      </div>
    </div>
  );
}

function CourseDetail() {
  return (
    <div className="form">
      <div className="tick">
        <img src={tick} alt="tick-icon" />
      </div>
      <div>
        <div className="course-de"><p>Django</p></div>
        <div className="course-video">
          <p>Course Videos</p>
          <p className="red-color">22</p>
          <p>Course Date</p>
          <p className="red-color">October 4th, 2021 -</p>
          <p className="red-color">November 15th, 2021</p>
         
        </div>
        <hr />
        <div className="remove-course">
          <a href="!#">Go to Class ></a>
          <p>Remove Course</p>
        </div>
      </div>
    </div>
  );
}
