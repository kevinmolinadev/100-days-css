import { useState } from "react";
const Day12 = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="relative w-frame h-frame bg-[#4CB6DE] rounded-md flex gap-5 flex-col justify-end p-8 pb-12 text-white  font-sans">
            <img className="absolute w-1/6 top-16 left-3 z-0" src="https://img.icons8.com/ios-filled/100/78cae7/quote-right.png" alt="comillas" />
            <p className="relative z-10 text-2xl text-left whitespace-break-spaces">
                I know quite certainly that I myself have no special talent; curiosity, <span onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="inline-block px-2 py-1 bg-slate-600/80 after:">obsession</span>
                and dogged endurance, combined with self-criticism have brought me to my ideas.
            </p>
            <i className="text-2xl font-light text-left">Albert Einstein</i>
            {
                isHover &&
                <div onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className={`absolute z-20 w-4/5  delay-500 translate-y-12 -top-6 day12-modal-figure`}>
                    <div className="w-full h-1/4 px-4 bg-white gap-2 text-black flex items-center">
                        <p >[əbˈseʃ(ə)n]</p>
                        <i className="fa-solid fa-volume-high scale-75 hover:scale-90 transition-transform duration-200 cursor-pointer" />
                    </div>
                    <div className="w-full h-3/4 px-4 pb-6 text-left text-lg bg-slate-600">
                        Obsession, a persistent disturbing preoccupation with an often unreasonable idea or feeling.
                    </div>
                </div>
            }
        </div>
    )
}
export default Day12;