import React from 'react'
import styled from 'styled-components'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {ImArrowUpRight2,ImArrowDownLeft2} from 'react-icons/im'

import CardInfo from './CardInfo'
import Chart from './Chart'
import Applications from './Applications'
import Information from './Information'
import { PieChart } from 'recharts'
import Piechart from './Piechart'

function Dashboard() {
    return (
        <Container>
            <DashboardHeader>
                <h3>Dashboard</h3>
                <p>Monday, <span>02 July 2020</span></p>
            </DashboardHeader>
            <CardWrapper >
                <CardInfo  title = "Total Applications" prize = "7956" percentage = "70" rates = {3.59}  />
                <CardInfos>
                    <div className="wrapper">
                    <div className="top">
                        <h5>Shortlisted Candidates</h5>
                        <BiDotsHorizontalRounded />
                    </div>
                    <div className="bottom">
                        <div className="part1">
                            <h2>4658</h2>
                            <div className="rate">
                                <p><sub>+</sub> 60%</p>
                            </div>
                        </div>
                        <div className="percentage">
                            <svg>
                                <circle cx = "30" cy = "30" r = "30" ></circle>
                                <circle cx = "30" cy = "30" r = "30" ></circle>
                            </svg>
                            <div className="number">
                                <p>+60%</p>
                            </div>
                        </div>
                    
                    </div>

                    </div>
                
            </CardInfos>
                <CardInfo  title = "Total Applications" prize = "1501" percentage = "40" rates = {-0.4}  />
            </CardWrapper>
            <ChartWrapper>
                <Chart />
                <Applications />
            </ChartWrapper>
            <ChartWrapper style={{marginTop: "40px"}}>
                <Information />
                <Piechart />
            </ChartWrapper>
        </Container>
    )
}

export default Dashboard
const Container = styled.div`

`
const DashboardHeader = styled.div`
    color:#BDBDBD;
    margin-bottom: 19px;
    h3,p{
        margin-top:0px;
        margin-bottom:0px;
        letter-spacing:1px;
    }
    p span{
        color:#1B98F5;
        font-weight:500;
        letter-spacing:1px;
    }
    
`
const CardWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr 1fr;
    gap:10px;
    .secondcard{
        box-shadow: -15px -10px 10px 12px rgba(0, 0, 0, 0.1);
    }
    
`
const CardInfos = styled.div`
    width:250px;
    height:100px;
    color:#fff;
    border:1px solid #CAD5E2;
    border-radius:10px;
    margin-left:19px;
    
    .wrapper{
        transform:translate(35px,15px);;
        background:#1B98F5;
        border-radius:10px;
        border:none;
        width:250px;
        height:120px;
      }
    

.top{
    display:flex;
    justify-content:space-around;
    align-items:center;
    h5,p{
        margin:0;
        margin-top:5px;
    }

}
h2{
    margin:0;
    margin-top:10px;
}
.bottom{
    position:relative;
    .rate{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        .arrow{
            font-size:15px;
            color:#fff;
        }
        margin-left:19px;
        margin-top:5px;
        p{
            margin:0;
            color:#fff;
        }
       
    }
    .part1 {
        h2{
            margin-left:19px;
        }
    }
    .percentage svg circle{
        width:150px;
        height:150px;
        fill:none;
        stroke-width:5;
        stroke:#000;
        transform: translate(5px , 5px);
        stroke-dasharray:220;
        stroke-dashoffset:220;
        stroke-linecap:round;
        
    }
    .percentage{
        svg{
            position: absolute;
            top: -5px;
            left: 150px;
        }
        
        .number{
            position: absolute;
            top: 18px;
            left: 163px;
            color:#fff;
            p{
                font-size:16px;
                margin:0;
            }
        }
       

    }
    .percentage svg circle:nth-child(1){
        stroke-dashoffset:0;
        stroke:#1B98F5;
    }
    .percentage svg circle:nth-child(2){
        stroke-dashoffset:calc(220 - (220 * 60) / 100);
        stroke:#fff;
    }
}

`
const ChartWrapper = styled.div`
    display:grid;
    grid-template-columns:1.5fr 1fr;
    gap:10px;
`