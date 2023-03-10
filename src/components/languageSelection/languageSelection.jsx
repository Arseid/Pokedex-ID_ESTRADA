import React, {useContext} from "react";
import {BiWorld} from 'react-icons/bi';
import "./languageSelection.css";
import {LanguageContext} from "../../context/context";

const LanguageSelection = () => {
    const {setSelectedLanguage} = useContext(LanguageContext)

    return <div className="LanguageSelect-Container">
        <BiWorld color={"white"} className="LanguageSelect-WorldIcon" size={35}/>
        <select onChange={(e) => setSelectedLanguage(e.target.value)} className="LanguageSelect-Select">
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
            <option value="ja">Japanese</option>
            <option value="roomaji">Roomaji</option>
            <option value="ko">Korean</option>
            <option value="zh-Hans">Simplified Chinese</option>
            <option value="zh-Hant">Traditional Chinese</option>
            <option value="ja-Hrkt">Kana Japanese</option>
        </select>
    </div>;
};

export default LanguageSelection;