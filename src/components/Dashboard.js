import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import CardInfo from './CardInfo'
import Chart from './Chart'
import Applications from './Applications'
import Information from './Information'
import Piechart from './Piechart'

function Dashboard() {
    return (
        <div>
            <div className = "dashboardHeader">
                <h3>Dashboard</h3>
                <p>Monday, <span>02 July 2020</span></p>
            </div>
            <div className = "cardWrapper" >
                <CardInfo  title = "Total Applications" prize = "7956" percentage = "70" rates = {3.59}  />
                <div className = "cardInfos">
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
                
            </div>
                <CardInfo  title = "Total Applications" prize = "1501" percentage = "40" rates = {-0.4}  />
            </div>
            <div className = "chartWrapper">
                <Chart />
                <Applications />
            </div>
            <div style={{marginTop: "40px"}} className = "chartWrapper">
                <Information />
                <Piechart />
            </div>
        </div>
    )
}

export default Dashboard
