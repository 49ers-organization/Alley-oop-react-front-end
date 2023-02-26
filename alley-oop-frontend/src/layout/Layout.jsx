import React from 'react'
import BottomBar from '../components/BottomBar/BottemBar'
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div className='SLayout'>
            <div className='SMain'>
                {children}
            </div>
            <BottomBar />
        </div>
    )
}

export default Layout