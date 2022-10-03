import TopicLeft, { TopicRight } from "./topics";

export default function ClassRoom () {
    return(
        <div style={{display: "flex"}}>
            <TopicLeft/>
            <TopicRight/>
        </div>
    )
}