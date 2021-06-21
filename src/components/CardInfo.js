import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {ImArrowUpRight2,ImArrowDownLeft2} from 'react-icons/im'

function CardInfo({title,prize,percentage,rates}) {
    
    
    return (
        <div className = "cardInfo">
                <div className="top">
                    <h5>{title}</h5>
                    <BiDotsHorizontalRounded />
                </div>
                <div className="bottom">
                    <div className="part1">
                        <h2>{prize}</h2>
                        <div className="rate">
                            {
                                rates > 0 ? <ImArrowUpRight2 className="arrow"/> : <ImArrowDownLeft2 className="arrow"/>
                            }
                            <p><sub>{(rates > 0) ? `+` : `-`} </sub> {rates}%</p>
                        </div>
                    </div>
                    <div className="percentage">
                        <svg>
                            <circle cx = "30" cy = "30" r = "30" ></circle>
                            <circle cx = "30" cy = "30" r = "30" ></circle>
                        </svg>
                        <div className="number">
                            <p>+{percentage}%</p>
                        </div>
                    </div>
                   
                </div>
            </div>
    )
}

export default CardInfo
