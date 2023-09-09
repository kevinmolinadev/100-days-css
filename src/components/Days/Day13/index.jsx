import './day13.css'
import { useState, useEffect } from 'react';
const Day13 = () => {
    const [modal, setModal] = useState(false);
    const [modalClass, setModalClass] = useState('');
    useEffect(() => {
        const items = document.querySelectorAll('.fa-solid.fa-plus');
        items.forEach(item => {
            item.addEventListener('click', () => {
                setModal(!modal);
                setModalClass('animate')
            })
        })
    }, [modal, modalClass])
    return (
        <div className="frame group-day13 shadow-lg shadow-black/30 relative">
            <div className="grid grid-cols-2 gap-1 p-1">
                <div className="day13-item w-full h-full relative">
                    <img src="https://100dayscss.com/codepen/13-1.jpg" alt="img1" />
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 opacity-0 transition-all duration-500 ease-in-out bg-black/10">
                        <i className="fa-solid fa-plus p-4 text-white rounded-full" />
                    </div>
                </div>
                <div className="day13-item w-full h-full relative">
                    <img src="https://100dayscss.com/codepen/13-2.jpg" alt="img2" />
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 opacity-0 transition-all duration-500 ease-in-out bg-black/10">
                        <i className="fa-solid fa-plus p-4 text-white rounded-full"/>
                    </div>
                </div>
                <div className="day13-item w-full h-full relative">
                    <img src="https://100dayscss.com/codepen/13-3.jpg" alt="img3" />
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 opacity-0 transition-all duration-500 ease-in-out bg-black/10">
                        <i className="fa-solid fa-plus p-4 text-white rounded-full" />
                    </div>
                </div>
                <div className="day13-item w-full h-full relative">
                    <img src="https://100dayscss.com/codepen/13-4.jpg" alt="img4" />
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 opacity-0 transition-all duration-500 ease-in-out bg-black/10">
                        <i className="fa-solid fa-plus p-4 text-white rounded-full" />
                    </div>
                </div>
            </div>
            <div className={`day13-modal-header ${modalClass} absolute`}>
                <img src="https://100dayscss.com/codepen/13-1-header.jpg" alt="header" />
                <i className={`fa-solid fa-plus ${modalClass} hover:bg-white cursor-pointer absolute p-4 text-white rounded-full top-2 right-2 rotate-45`} onClick={()=>setModalClass('no-animate')} />
            </div>
            <div className={`day13-modal-profile ${modalClass} absolute overflow-hidden border-2 border-white z-10 rounded-full`}>
                <img className="w-full h-full object-cover object-center" src="https://avatars.githubusercontent.com/u/120534154?s=400&u=8473f49c51ddb548bdd6509b209858071d3850a2&v=4" alt="img1" />
            </div>
            <div className={`day13-modal-footer ${modalClass} absolute font-sans w-full`}>
                <p className="text-white p-2 font-semibold mt-14 mb-5">Kevin Molina Lazarte</p>
                <div className='flex justify-center items-center gap-12'>
                    <i className="fa-solid fa-phone transition-colors duration-500 rounded-full p-3 cursor-pointer" />
                    <i className="fa-solid fa-comment transition-colors duration-500 rounded-full p-3 cursor-pointer" />
                    <i className="fa-solid fa-heart transition-colors duration-500 rounded-full p-3 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
export default Day13;