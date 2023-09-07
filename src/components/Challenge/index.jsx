import './challenge.css'
import Day from "../Day";
import Days from './Days';
import NextDay from '../NextDay';
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
         <Day title="Day 6" description="Profile: Who of you knows how many social media profiles you have already created? For a refreshing twist, you can also create one yourself.">
            <Days.Day6 />
            <Days.Day6Tailwind />
         </Day>
         <Day title="Day 7" description="Notifications, Search and Menu: The three cornerstones of any application? Brought together in the smallest possible space.">
            <Days.Day7 />
            <Days.Day7Tailwind />
         </Day>
         <Day title="Day 8" description="Metaballs: At first glance impossible to implement with CSS, but filters make this possible too.">
            <Days.Day8 />
            <Days.Day8Tailwind />
         </Day>
         <Day title="Day 9" description="Rainy Night: The perfect time of day and the perfect weather to program in peace. The raindrops even shatter on the ground.">
            <Days.Day9 />
            <Days.Day9Tailwind />
         </Day>
         <Day title="Day 10" description="Watch: Classic, noble, modern or playful? What do you want your favorite watch to look like?">
            <Days.Day10 />
            <Days.Day10Tailwind />
         </Day>
         <Day title="Day 11" description="Walking Boots: These boots are made for walking. Where are they going and for how long?">
            <Days.Day11 />
            <Days.Day11Tailwind />
         </Day>
         <NextDay></NextDay>
      </section>
   )
}
export default Challenge;