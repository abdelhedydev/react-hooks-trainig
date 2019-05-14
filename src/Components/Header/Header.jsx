import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { DarkModeContext } from '../../Context/Darkmode';

const HeaderWrapper = styled.div`
  background:${({ isDarkMode }) => (isDarkMode ? 'grey' : 'white')};
  position:absolute;
  top:0;
  left:0;
  min-height:120px;
  height:100%;
  width:100%;
  transition:all 2s;
  button{
    min-width:80px;
    background:transparent;
    border:none;
    transform:${({ isDarkMode }) => (isDarkMode ? 'rotate(-180deg)' : 'none')};
    transition:all 2s;
    font-size:30px;
  }
  a{
    position:absolute;
    right: 25px;
    top : 20px;
    font-weight:700;
    color:black;
    font-size:18px;
    text-decoration:underline;
  }
`;
const Header = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <HeaderWrapper isDarkMode={isDarkMode}>
      <Button
        text="🌓"
        onClick={() => setDarkMode(!isDarkMode)}
      />
      <a href="/login">Login</a>
    </HeaderWrapper>
  );
};

export default Header;
