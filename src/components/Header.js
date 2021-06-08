import React from 'react'
import styled from 'styled-components'
import {AiFillBell} from 'react-icons/ai'
import {MdArrowDropDown} from 'react-icons/md'

function Header() {
    return (
        <Container>
            <div className="wrapper">
                <div className="dot">.</div>
                <Bell />
                <p>John Bayer</p>
                <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="" />
                <MdArrowDropDown />
            </div>
            
        </Container>
    )
}

export default Header
const Container = styled.div`
    margin-top:19px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:#BDBDBD;
    height:30px;
    .wrapper{
        display:flex;
        align-items:center;
        .dot{
            color: #1B98F5;
            position: absolute;
            top: -30px;
            font-size: 50px;
            right: 193px;
        }
        p{
            margin-right:19px;
            margin-left:19px;
            font-size:16px;
            font-family: 'Poppins', sans-serif;
        }
        img{
            width:30px;
            border-radius:50%;

        }
        margin-right:19px;
    }
`
const Bell = styled(AiFillBell)`
    font-size:20px;
    width:25px;
    transition:0.3s all;
    cursor:pointer;
    color:#fff;
    &:hover{
        color: #1B98F5;
        transition:0.3s all;
    }

`