import React from 'react'
import styled from 'styled-components'
import {FaLocationArrow} from 'react-icons/fa'
import {FiArrowUpRight} from 'react-icons/fi'

function Information() {
    

    return (
        <Container>
            <Header>
                <h3>Referals and Campaign Stats</h3>
                <div className="container">
                    <FaLocationArrow style={{fontSize: "20px", marginRight: "10px"}} />
                    <div className="info">
                        <h3>40 Campaigns sent in total</h3>
                        <h3 style = {{color: "#fff"}}>4 Campaigns sent in last month</h3>
                    </div>
                </div>
            </Header>
            <Infos>
                <div style ={{borderRight: "1px solid #A4A4A4"  }}>
                    <h3>User's Reached</h3>
                    <div>
                        <FiArrowUpRight />
                        <p>+9.01%</p>
                    </div>
                    <h2>0662</h2>
                </div>
                <div style ={{borderRight: "1px solid #A4A4A4"  }}>
                    <h3>Refrals</h3>
                    <div>
                        <FiArrowUpRight />
                        <p>+39.18%</p>
                    </div>
                    <h2>1478</h2>
                </div>
                <div style ={{borderRight: "1px solid #A4A4A4"  }}>
                    <h3>Shares</h3>
                    <div>
                        <FiArrowUpRight />
                        <p>+3.59%</p>
                    </div>
                    <h2>7956</h2>
                </div>
                <div >
                    <h3>Applications</h3>
                    <div>
                        <FiArrowUpRight />
                        <p>+12.00%</p>
                    </div>
                    <h2>0564</h2>
                </div>
            </Infos>
            <Buttons>
                <button>Start a New Campaign Now</button>
                <button>Pause all Running Campaign</button>
            </Buttons>
            

            
        </Container>
    )
}

export default Information
const Container = styled.div`

margin-top:40px;
padding:10px;
border-radius: 12px;
background: #151515;
box-shadow:  15px 15px 30px #0c0c0c,
             -15px -15px 30px #1e1e1e;

`
const Header = styled.div`
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;  
    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        top:20px;
        color:#FF6263;
    }
    h3{
        margin:0;
        font-size:14px;
    }
`
const Infos = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    color:#fff;
    margin-top:40px;
    h3{
        margin:0;
        font-size:14px;
    }
    h2,p{
        margin:0;
    }
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h3{
            font-size:15px;
        }
    }
    
    div div {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: row;
        color:#1B98F5;
        margin-top:19px;
    }

`
const Buttons = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:40px;
    button{

        border:none;
        border-radius:5px;
        cursor:pointer;
        width: 220px;
        height:50px;
        
    }
    button:nth-child(1){
        background:#1B98F5;
        transition:0.5s all;
        &:hover{

            box-shadow: inset 250px 0 0 0 #383CC1;
            transition:0.5s all;
        }
    }
    button:nth-child(2){
        background:#FF6263;
        &:hover{
            box-shadow: inset 250px 0 0 0 #B9345A;
            transition:0.5s all;
        }
    }
`