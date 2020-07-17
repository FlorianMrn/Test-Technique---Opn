import React from 'react';
import './application.scss';

// Import component
import Slider from "./Slider";

const Application = () => {
    return (
        <div className="application">
            <div className="application-header">
                <h1>Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !</h1>
            </div>
            <Slider />
        </div>
    );
};

export default Application