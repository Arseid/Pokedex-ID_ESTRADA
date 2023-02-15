import React from "react";
import {BiWorld} from 'react-icons/bi';
import "../../style/languageSelection.css";

const LanguageSelection = ({handleChange}) => {

    return <div className="LanguageSelect-Container">
        <BiWorld color={"white"} className="LanguageSelect-WorldIcon" size={35}/>
        <select onChange={(e) => handleChange(e)} className="LanguageSelect-Select">
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
            <option value="ja">Japanese</option>
            <option value="roomaji">Roomaji</option>
            <option value="ko">Korean</option>
        </select>
    </div>;
};

export default LanguageSelection;