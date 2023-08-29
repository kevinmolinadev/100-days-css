const Day2 = () => {
    return (
        <div className="w-frame h-frame bg-green-700/70 rounded-md flex justify-center items-center">
            <div className="relative w-20 h-14 flex items-center">
                <div className="absolute w-full h-2 animate-bounce bg-white shadow-md shadow-gray-700/50 rounded-lg top-0 z-20" />
                <div className="absolute w-full h-2  hover:scale-125 hover:cursor-pointer duration-500 delay-500 ease-in-out  bg-white shadow-md shadow-gray-700/50 rounded-lg" />
                <div className="absolute w-full h-2 animate-bounce bg-white shadow-md shadow-gray-700/50 rounded-lg bottom-0 z-30" />
            </div>
        </div>
    )
}
export default Day2;