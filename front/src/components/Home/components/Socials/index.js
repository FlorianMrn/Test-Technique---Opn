import React from 'react';
import './socials.scss';

// Datas
import FB from '../../../../assets/images/FB.svg';
import INT from '../../../../assets/images/INT.svg';

const Socials = () => {
    return (
        <div className="socials">
            <div className="socials-left">
                <div className="socials-left-content">
                    <p>Des cocktails dans votre boîte mail !</p>
                    <p>Nos recettes, nos conseils et nos histoires tous les mois.</p>
                    <form onSubmit={ (e) => e.preventDefault()}>
                        <input type="email" placeholder="Votre adresse mail ..."/>
                        <input type="submit" value="Je m'inscris"/>
                    </form>
                </div>
            </div>
            <div className="socials-right">
                <p>Rejoignez-nous</p>
                <p>Nos recettes, nos conseils et nos histoires tous les mois.</p>
                <div className="socials-right-tpl">
                    <a href="/*"><img src={FB} id="socialImg" alt="Facebook" /></a>
                    <a href="/*"><img src={INT} alt="Instagram" /></a>
                </div>
            </div>
        </div>
    );
};

export default Socials;