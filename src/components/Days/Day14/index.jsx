import './day14.css'
import { useState, useRef } from 'react';
const Day14 = () => {
    const [animate, setAnimate] = useState({front:'animate',back:''});
    const timerStart = useRef(null);
    const timerEnd = useRef(null);
    const Hover = () => {
        clearInterval(timerEnd.current);
        timerStart.current = setInterval(() => {
            setAnimate({
                front: '',
                back:'animate'
            });
        }, 500);
    }
    const notHover = () => {
        clearInterval(timerStart.current);
        timerEnd.current = setInterval(() => {
            setAnimate({
                front: 'animate',
                back:''
            });
        }, 500);
        setTimeout(() => {
            clearInterval(timerEnd.current);
        }, 500);
    }
    return (
        <div className="w-frame h-frame relative bg-black/70 rounded-md flex">
            <div onMouseEnter={Hover} onMouseLeave={notHover} className='group-day14 w-4/5 h-1/2 relative m-auto flex justify-center items-center'>
                <div className="day14-bycicle w-full h-full bg-yellow-400 rounded-md flex flex-col justify-center relative items-center overflow-hidden">
                    <img className="day14-bycicle-img" src="https://100dayscss.com/codepen/bycicle.svg" alt="bycicle" />
                    <div className={`bycicle-road ${animate.front} w-1/2 h-1 overflow-hidden -top-0.5 relative`}>
                        <div className="absolute w-4 -left-6 h-1 bg-black" />
                        <div className="absolute w-6 -left-6 h-1 bg-black" />
                        <div className="absolute w-4 -left-6 h-1 bg-black" />
                        <div className="absolute w-3 -left-6 h-1 bg-black" />
                        <div className="absolute w-4 -left-6 h-1 bg-black" />
                        <div className="absolute w-5 -left-6 h-1 bg-black" />
                        <div className="absolute w-3 -left-6 h-1 bg-black" />
                        <div className="absolute w-2 -left-6 h-1 bg-black" />
                        <div className="absolute w-4 -left-6 h-1 bg-black" />
                        <div className="absolute w-5 -left-6 h-1 bg-black" />
                    </div>
                </div>
                <div className={`day14-helicopter ${animate.back} opacity-0 absolute w-full h-full  bg-yellow-400 rounded-md flex justify-center items-center overflow-hidden`}>
                    <img className="day14-helicopter-img relative z-10" src="https://100dayscss.com/codepen/helicopter.svg" alt="helicopter" />
                    <div className={`helicopter-road ${animate.back} w-1/2 h-2/3 overflow-hidden absolute`}>
                        <div className="absolute w-6 left-full bottom-0 h-1 bg-black" />
                        <div className="absolute w-5 left-full bottom-4 h-1 bg-black" />
                        <div className="absolute w-6 left-full bottom-8 h-1 bg-black" />
                        <div className="absolute w-5 left-full bottom-12 h-1 bg-black" />
                        <div className="absolute w-6 left-full bottom-16 h-1 bg-black" />
                        <div className="absolute w-5 left-full top-12  h-1 bg-black" />
                        <div className="absolute w-6 left-full top-8 h-1 bg-black" />
                        <div className="absolute w-5 left-full top-4  h-1 bg-black" />
                        <div className="absolute w-6 left-full top-0  h-1 bg-black" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Day14;