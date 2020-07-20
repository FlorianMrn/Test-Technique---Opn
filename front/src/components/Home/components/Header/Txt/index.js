import React from 'react';
import './txt.scss';

// Logos
import { ReactComponent as Play } from '../../../../../assets/logos/play.svg';

const Txt = () => {
    return (
        <aside>
            <div className="left">
                <h1>L'experience</h1>
                <h1>cocktail</h1>
                <h1>à la maison</h1>
            </div>
            <div className="right">
                <h2>Opn, votre bar connecté à domicile</h2>
                <p>Le premier bar connecté qui vous permet de créer des centaines de cocktails à la maison en s’amusant.</p>
                <div className="right-link">
                    <Play />
                    <a href="/*">Découvrir OPN en détails - 1’40</a>
                </div>
                <div className="right-btn">
                    <p>Découvrir le starter pack</p>
                </div>
                <a href="/*">Déja opner ? Rechargez votre bar.</a>
            </div>
        </aside>
    );
};

export default Txt;