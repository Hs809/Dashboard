import React from 'react'
import styled from 'styled-components'
import {CgArrowDownR} from 'react-icons/cg'
import {BsCheckBox,BsFillPeopleFill} from 'react-icons/bs'
import {MdMessage} from 'react-icons/md'
import {AiOutlineAntDesign,AiFillHome,AiOutlineBarChart,AiFillFolder} from 'react-icons/ai'
import {FaCaretSquareRight} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'

function Sidebar() {
    return (
        <Container>
            <SidebarWrapper >
                <div className="logo">
                    <AiOutlineAntDesign />
                </div>
                <ul>
                    <li><AiFillHome /></li>
                    <li><AiOutlineBarChart/></li>
                    <li><CgArrowDownR/></li>
                    <li><AiFillFolder/></li>
                    <li><BsCheckBox/></li>
                    <li><BsFillPeopleFill/></li>
                    <li><MdMessage/></li>
                    <li><FaCaretSquareRight/></li>
                </ul>
            </SidebarWrapper>
            <SettingWrapper>
                <FiSettings/>
            </SettingWrapper>
            
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background:#242B2E;
    width:60px;
    height:165vh;
    display:flex;
    justify-content:space-between;
    flex-direction:column;


`

const SidebarWrapper = styled.div`
    margin-top:19px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .logo{
        font-size:30px;
        border-radius:50%;
        color:#fff;
        cursor:pointer;
    }

    ul{
        padding:0;
    }

    ul li {
        list-style:none;
        color:white;
        margin-bottom:19px;
        font-size:20px;
        cursor:pointer;
        transition:0.3s all;
        &:hover{
            color:#1B98F5;
            transition:0.3s all;
        }
    }
`
const SettingWrapper = styled.div`
    margin:auto;
    font-size:20px;
    color:#fff ;
    cursor:pointer;
    transition:0.3s all;
        &:hover{
            color:#1B98F5;
            transition:0.3s all;
        }
`

