import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;