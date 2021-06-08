import React from 'react'
import styled from 'styled-components'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {ImArrowUpRight2,ImArrowDownLeft2} from 'react-icons/im'

function CardInfo({title,prize,percentage,rates}) {
    let color;
    if(rates > 0){
        color = "#8B008B";
    }else{
        color = "#D82E2F";
    }
    const CardInfos = styled.div`
    width:250px;
    height:100px;
    color:#fff;
    border:1px solid #CAD5E2;
    border-radius:5px;


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
    margin-top:5px;
}
.bottom{
    position:relative;
    .rate{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        .arrow{
            font-size:15px;
            color:${color};
        }
        margin-left:19px;
        margin-top:5px;
        p{
            margin:0;
            color:${color};
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
            color:#999;
            p{
                font-size:16px;
                margin:0;
            }
        }
       

    }
    .percentage svg circle:nth-child(1){
        stroke-dashoffset:0;
        stroke:#f3f3f3;
    }
    .percentage svg circle:nth-child(2){
        stroke-dashoffset:calc(220 - (220 * 60) / 100);
        stroke:${color};
    }
}

`
    return (
        <CardInfos>
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
            </CardInfos>
    )
}

export default CardInfo
