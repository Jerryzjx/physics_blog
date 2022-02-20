import React from 'react';
import { Header } from './';
// @ts-ignore
const Layout = ({ children }) => {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;