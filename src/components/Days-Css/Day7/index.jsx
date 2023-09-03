import './day7.css'
import { useState, useEffect } from 'react'
const Day7 = () => {
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState(false)
    const viewMenu = () => {
        setMenu(!menu)
    }
    const viewSearch = () => {
        setSearch(!search)
    }
    useEffect(() => {
        const contentDay7 = document.querySelector('.content-day7');
        const contentMenu = document.querySelector('.content-menu');
        const inputSearch = document.querySelector('.header-search input');
        if (menu) {
            contentDay7.classList.add('menu');
            contentMenu.classList.add('menu');
        } else {
            contentDay7.classList.remove('menu');
            contentMenu.classList.remove('menu');
        }
        if (search) {
            inputSearch.classList.add('input-search');
        } else {
            inputSearch.classList.remove('input-search');
        }
    }, [menu, search])
    return (
        <div className="frame group-day7">
            <div className="content-day7 ">
                <div className="day7-header">
                    <div className="header-menu" onClick={viewMenu}>
                        <div />
                        <div />
                        <div />
                    </div>
                    <h2>Notifications</h2>
                    <div className="header-search" >
                        <div onClick={viewSearch}>
                            <div />
                            <div />
                        </div>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="day7-body">
                    <div/>
                    <div className="body-content">
                        <div className="body-item">
                            <p>9:24 AM</p>
                            <h2><span>John Walker</span> posted a photo on your wall.</h2>
                        </div> 
                        <div className="body-item">
                            <p>8:19 AM</p>
                            <h2><span>Alice Parker</span> commented your last post.</h2>
                        </div>
                        <div className="body-item">
                            <p>Yesterday</p>
                            <h2><span>Luke Wayne</span> added you as friend.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-menu">
                <ul className='menu-list'>
                    <li>
                        <i className="fa-solid fa-gauge"/>
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