import React from 'react';
import './articles.scss';

// Datas
import articlesDatas from "../../../../assets/datas/articlesDatas";
import {ReactComponent as LineArticle } from "../../../../assets/images/LineArticle.svg";

const Articles = () => {
    return (
        <div className="articles">
            <h1>Besoin d’inspiration pour votre prochaine soirée maison ?</h1>
            <h2>Des centaines de recettes ou idées à découvrir sur notre application ou sur notre magazine</h2>
            <h5>Les derniers articles</h5>
            <div className="articles-slider">
                {articlesDatas.map((data) => (
                    <a href="/*">
                    <div className="articles-slider-container">
                        <img src={data.img} alt="article" className="articles-slider-container-img"/>
                        <div className="articles-slider-container-article">
                            <p>{data.p}</p>
                            <h6>{data.h6}</h6>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
            <div className="articles-btn"><p>Voir plus de publications</p></div>
            <LineArticle />
        </div>
    );
};

export default Articles;