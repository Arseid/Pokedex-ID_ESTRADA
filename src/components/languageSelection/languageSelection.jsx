import React, { useContext } from "react";
import { BiWorld } from "react-icons/bi";
import { LanguageContext } from "../../context/context";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const LanguageSelection = () => {
    const { setSelectedLanguage } = useContext(LanguageContext);

    return (
        <Box display="flex" alignItems="center">
            <BiWorld
                color={"white"}
                className="LanguageSelect-WorldIcon"
                size={35}
                sx={{ mr: 1 }}
            />
            <Select
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="LanguageSelect-Select"
                defaultValue=""
                sx={{
                    "& .MuiSelect-select": {
                        fontSize: "2rem",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                    },
                    "& .MuiOutlinedInput-root": {
                        borderColor: "white",
                        "&:hover": {
                            borderColor: "white"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        }
                    }
                }}
            >
                <MenuItem value="fr">Français</MenuItem>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Español</MenuItem>
                <MenuItem value="it">Italiano</MenuItem>
                <MenuItem value="ja">Japanese</MenuItem>
                <MenuItem value="roomaji">Roomaji</MenuItem>
                <MenuItem value="ko">Korean</MenuItem>
                <MenuItem value="zh-Hans">Simplified Chinese</MenuItem>
                <MenuItem value="zh-Hant">Traditional Chinese</MenuItem>
                <MenuItem value="ja-Hrkt">Kana Japanese</MenuItem>
            </Select>
        </Box>
    );
};


export default LanguageSelection;