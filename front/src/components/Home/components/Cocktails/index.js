import React from 'react';
import "./cocktails.scss";

// Datas
import cocktailsDatas from '../../../../assets/datas/cocktailsDatas';

const Cocktails = () => {
    return (
        <div className="cocktails">
            <h5 className="cocktails-title">Notre selection de cocktails</h5>
            {cocktailsDatas.map((cocktail) => (
                <div className="cocktails-cocktail">
                    <img src={cocktail.img} alt="cocktail" />
                    <p>{cocktail.name}</p>
                    <img src={cocktail.taste} alt ="cocktail taste" />
                </div>
            ))}
            <div className="articles-btn cocktail"><p>Voir plus de recettes</p></div>
        </div>
    );
};

export default Cocktails;