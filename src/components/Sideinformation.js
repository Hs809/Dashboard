import React from 'react'
import {FiChevronRight} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {SiGooglemessages} from 'react-icons/si'
import {IoMdCall} from 'react-icons/io'

function Sideinformation() {
    const datas = [
        {
            name: "Rosie Metts",
            position: "IOS Developer"
        },
        {
            name: "James Scott",
            position: "Mobile Developer"
        },
        {
            name: "Jamie Laurenson",
            position: "Marketing Manager"
        },
        {
            name: "Elizabeth Hurton",
            position: "Junio UX Developer"
        },
        {
            name: "Danny Watson",
            position: "IOS Developer"
        },
        {
            name: "Reha Scarlett",
            position: "IOS Developer"
        },
    ]
    
    return (
        <div className = "sideInformationContainer">
            <h3 className="head">Hello John Bayer,<br /> You have 8 new Applications Today!</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F523%2F194%2Foriginal%2Fmobile-application-creation-web-development-testing-release-icon-and-user-interface-for-smartphone-3d-concept-vector.jpg&f=1&nofb=1" alt="" />


            <div className = "sideInformationNewApplications">
                <div className="sideIndormationheader">
                    <h3>New Applications</h3>
                    <FiChevronRight className="right" />
                </div>
                {
                    datas.map((data) => {
                        return (
                            <div className = "sideInformationApplications">
                            <div className="wrapper">
                                <div className="profilepic">
                                    <CgProfile  />
                                </div>
                                <div className="profile"> 
                                    <div className="personalinfo">
                                        <h3>{data.name}</h3>
                                        <p>Applied for <span>{data.position}</span> </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="logos">
                                <SiGooglemessages className="send" />
                                <IoMdCall />
                            </div>
                            
                        </div>
                        )
                        
                    })
                }

            </div>
        </div>
    )
}

export default Sideinformation
