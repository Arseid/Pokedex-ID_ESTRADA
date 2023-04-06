import React from "react";
import Logo from "../logo/logo";
import LanguageSelection from "../languageSelection/languageSelection";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const LanguageSelectionContainer = styled.div`
  margin-right: 20px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <LanguageSelectionContainer>
                <LanguageSelection />
            </LanguageSelectionContainer>
        </HeaderContainer>
    );
};

export default Header;