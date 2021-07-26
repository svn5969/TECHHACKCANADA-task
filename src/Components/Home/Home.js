import React from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import './Home.css'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="content">

            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
};

export default Home;