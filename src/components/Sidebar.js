import React from 'react'
import {CgArrowDownR} from 'react-icons/cg'
import {BsCheckBox,BsFillPeopleFill} from 'react-icons/bs'
import {MdMessage} from 'react-icons/md'
import {AiOutlineAntDesign,AiFillHome,AiOutlineBarChart,AiFillFolder} from 'react-icons/ai'
import {FaCaretSquareRight} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebarWrapper" >
                <div className="logo">
                    <AiOutlineAntDesign />
                </div>
                <ul className="ul">
                    <li><AiFillHome /></li>
                    <li><AiOutlineBarChart/></li>
                    <li><CgArrowDownR/></li>
                    <li><AiFillFolder/></li>
                    <li><BsCheckBox/></li>
                    <li><BsFillPeopleFill/></li>
                    <li><MdMessage/></li>
                    <li><FaCaretSquareRight/></li>
                </ul>
            </div>
            <div className = "settingWrapper">
                <FiSettings/>
            </div>
            
            
        </div>
    )
}

export default Sidebar


