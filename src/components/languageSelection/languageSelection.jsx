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
                size={35}
                style={{ marginRight: "1rem" }}
            />
            <Select
                onChange={(e) => setSelectedLanguage(e.target.value)}
                defaultValue=""
                variant="outlined"
                sx={{
                    "& .MuiSelect-select": {
                        fontSize: "1.5rem",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                    },
                    "& .MuiOutlinedInput-root": {
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
                <MenuItem value="fr" sx={{fontSize: "1.5rem"}}>Français</MenuItem>
                <MenuItem value="en" sx={{fontSize: "1.5rem"}}>English</MenuItem>
                <MenuItem value="es" sx={{fontSize: "1.5rem"}}>Español</MenuItem>
                <MenuItem value="it" sx={{fontSize: "1.5rem"}}>Italiano</MenuItem>
                <MenuItem value="ja" sx={{fontSize: "1.5rem"}}>Japanese</MenuItem>
                <MenuItem value="roomaji" sx={{fontSize: "1.5rem"}}>Roomaji</MenuItem>
                <MenuItem value="ko" sx={{fontSize: "1.5rem"}}>Korean</MenuItem>
                <MenuItem value="zh-Hans" sx={{fontSize: "1.5rem"}}>Simplified Chinese</MenuItem>
                <MenuItem value="zh-Hant" sx={{fontSize: "1.5rem"}}>Traditional Chinese</MenuItem>
                <MenuItem value="ja-Hrkt" sx={{fontSize: "1.5rem"}}>Kana Japanese</MenuItem>
            </Select>
        </Box>
    );
};


export default LanguageSelection;