import "./css/student.course.css";
import mary from "./assests/mary.svg"
import msgicon from "./assests/message-icon.svg"
import { students } from "./static/student";

export function Students () {
    return (
        <div className="students-container">
            {students.map((b) => {
                return <Student name={b.name} />
            })}
            
        </div>
    )
}

export function Student ({name, img}){
    return (
        <div className="std-container">
            <div className="std-name">
                <img src={mary} alt="" />
                <p>{name}</p>
            </div>
            <div className="msg-icon-container">
                <img src={msgicon} alt="" height="16px" width="16px" />
                <p>Write a message</p>
            </div>
        </div>
    )    
}