import React from 'react'
import {AiFillBell} from 'react-icons/ai'
import {MdArrowDropDown} from 'react-icons/md'

function Header() {
    return (
        <div className = "headerContainer">
            <div className="wrapper">
                <div className="dot">.</div>
                <AiFillBell className = "bell" />
                <p>John Bayer</p>
                <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="" />
                <MdArrowDropDown />
            </div>
            
        </div>
    )
}

export default Header
  
