import React from 'react';
import Header from './Header';
import ContentSidebar from './ContentSidebar';
import HomeFooter from './HomeFooter';

export default function Mainlayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="page-wraper">
            <Header />
            <ContentSidebar />
            <main>{children}</main>
            <HomeFooter />
        </div>
    );
};
