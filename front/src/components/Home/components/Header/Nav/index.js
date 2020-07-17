import React from 'react';
import './nav.scss';

// Logos
import { ReactComponent as Cart } from '../../../../../assets/logos/cart.svg';
import { ReactComponent as Ellipse } from '../../../../../assets/logos/ellipse.svg';
import { ReactComponent as Search } from '../../../../../assets/logos/search.svg';
import { ReactComponent as User } from '../../../../../assets/logos/user.svg';
import { ReactComponent as Home } from '../../../../../assets/logos/home.svg';
import { ReactComponent as Logo } from '../../../../../assets/logos/logo.svg';

const Nav = () => {
    return (
        <nav>
            <div className="menu">
                <div className="menu-left">
                    <ul>
                        <li><a href="/*"><Home width="16px" height="14.27px"/></a></li>
                        <li><a href="/*">Le bar connecté</a></li>
                        <li><a href="/*" className="active">Cartouches</a></li>
                        <li><a href="/*">Accessoires</a></li>
                    </ul>
                </div>
                <div className="menu-center">
                   <Logo/>
                </div>
                <div className="menu-right">
                    <ul>
                        <li><a href="/*" >Cocktails</a></li>
                        <li><a href="/*" >Food</a></li>
                        <li><a href="/*" >Recevoir</a></li>
                        <li><a href="/*"><Search width="13.33px" height="13.33px"/></a></li>
                        <li><a href="/*"><User width="12.78px" height="13.33px"/></a></li>
                        <li><a href="/*"><Cart width="13.33px" height="16px"/></a></li>
                        <li><a href="/*"><Ellipse width="16px" height="16px"/><p>1</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="rassurance">

            </div>
        </nav>
    );
};

export default Nav;
