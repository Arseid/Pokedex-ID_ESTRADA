import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ searchInputValue, searchPokemon }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <TextField
                placeholder="Enter a pokemon name"
                value={searchInputValue}
                onChange={searchPokemon}
                autoFocus
                fullWidth
                variant="outlined"
                sx={{
                    "& .MuiOutlinedInput-input": {
                        fontSize: "1.7rem",
                        height: "3rem",
                        color: 'white'
                    },
                }}
            />
        </div>
    );
};


export default SearchBar;