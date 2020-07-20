import React, {useState} from 'react';
import "./slider.scss";

// Datas
import appDatas from '../../../../../assets/datas/appDatas';
import {ReactComponent as Line } from '../../../../../assets/images/Line.svg';
import btnLeft from '../../../../../assets/images/btnLeft.svg';
import btnRight from '../../../../../assets/images/btnRight.svg';
import { ReactComponent as SecondLine } from '../../../../../assets/logos/line.svg';

const Slider = () => {

    const maxIndex = appDatas.length - 1;
    const [index, setIndex] = useState(0);

    const handleClickLeft = () => {
        if (index === 0) {
            setIndex(maxIndex)
        } else {
            setIndex(index - 1)
        }
    };

    const handleClickRight = () => {
        if (index === maxIndex) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    };

    return (
        <div className="slider">
            <div className="slider-titles">
                {appDatas.map((data) => (
                    <h1 id={data.index === index ? "active" : ""}>{data.title}</h1>
                ))}
            </div>
            <Line className="slider-line" alt="line.svg"/>
            <div className="slider-slide">
                <img src={appDatas[index].background} alt="background"/>
                <img src={appDatas[index].img} id="absImg"alt="absolute"/>
                <h1 id="absTitle">{appDatas[index].subTitle}</h1>
                <p id="absText">{appDatas[index].text}</p>
                <div id="absSubImg">
                    {appDatas[index].subImg.map((img) => (
                        <img src={img} alt="subImg"/>
                    ))}
                </div>
                <img className="slider-btn left" src={btnLeft} alt="btn left" onClick={() => handleClickLeft()}/>
                <img className="slider-btn right" src={btnRight} alt="btn right" onClick={() => handleClickRight()}/>
            </div>
            <SecondLine className="lineSvgBottom"/>
        </div>
    );
};

export default Slider; 