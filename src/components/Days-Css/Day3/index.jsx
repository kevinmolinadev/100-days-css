import './day3.css'
const Day3 = () => {
    return (
        <div className="frame group-content-pyramide">
            <div className="group-pyramide">
                <div>
                    <div className="pyramid" />
                    <div className="pyramid-shadow-right" />
                    <div className="pyramid-shadow-left" />
                    <div className="sun" />
                </div>
                <div>
                    <div className="shadow-sun" />
                </div>
            </div>
        </div>
    )
}
export default Day3;