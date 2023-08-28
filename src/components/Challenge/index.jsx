import './challenge.css'
import Day from "../Day";
import Days from '../Day/Days';
const Challenge = () => {
    return (
        <section className=''>
            <Day title="Day 1" description="100 Days CSS: An easy start into the challenge with a custom build number with gradient.">
               <Days.Day1/>
               <Days.Day1Tailwind/>
            </Day>
        </section>
    )
}
export default Challenge;