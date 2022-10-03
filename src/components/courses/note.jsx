import { notes } from "./static/note"
import playicon from "./assests/play-icon.svg"
import "./css/note.course.css"


function Note ({topic, content}){
    return (
        <div className="note-container">
            <div className="note-title-section">
                <div className="note-topic-section">
                    <img src={playicon} alt="" />
                    <p>{topic}</p>
                </div> 
                <p><a href="!#">Go to the video &gt;</a></p>
            </div>
            <p>{content}</p>
            <hr />
        </div>
    )
}
export default function Notes (){
    return (
        <div className="notes-container">
            {notes.map((b) => <Note topic={b.topic} content={b.content} />)}
        </div>
    )
}