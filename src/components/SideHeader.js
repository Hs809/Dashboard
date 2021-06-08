import React from 'react'
import styled from 'styled-components'
import {MdAdd} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'

function SideHeader() {
    return (
        <Container>
            <button>
                <MdAdd /> <p>Add</p>
            </button>
            <Searchbar>
                <GoSearch className="search" />
                <input type="text" placeholder="Search for Application here"  />


            </Searchbar>
            
        </Container>
    )
}

export default SideHeader
const Container = styled.div` 
    display:flex;
    justify-content:space-around;
    align-items:center;


    

    button{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        background:#1B98F5;
        border:none;
        border-radius:5px;
        cursor:pointer;
        font-size:16px;
        color:#fff;
        width:90px;
        height:40px;
        transition:0.5s all;
        &:hover{
            box-shadow: inset 90px 0 0 0 #2827CC;
            transition:0.5s all;
        }

        p{
            margin:0px;
            margin-left:5px;
            margin-right:5px;
        }
    }

`

const Searchbar = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    border-radius:5px;
    padding:5px;

    .search{
        color:#BDBDBD;
        font-size:15px;
        margin-right:5px;
    }
    input{
        padding:5px;
        border:none;
        background:none;
        color:#848484;
        &::placeholder {
            color:#848484;
        }
        &:focus{
            outline:0;
        }
    }

`