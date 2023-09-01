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
         <Day title="Day 4" description="Loading: The best are always websites that do not need a loading status. If they do, here would be a calming one.">
            <Days.Day4 />
            <Days.Day4Tailwind />
         </Day>
         <Day title="Day 5" description="Statistic: In a world of numbers, it is important to be able to interpret them correctly. Beautiful statistics help to capture these data.">
            <Days.Day5 />
            <Days.Day5Tailwind />
         </Day>
      </section>
   )
}
export default Challenge;