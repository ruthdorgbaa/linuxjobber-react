import { useState } from "react"
import "./css/topic.course.css"
import { Students } from "./students";
import iconplay from "./assests/play-icon.svg"
import { topics } from "./static/topic";

function TopicRight (){
    return(
        <div>

        </div>
    )
}
export default function TopicLeft (){
    const [istopic, setIsTopic] = useState(true);
    const [opacity, setOpacity] = useState("0.6")
    
    const handleTopic = (e) => {
        if (istopic && e.target.name === "topic-btn2" ){
            setIsTopic(c  => c = false)
            setOpacity(opacity = "")

        }else {
            setIsTopic(c  => c = true)
        }
    }
    return(
        <div className="left-container">
            <div className="left-cont-btn">
                <button name="topic-btn" className={`topic-btn`} onClick={handleTopic}>Topic</button>
                <button style={{opacity: opacity}} name="topic-btn2" className="topic-btn2" onClick={handleTopic}>Student</button>
            </div>
        {istopic ? <Topics/> : <Students/>}
        </div>
    )
}



function Topic ({topic}) {
    return (
        <div className="topic-container">
            <img src={iconplay} alt="play-icon" />
            <p>{topic}</p>
        </div>
    )
}
export function Topics (){
    return (
        <div className="students-container">
            {topics.map((b) =>  <Topic topic={b}/>)}
           
        </div>
    )
}