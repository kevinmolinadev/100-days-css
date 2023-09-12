import './day17.css'
const Day17 = () => {
    return (
        <div className="w-frame h-frame rounded-md overflow-hidden flex justify-center items-center shadow-lg shadow-black/30 relative">
            <div className="bg-patterns-day17 absolute -rotate-45 "/>
            <div className="content-day17 w-4/6 h-4/6 bg-black rounded-md relative flex justify-center items-center">
                <div className="triangle-day17">
                    <div className="triangle-piece" />
                    <div className="triangle-piece" />
                    <div className="triangle-piece" />
                </div>
            </div>
        </div>
    )
}
export default Day17