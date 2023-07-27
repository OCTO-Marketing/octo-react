import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const Navigation = () => {
    return (
        <Fragment>
            <NavBar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation
