import './day12.css'
import { useState } from "react";
const Day12 = () => {
    const [isHover, setIsHover] = useState(false);
    const classModal = isHover ? "active" : "";
    return (
        <div className="frame group-day12">
            <img className="day12-background" src="https://img.icons8.com/ios-filled/100/78cae7/quote-right.png" alt="comillas" />
            <p className="day12-message">
                I know quite certainly that I myself have no special talent; curiosity, <span onMouseOver={() => { setIsHover(true) }} onMouseOut={() => setIsHover(false)} className="inline-block px-2 py-1 bg-slate-600/80">obsession</span>
                and dogged endurance, combined with self-criticism have    brought me to my ideas.
            </p>
            <i className="day12-author">Albert Einstein</i>
            <div onMouseOver={() => { setIsHover(true) }} onMouseOut={() => setIsHover(false)} className={`day12-modal ${classModal} day12-modal-figure`}>
                <div className="day12-modal-header">
                    <p >[əbˈseʃ(ə)n]</p>
                    <i className="fa-solid fa-volume-high" />
                </div>
                <div className="day12-modal-body">
                    Obsession, a persistent disturbing preoccupation with an often unreasonable idea or feeling.
                </div>
            </div>
        </div>
    )
}
export default Day12;