import React from 'react';
import './header.scss';
import img from '../../../../assets/images/5fa1ea12eb579b051338ae6dce5eec8c.jpg';

// Import components
import Nav from '../Nav';

const Header = () => {
    return (
        <header>
                <img src={img} alt="img.jpg" />
                <Nav />
        </header>
    );
};

export default Header;