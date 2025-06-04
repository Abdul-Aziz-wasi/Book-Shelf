import React from 'react';
import { Outlet } from 'react-router';
import Navabr from '../components/Navabr';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;