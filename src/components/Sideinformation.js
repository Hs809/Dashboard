import React from 'react'
import styled from 'styled-components'
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
        <Container>
            <h3 className="head">Hello John Bayer,<br /> You have 8 new Applications Today!</h3>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F523%2F194%2Foriginal%2Fmobile-application-creation-web-development-testing-release-icon-and-user-interface-for-smartphone-3d-concept-vector.jpg&f=1&nofb=1" alt="" />


            <NewApplications>
                <div className="header">
                    <h3>New Applications</h3>
                    <FiChevronRight className="right" />
                </div>
                {
                    datas.map((data) => {
                        return (
                            <Applications>
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
                            
                        </Applications>
                        )
                        
                    })
                }
                

            </NewApplications>
        </Container>
    )
}

export default Sideinformation
const Container = styled.div`
    color:#BDBDBD;
    margin-top:40px;
    .head{
        text-align: center;
    }
    border-radius: 12px;
    background: #151515;
    box-shadow:  15px 15px 30px #0c0c0c,
                 -15px -15px 30px #1e1e1e;
    img{
        width:400px;
        height:300px;
    }
    position:relative;
    
`

const NewApplications = styled.div`
    position: absolute;
    top:307px;
    right:0px;
    border-radius: 10px;
    background: #151515;
    box-shadow:  -29px 29px 66px #0f0f0f,
                 29px -29px 66px #1b1b1b;
    z-index:10;
    background:#0D0D0D;
    padding:20px;
    height:555px;
    width:350px;
.header{
        margin-bottom:40px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        h3{
            margin:0;
        }
        .right{
            font-size:20px;
        }

    }
`
const Applications = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:19px;
    
    h3,p{
        margin:0;
    }
    .profilepic{
        font-size:20px;
        margin-right:19px;
        margin-left:19px;
    }
    .personalinfo{
        h3{
            font-size:18px;
        }
        p{
            font-size:10px;
        }
        span{
            color:#1B98F5;
        }
    }
    .wrapper{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .send{
        margin-right:19px;
    }
    .logos{
        margin-right:19px;
    }
    
`