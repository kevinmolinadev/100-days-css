import {TemplateDate} from '../../../hooks/date';
const Day10 = () => {
    const { day, dateOfMonth, month, year, hour, minute} = TemplateDate();
    return (
        <div className="w-frame h-frame flex bg-black/70 rounded-md font-sans">
            <div className="relative w-3/5 h-3/5 m-auto rounded-full bg-black border-8 border-gray-800/20 p-3">
                <div className="absolute w-full h-full border-4 border-t-red-500 border-black animate-spin rounded-full  top-0 left-0"></div>
                <div className="relative w-full h-full rounded-full z-10 bg-black  text-white flex items-center flex-col justify-center border-2 border-dotted outline-dashed outline-black outline-4 -outline-offset-2">
                    <p>{day} {dateOfMonth} {month} {year}</p>
                    <p className='text-4xl font-semibold'>{hour}:{minute}</p>
                    <p><span className='animate-pulse whitespace-pre'>❤️</span>81    1248 KCAL</p>
                </div>
            </div>
        </div>
    )
}
export default Day10;