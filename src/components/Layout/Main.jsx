import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <Container style={{width: 'calc(100vh -64px)'}}>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
        </Container>

    );
};

export default Main;