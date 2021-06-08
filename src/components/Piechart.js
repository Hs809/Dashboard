import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from "victory-pie";
import {BiDotsHorizontalRounded} from 'react-icons/bi'

const myData = [
    { x: "45%", y: 300 , labels : "25%"},
    { x: "30%", y: 250 },
    { x: "25%", y: 200 },
  ];

function Piechart() { 
    
    return (
        <Container>
            <div className="pieheader">
                <h3>Open Positions by Department</h3>
                <BiDotsHorizontalRounded className="logo" />

            </div>

            <div className="container">
                <VictoryPie
                    data={myData}
                    colorScale={["#5A20CB", "#FF6263", "#1B98F5"]}
                    radius={120}
                    labelRadius={({ innerRadius }) => innerRadius + 15 }
                    style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
                    innerRadius={60}
                    radius={({ datum }) => 20 + datum.y * 0.5}
                />
                <p>Open Positions</p>
            </div>
            
            
        </Container>
    )
}

export default Piechart

const Container = styled.div`
    margin-top:40px;
    color:#fff;
    border:1px #424242;
    border-radius: 19px;
    background: linear-gradient(225deg, #161616, #131313);
    box-shadow:  -7px 7px 29px #0b0b0b,
                 7px -7px 29px #1f1f1f;
    .container{
        position:relative;
        
        display:flex;
        justify-content:center;
        align-items:center;
    }
    
    p{
        position:absolute;
        font-size:11px;
    }
    .pieheader{
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding-top:19px;
        h3{
            margin:0;
            font-size:15px;
            cursor:pointer;
        }
        .logo{
            font-size:20px;
            cursor:pointer;
        }

    }
`