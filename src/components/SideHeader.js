import React from 'react'
import {MdAdd} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'

function SideHeader() {
    return (
        <div className = "sideHeaderContainer">
            <button>
                <MdAdd /> <p>Add</p>
            </button>
            <div className = "sideHeaderSearchbar">
                <GoSearch className="search" />
                <input type="text" placeholder="Search for Application here"  />


            </div>
            
        </div>
    )
}

export default SideHeader
