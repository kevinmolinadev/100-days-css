const Day1 = () => {
    return (
        <div className="w-frame bg-gradient-to-tr from-blue-900 to-cyan-500/70 h-frame rounded-md flex justify-center items-center">
            <div className="w-1/2">
                <div className="h-child relative">
                    <div className="bg-white h-12 w-5 rotate-45 -left-4  rounded-md shadow-lg shadow-gray-500 absolute"/>
                    <div className="bg-white h-full w-6 rounded-md z-20 shadow-lg shadow-gray-500 absolute"/>
                    <div className="bg-transparent h-full w-1/2 border-[24px] left-4 z-10  border-white rounded-full shadow-lg shadow-gray-500 absolute"/>
                    <div className="bg-transparent h-full w-1/2 border-[24px] right-0 border-white rounded-full shadow-lg shadow-gray-500 absolute"/>
                </div>
                <p className="text-white font-bold text-[80px] leading-none font-courier">DAYS</p>
                <p className="text-white font-bold text-2xl font-courier">CSS CHALLENGE</p>
            </div>
            
        </div>
    )
}
export default Day1;