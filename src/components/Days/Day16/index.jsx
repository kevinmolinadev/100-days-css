import './day16.css'
const Day16 = () => {
    return (
        <div className="w-frame h-frame bg-sky-600/70 rounded-md relative flex justify-center items-center overflow-hidden">
            <div className="circle absolute w-1/4 h-1/4 bg-white rounded-full outline-4 outline outline-transparent"></div>
            <div className="octagon-container absolute w-1/4 h-1/4 ">
                <div className="octagon bg-white w-full h-full rotate-[22.5deg] " />
                <div className="octagon-lines absolute w-full h-full top-0">
                    <div className="absolute -top-6 left-5 origin-bottom-right w-7 h-1  bg-gradient-to-l from-white from-80% rotate-90 to-white/20" />
                    <div className="absolute top-0 -left-10 origin-bottom-right w-7 h-1 bg-gradient-to-l from-white from-80% rotate-[22.5deg] to-white/20" />
                    <div className="absolute top-12 -left-14 w-7 h-1 bg-gradient-to-l from-white from-80%  to-white/20" />
                    <div className="absolute -bottom-1 -left-8 origin-bottom-right w-7 h-1 bg-gradient-to-l from-white from-80% -rotate-[30.5deg]  to-white/20" />
                    <div className="absolute -bottom-5 left-6 origin-bottom-right w-7 h-1  bg-gradient-to-l from-white from-80% -rotate-90 to-white/20" />
                    <div className="absolute bottom-0 -right-1 origin-bottom-right w-7 h-1 bg-gradient-to-l from-white from-80% rotate-[210.5deg]  to-white/20" />
                    <div className="absolute top-11 -right-6 w-7 h-1 origin-bottom-right bg-gradient-to-l from-white from-80% rotate-180 to-white/20" />
                    <div className="absolute -top-0.5 -right-2 origin-bottom-right w-7 h-1  bg-gradient-to-l from-white from-80% rotate-[155deg] to-white/20" />
                </div>
            </div>
            <div className="triangle-container absolute w-1/3 h-1/4">
                <div className="triangle w-full h-full bg-white" />
                <div className="triangle-lines absolute w-full h-full top-0">
                    <div className="absolute -top-6 left-9 origin-bottom-right w-7 h-1  bg-gradient-to-l from-white from-80% rotate-90 to-white/20" />
                    <div className="absolute -bottom-4 -left-10 origin-bottom-right w-7 h-1  bg-gradient-to-l from-white from-80% -rotate-45 to-white/20" />
                    <div className="absolute -bottom-3.5 -right-3.5 origin-bottom-right w-7 h-1  bg-gradient-to-l from-white from-80% -rotate-[135deg] to-white/20" />
                </div>
            </div>
        </div>
    )
}
export default Day16;