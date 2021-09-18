import React from 'react';
import './layout.scss';

import Header from '../Header';
import Footer from '../Footer';


const Layout = ({children}) => {
    return (
        <div className="Layout container-fluid">
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout;