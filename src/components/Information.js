import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'
import {FiArrowUpRight} from 'react-icons/fi'

function Information() {
    

    return (
        <div className = "informationContainer">
            <div className = "informationHeader">
                <h3>Referals and Campaign Stats</h3>
                <div className="icontainer">
                    <FaLocationArrow style={{fontSize: "20px", marginRight: "10px"}} />
                    <div className="info">
                        <h3>40 Campaigns sent in total</h3>
                        <h3 style = {{color: "#fff"}}>4 Campaigns sent in last month</h3>
                    </div>
                </div>
            </div>
            <div className = "informationInfos">
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
            </div>
            <div className = "informationButtons">
                <button>Start a New Campaign Now</button>
                <button>Pause all Running Campaign</button>
            </div>
            

            
        </div>
    )
}

export default Information
