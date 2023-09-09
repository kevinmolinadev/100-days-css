const Day6 = () => {
    return (
        <div className="w-frame h-frame bg-gradient-to-tr flex from-slate-400 to-slate-600 rounded-lg">
            <div className="w-4/5 h-3/4 bg-white flex m-auto rounded overflow-hidden font-sans">
                <div className="w-4/6 h-full flex flex-col p-4">
                    <div className="h-3/5 flex flex-col items-center">
                        <div className="relative mt-4 mb-2 rounded-full">
                            <img className="w-24 h-24 object-cover p-1 rounded-full" src="https://i3.wp.com/www.gamespot.com/a/uploads/screen_kubrick/1713/17133350/4000739-psyduck-sailor-moon.jpg" alt="psyduck" />
                            <div className="absolute z-20 top-0 w-full h-full  rounded-full border-2 border-slate-400 border-l-transparent duration-1000 hover:rotate-[360deg] hover:cursor-pointer"/>
                            <div className="absolute z-10 top-0 w-full h-full rounded-full border-2 border-slate-400 border-r-transparent scale-110 duration-1000 hover:-rotate-[360deg] hover:cursor-pointer"/>
                        </div>
                        <p className="font-semibold ">Psyduck</p>
                        <p className="text-xs">Pokem</p>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow gap-2 text-slate-400 ">
                        <a className="w-3/4 rounded-full py-1 text-sm border border-slate-400 font-medium hover:bg-slate-400 hover:text-white hover:cursor-pointer transition-colors duration-500 ">Follow</a>
                        <a className="w-3/4 rounded-full py-1 text-sm border border-slate-400 font-medium hover:bg-slate-400 hover:text-white hover:cursor-pointer transition-colors duration-500 ">Message</a>
                    </div>
                </div>
                <div className="w-2/6 h-full flex flex-col gap-0.5">
                    <div className="w-full h-1/3 bg-slate-200 flex flex-col justify-center items-center hover:bg-slate-300 hover:cursor-pointer transition-colors duration-500 ease-out">
                        <p className="text-xl leading-4">523</p>
                        <p className="text-xs">Posts</p>
                    </div>
                    <div className="w-full h-1/3 bg-slate-200 flex flex-col justify-center items-center hover:bg-slate-300 hover:cursor-pointer transition-colors duration-500 ease-out">
                        <p className="text-xl leading-4">1523</p>
                        <p className="text-xs">Likes</p>
                    </div>
                    <div className="w-full h-1/3 bg-slate-200 flex flex-col justify-center items-center hover:bg-slate-300 hover:cursor-pointer transition-colors duration-500 ease-out">
                        <p className="text-xl leading-4">146</p>
                        <p className="text-xs">Follower</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Day6;