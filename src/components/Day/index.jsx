import './day.css'
const Day = ({children,title, description }) => {
    const dayDescription = description.split(":");
    const dayNumber = title.split(" ")[1];
    console.log(dayDescription);
    return (
        <div className="day-section">
            <h2 className="day-title">{title}</h2>
            <div className="day-content">
                {children}
            </div>
            <p className="day-description"><a target="_blank"  href={"https://100dayscss.com/days/"+dayNumber} rel="noreferrer">{dayDescription[0]+":"}</a>{dayDescription[1]}</p>
        </div>
    )
}
export default Day;
