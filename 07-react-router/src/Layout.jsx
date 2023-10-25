import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// All component are in index file which called by default, no need to write index.js
import { Header, Footer } from './components'

import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />

            {/* now passing components dynamically  */}
            <Outlet />
            {/* with Outlet Header and Footer will remain same and the changes will be inside or between them */}
            {/* now u have to tell in index file in this case that i am using a layout */}

            <Footer />
        </>
    )
}

export default Layout
