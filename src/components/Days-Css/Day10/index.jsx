import './day10.css';
import {TemplateDate} from '../../../hooks/date';
const Day10 = () => {
    const { day, dateOfMonth, month, year, hour, minute } = TemplateDate();
    return (
        <div className="frame group-day10">
            <div className="content-day10">
                <div className=""></div>
                <div className="day10-main">
                    <p>{day} {dateOfMonth} {month} {year}</p>
                    <p>{hour}:{minute}</p>
                    <p><span>❤️</span>81    1248 KCAL</p>
                </div>
            </div>
        </div>
    )
}
export default Day10;