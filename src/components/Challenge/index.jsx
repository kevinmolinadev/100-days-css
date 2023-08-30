import './challenge.css'
import Day from "../Day";
import Days from './Days';
const Challenge = () => {
   return (
      <section>
         <Day title="Day 1" description="100 Days CSS: An easy start into the challenge with a custom build number with gradient.">
            <Days.Day1 />
            <Days.Day1Tailwind />
         </Day>
         <Day title="Day 2" description="Menu Icon: Used on almost every website by now, simple but impressively animated it becomes a real eye-catcher.">
            <Days.Day2 />
            <Days.Day2Tailwind />
         </Day>
         <Day title="Day 3" description="The Pyramide: Not as challenging as the real pyramids in Egypt, but the shadow path is not easy.">
            <Days.Day3 />
            <Days.Day3Tailwind />
         </Day>
      </section>
   )
}
export default Challenge;