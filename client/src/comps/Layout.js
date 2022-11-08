import React from 'react'
import CustomAppBar, { SearchAppBard } from './CustomNavbar'
import { MyFooter } from './MyFooter'

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <CustomAppBar />
                {/* <SearchAppBard /> */}
            </div>

            <div 
                style={{
                    minHeight: '600px'
                }}
            >
                {children}
            </div>
            <br />
            <br />
            <br />
            <br />
            <MyFooter />
        </div>
    )
}

export default Layout
