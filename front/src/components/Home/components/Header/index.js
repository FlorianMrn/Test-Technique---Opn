import React from 'react';
import './header.scss';

// Import Img
import img from '../../../../assets/images/5fa1ea12eb579b051338ae6dce5eec8c.jpg';

// Import components
import Nav from './Nav';
import Txt from './Txt';

const Header = () => {
    return (
        <header>
                <div className="img-container" />
                <img src={img} alt="img.jpg" />
                <Nav />
                <Txt />
        </header>
    );
};

export default Header;