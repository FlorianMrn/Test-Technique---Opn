import React from 'react';
import './home.scss';

// Import Components
import Header from './components/Header';
import Video from './components/Video';

//
const Home = () => {
    return (
        <div id="home">
            <Header />
            <Video />
        </div>
    )
};

export default Home;