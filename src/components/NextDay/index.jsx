//import './next-day.css'
import { useState, useEffect } from 'react';
const NextDay = () => {
    const [time, setTime] = useState({});
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = 23 - now.getHours();
            const minutes = 59 - now.getMinutes();
            const seconds = 59 - now.getSeconds();
            setTime({
                hours: hours < 10 ? '0' + hours : hours,
                minutes: minutes < 10 ? '0' + minutes : minutes,
                seconds: seconds < 10 ? '0' + seconds : seconds
            })
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <h2 className="text-xl text-center animate-bounce pb-6 font-mono font-bold md:text-2xl lg:text-3xl lg:pb-8 ">New design within {time.hours}:{time.minutes}:{time.seconds}</h2>
    );
}
export default NextDay;