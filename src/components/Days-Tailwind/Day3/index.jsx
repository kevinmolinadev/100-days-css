const Day3 = () => {
    return (
        <div className="w-frame h-frame bg-black flex items-center justify-center rounded-lg">
            <div className="w-1/2  h-1/2 rounded-full overflow-hidden animate-pyramid">
                <div className="w-full h-4/6  bg-cyan-200 relative flex justify-center">
                    <div className="absolute w-9 h-9 rounded-full bg-yellow-300 origin-sun animate-sun top-3"></div>
                    <div className="pyramid absolute bottom-0 w-3/5 h-2/5   bg-gray-200"></div>
                    <div className="pyramid-shadow-left absolute"/>
                    <div className="pyramid-shadow-right absolute"/>
                </div>
                <div className="w-full h-2/6 bg-yellow-300 relative animate-pyramid-left">
                    <div className="shadow-sun"/>
                </div>
            </div>
        </div>
    )
}
export default Day3;