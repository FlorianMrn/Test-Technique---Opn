import React from 'react';
import './video.scss';

// Logos
import { ReactComponent as Glass } from '../../../../assets/logos/glass.svg';
import { ReactComponent as Jigger } from '../../../../assets/logos/jigger.svg';
import { ReactComponent as World } from '../../../../assets/logos/world.svg';
import { ReactComponent as Refill } from '../../../../assets/logos/refill.svg';
import { ReactComponent as Union } from '../../../../assets/logos/union.svg';
import { ReactComponent as Stand } from '../../../../assets/logos/stand.svg';
import { ReactComponent as Play } from '../../../../assets/logos/play.svg';

// Img
import VideoImg from '../../../../assets/images/video.png';

const Video = () => {
    return (
        <main>
            <div className="header">
                <h1>Redécouvrez le plaisir d’une soirée cocktails à la maison</h1>
            </div>
            <div className="aside">
                <div className="aside-left">
                    <div>
                        <Glass />
                        <p>Des recettes à découvrir et personnaliser en fonction de vos goûts</p>
                    </div>
                    <div>
                        <Jigger className="jiggerSvg"/>
                        <p>Des dosages précis pour réaliser vos cocktails favoris</p>
                    </div>
                    <div>
                        <World />
                        <p>Des alcools reconnus mondialement</p>
                    </div>
                </div>
                <div className="aside-center">
                    <img src={VideoImg} alt="video.png"/>
                    <a href="/*"><Play className="videoSvg"/></a>
                </div>
                <div className="aside-right">
                    <div>
                        <Refill />
                        <p>Une gestion et un réapprovisionnement facilité de votre bar</p>
                    </div>
                    <div>
                        <Union />
                        <p>Un accès contrôlé et sécurisé à vos alcools préférés</p>
                    </div>
                    <div>
                        <Stand />
                        <p>Un design moderne et élégant s’intégrant dans votre quotidien</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Video;