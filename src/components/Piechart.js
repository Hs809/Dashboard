import React from 'react'
import { VictoryPie } from "victory-pie";
import {BiDotsHorizontalRounded} from 'react-icons/bi'

const myData = [
    { x: "45%", y: 300 , labels : "25%"},
    { x: "30%", y: 250 },
    { x: "25%", y: 200 },
  ];

function Piechart() { 
    
    return (
        <div className = "pieContainer">
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
            
            
        </div>
    )
}

export default Piechart

