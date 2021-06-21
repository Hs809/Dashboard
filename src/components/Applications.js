import React from 'react'


function Applications() {
    return (
        <div className = "applicationContainer" >
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
        </div>
    )
}

export default Applications

