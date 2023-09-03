import './day.css'
const Day = ({children,title, description }) => {
    const dayDescription = description.split(":");
    const dayNumber = title.split(" ")[1];
    return (
        <div className="day-section">
            <h2 className="day-title text-2xl md:text-3xl lg:text-4xl">{title}</h2>
            <div className="day-content">
                {children}
            </div>
            <p className="day-description px-12 lg:px-[12%]   md:text-lg lg:text-xl"><a target="_blank"  href={"https://100dayscss.com/days/"+dayNumber} rel="noreferrer">{dayDescription[0]+":"}</a>{dayDescription[1]}</p>
        </div>
    )
}
export default Day;
