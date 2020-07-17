import React from 'react';
import './home.scss';

// Import Components
import Header from './components/Header';
import Video from './components/Video';
import Application from './components/Application';

//
const Home = () => {
    return (
        <div id="home">
            <Header />
            <Video />
            <Application />
        </div>
    )
};

export default Home;