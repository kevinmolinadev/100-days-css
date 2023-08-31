const Day4 = () => {
    return (
        <div className="relative w-frame h-frame bg-red-500/80 rounded-lg flex justify-center items-center">
            <div className="absolute rounded-full w-1/4 h-1/4 bg-white shadow-xl shadow-gray-600/40 animate-load-first" />
            <div className="absolute rounded-full w-1/6 h-1/6 bg-white shadow-xl shadow-gray-600/50 animate-load-second" />
            <div className="absolute rounded-full w-1/12 h-[8.33%] bg-white shadow-xl shadow-gray-600/50 animate-load-thrid" />
        </div>
    )
}
export default Day4;