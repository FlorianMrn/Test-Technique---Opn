import React from 'react';
import './home.scss';

// Import Components
import Header from './components/Header';
import Video from './components/Video';
import Application from './components/Application';
import Articles from './components/Articles';
import Cocktails from './components/Cocktails';

//
const Home = () => {
    return (
        <div id="home">
            <Header />
            <Video />
            <Application />
            <Articles />
            <Cocktails />
        </div>
    )
};

export default Home;