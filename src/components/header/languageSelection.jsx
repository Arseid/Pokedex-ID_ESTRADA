import React from "react";
import {BiWorld} from 'react-icons/bi';
import "../../style/languageSelection.css";

const LanguageSelection = () => {

    const [selectedLanguage, setSelectedLanguage] = React.useState("FR");

    const handleChange = (e) => {
        setSelectedLanguage(e.target.value);
        console.log(`${selectedLanguage} selected`);
    }

    return <div className="LanguageSelect-Container">
        <BiWorld color={"white"} className="LanguageSelect-WorldIcon" size={35}/>
        <select onChange={(e) => handleChange(e)} className="LanguageSelect-Select">
            <option value="FR">Français</option>
            <option value="EN">English</option>
        </select>
    </div>;
};

export default LanguageSelection;