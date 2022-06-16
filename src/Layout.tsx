import React from 'react'
import Navbar from './components/nav/Navbar'

interface Props {
    children: JSX.Element,
}

const Layout: React.FC<Props> = ({children}) => {
    return <div>
        <Navbar></Navbar>
        <div className="page">
            {children}
        </div>
        </div>
}

export default Layout