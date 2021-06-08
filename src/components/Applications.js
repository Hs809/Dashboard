import React from 'react'
import styled from 'styled-components'

function Applications() {
    return (
        <Container>
            <h3 style={{color:"#fff", textAlign: "center"}}>Total Applications</h3>
            <ul>
                <li>
                    <div className="wrapper">
                        <h4>Applications</h4>
                        <div className="bar">
                            <div className="progress" style={{width:"100px",background:"#BDBDBD"}}></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="wrapper">
                        <h4>Shortlisted</h4>
                        <div className="bar">
                            <div className="progress" style={{width:"100px",background:"#1B98F5"}}></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="wrapper">
                        <h4>Rejected</h4>
                        <div className="bar">
                            <div className="progress" style={{width:"100px",background:"#FF6263"}}></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="wrapper">
                        <h4>onHold</h4>
                        <div className="bar">
                            <div className="progress" style={{width:"100px",background:"#BDBDBD"}}></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="wrapper">
                        <h4>Required</h4>
                        <div className="bar">
                            <div className="progress" style={{width:"100px",background:"#5A20CB"}}></div>
                        </div>
                    </div>
                </li>
            </ul>
        </Container>
    )
}

export default Applications
const Container = styled.div`
    margin-top: 60px;
    margin-left:19px;
    padding-right:10px;
    padding-top:10px;
    border-radius: 12px;
background: #151515;
box-shadow:  15px 15px 30px #0c0c0c,
             -15px -15px 30px #1e1e1e;
    
   
    h3,h4{
        margin:0;
    }
    ul{
        li{
            font-size:16px;
            margin-top:19px;
            margin-bottom:19px;
        }
        li:nth-child(1){
            color:#BDBDBD;
        }
        li:nth-child(2){
            color:#1B98F5;
        }
        li:nth-child(3){
            color:#FF6263;
        }
        li:nth-child(4){
            color:#BDBDBD;
        }
        li:nth-child(5){
            color:#5A20CB;
        }
        
    }
    .bar{
        width:150px;
        height:10px;
        background:#242B2E;
        border-radius:5px;
        .progress{
            height:10px;
            border-radius:5px;
        }
        
        
    }
    .wrapper{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`
