import React, { useState } from "react";
import "./profile.css";
import tick from "./asset/tick.svg";
export default function Form() {
  return (
    <>
      <FormOne />
      <FormTwo />
    </>
  );
}

function FormOne() {
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
          <button className="done-btn">Next Step ></button>
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
  const handleChange = (e) => {
    let target = e.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / max + "% 100%";
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
          <span>1/10</span>
        </div>
        <br />
        <input
          value={range.cyber}
          onChange={handleChange}
          type="range"
          min={1}
          max={15}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">Developer</label>
          <span>1/10</span>
        </div>
        <br />
        <input
          value={range.developer}
          onChange={handleChange}
          type="range"
          min={1}
          max={15}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">DevOps</label>
          <span>1/10</span>
        </div>
        <br />
        <input
          value={range.devops}
          onChange={handleChange}
          type="range"
          min={1}
          max={15}
        />
      </div>
      <div className="range-section">
        <div className="label">
          <label htmlFor="">Designer</label>
          <span>1/10</span>
        </div>
        <br />
        <input
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
