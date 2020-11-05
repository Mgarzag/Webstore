import Header from './../components/Header';
import Footer from './../components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// import {
//         Carousel,
//         CarouselItem,
//         CarouselControl,
//         CarouselIndicators,
//         CarouselCaption
//         } from 'react-bootstrap';

import './styles.scss';
import Directory from '../components/Directory';


const HomepageLayout = props => {
    return (
        <div className="fullHeight">
            <Header />
                {props.children}
                    <Footer />
        </div>
    );
};

export default HomepageLayout;