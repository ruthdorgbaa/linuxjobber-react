import "./course.css"
export function Course(){
    return (
        <div className="course">
            <Category/>
            <Participant />
        </div>
    )
}

function Participant(){
    return (
        <div>

        </div>
    )
}

function Category (){
    return (
        <div className="category">
            <CategoryItem title="Topic"/>
            <CategoryItem title={"Student"} />
            <CategoryItem title={"Class"} />
        </div>
    )
}
function CategoryItem ({title}) {
    const arr = ["Chat","Note","Video", "Lab"]
    return (
        <div className="category-item">
            <p className={title!=="Topic"?"item-title-before":"item-title"}>{title}</p>
            {arr.map((b) => {

                return (<p className={title !== "Topic"?"items-before":"items"}>{b}</p>)
            })}
        </div>
    )
}