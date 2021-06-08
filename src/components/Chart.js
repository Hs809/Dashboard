import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import {ImFolderDownload} from 'react-icons/im'
import {BiDotsVerticalRounded} from 'react-icons/bi'


class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["Jan", "Feb", "Mar","April","May", "Jun", "Jul"],
                datasets: [
                    {
                        label: "This Year",
                        backgroundColor: "rgba(255,0,255,0.75)",
                        data: [4,5,1,10,32,2,12],
                        borderColor: "#FF6666"
                    },
                    {
                        label: "Next Year",
                        backgroundColor: "rgba(0,255,0,0.75)",
                        data: [14,15,21,0,12,45,12],
                        borderColor: "#8D3DAF"
                    },
                    {
                        label: "Today",
                        backgroundColor: "rgba(0,255,0,0.75)",
                        data: [1,2,4,0,0,45,12],
                        borderColor: "#23C4ED",
                    },
                ]
            }
        }
    }
   
    render() {
        return (
            <Container style={{position: "relative", width: 500, height: 290 }}>
                <div className="title">
                    <h3>Application Received</h3>
                    <div>
                        <ImFolderDownload />
                        <p>Download Report</p>
                        <BiDotsVerticalRounded />
                    </div>

                    
                </div>
                <Line 
                    options ={{
                        responsive: true 
                    }}  
                    data = {this.state.data}
                />
            </Container>
        )
    }
}

export default Chart
const Container = styled.div`
    margin-top:60px;
    color:#fff;
    border-radius: 12px;
background: #151515;
box-shadow:  15px 15px 30px #0c0c0c,
             -15px -15px 30px #1e1e1e;
    
    .title{
        display:flex;
        justify-content:space-around;
        align-items:center;
        h3{
            cursor:pointer;
        }
        div{
            display:flex;
            justify-content:space-around;
            align-items:center;
            p{
                margin-right:10px;
                margin-left:10px;
                cursor:pointer;
            }
            cursor:pointer;

        }
    }
`
 