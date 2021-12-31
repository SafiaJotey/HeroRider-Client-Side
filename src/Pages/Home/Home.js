import React from 'react';
import Banner from './../../Components/Banner/Banner';
import Navigation from './../../Components/Navigation/Navigation';
import Footer from './../../Components/Footer/Footer';
import About from '../../Components/About/About';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
           <Banner></Banner>
           <About></About>
           <Footer></Footer>
        </div>
    );
};

export default Home;