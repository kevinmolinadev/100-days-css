import { useState, useEffect } from "react";
const Day7 = () => {
    const [menu, setMenu] = useState(false);
    const [menuisHover, setMenuisHover] = useState(false);
    const [search, setSearch] = useState(false);
    const viewMenu = () => {
        setMenu(!menu);
    }
    const viewSearch = () => {
        setSearch(!search);
    }
    const hoverMenu = () => {
        setMenuisHover(!menuisHover);
    }
    useEffect(() => {
        const header = document.getElementById('header');
        const body = document.getElementById('body');
        if (menu) {
            header.classList.add('translate-x-36');
            body.classList.add('-translate-x-8');
        } else {
            header.classList.remove('translate-x-36');
            body.classList.remove('-translate-x-8');
        }
        const input = document.getElementById('input');
        if (search) {
            input.classList.remove('opacity-0', 'translate-x-60');
            input.classList.add('-translate-x-12', 'opacity-1');
        } else {
            input.classList.remove('-translate-x-12', 'opacity-1');
            input.classList.add('opacity-0', 'translate-x-60');
        }
        const menuHover = document.getElementById('menu');
        const childs = menuHover.children;
        for (const child of childs) {
            if(child.id==='last') continue;
            child.classList.remove(menuisHover?'bg-white/50':'bg-white');
            child.classList.add(menuisHover?'bg-white':'bg-white/50');
        }
    }, [menu, search, menuisHover]);
    return (
        <div className="w-frame h-frame bg-slate-700 flex justify-center items-center rounded-lg overflow-hidden relative font-sans">
            <div id="header" className="absolute w-3/4 h-3/4 z-10  bg-white rounded-md overflow-hidden transition-transform duration-500 ease-in-out">
                <div className="flex items-center h-1/5 bg-sky-600/90 p-4 ">
                    <div id="menu" onClick={viewMenu} onMouseOver={hoverMenu} onMouseOut={hoverMenu} className="relative w-[15%] cursor-pointer h-full">
                        <div className="absolute top-1 w-3/4 bg-white/50 h-1 rounded-full" />
                        <div className="absolute top-0.5 right-0 w-2 h-2 rounded-full" />
                        <div className="absolute bottom-0.5 w-full bg-white/50 h-1 rounded-full" />
                        <div id="last" className="absolute w-full h-full"></div>
                    </div>
                    <h2 className="flex-grow text-white font-semibold">Notifications</h2>
                    <div className="w-[15%] h-full flex items-center justify-end">
                        <i onClick={viewSearch} className="fa-solid fa-magnifying-glass absolute z-10 text-white/50 text-xl hover:cursor-pointer hover:text-white" />
                        <input className="absolute w-3/4 opacity-0  transition-all duration-1000 ease-in-out outline-none border-none px-4 py-1 rounded-3xl placeholder:text-black" placeholder="Search" type="text" id="input" />
                    </div>
                </div>
                <div className="h-4/5 relative">
                    <div className="absolute left-8 w-1 h-full bg-slate-400/30" />
                    <div className="absolute w-4/5 h-full top-4 right-3 text-left">
                        <div className="body-item">
                            <p>9:24 AM</p>
                            <h2><span className="font-medium">John Walker</span> posted a photo on your wall.</h2>
                        </div>
                        <div className="body-item">
                            <p>8:19 AM</p>
                            <h2><span className="font-medium">Alice Parker</span> commented your last post.</h2>
                        </div>
                        <div className="body-item">
                            <p>Yesterday</p>
                            <h2><span className="font-medium">Luke Wayne</span> added you as friend.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="body" className="absolute w-3/5 h-4/6 bg-slate-600 rounded-md transition-transform duration-500 ease-in-out ">
                <ul className='menu-list text-left'>
                    <li>
                        <i className="fa-solid fa-gauge" />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-user" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-bell" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-comments" />
                        <span>Messages</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-gear" />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Day7;