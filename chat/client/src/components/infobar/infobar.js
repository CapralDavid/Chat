import React from 'react';

import './Infobar.css';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

//СДЕЛАТЬ CSS
//найти в инете иконки для онлайн(можно просто зеленый кружочек) onlineIcon
//иконка closeIcon  (они должны быть в папке ./src/icons)
//может облагородить,добавить анимации?

//див rightInnContainer должен быть справа.по сути это кнопка для выхода из комнаты.  leftInnContainer показывает в какой комнате

//в onlineicon и imageclose нужно включить src= картинки
let infobar = ({ room }) => (
    <div className = "infobar">
        <div className="leftInnContainer">
            <img className="onlineIcon" src = {onlineIcon} alt="ImageOnline" />
            <h3 color = "black">{ room }</h3>
        </div>
        <div className="rightInnContainer">
            <a href="/"><img src={closeIcon}  alt="ImageClose" /></a>
        </div>
    </div>

);
//<img className="onlineIcon" src = {onlineIcon} alt="ImageOnline" />
//<a href="/"><img src={closeIcon} alt="ImageClose" /></a>


export default infobar;