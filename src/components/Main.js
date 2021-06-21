import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import Sideinfo from './Sideinfo'

function Main() {
    return (
        <div>
            <Header />
            <div className = "divider">
                <Dashboard />
                <Sideinfo />
            </div>
            
            
        </div>
    )
}

export default Main

