import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeLogo from './images/psHomeLogo.png'
import hamburgerIcon from './images/hamburgerIcon.png'
import React, { useState } from 'react'

const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%; 
    height: 70px;
    display: flex; 
    align-items: center;
    gap: 50px;
    background: #FFFDFD;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.2); 
    overflow: hidden;

    @media only screen and (max-width: 780px) {
      overflow: visible;
  }
`


const ListItem = styled(Link)`
    color: #1C2838;
    font-size: 16px;
    text-decoration: none;

    // border: black solid;

    @media only screen and (max-width: 400px) {
        // border: solid black;
    }
`;

const HomeIcon = styled.img`
    height: 50px;
    margin-left: 30px;

    // border: solid red;
`
const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    // border: solid black;
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  display: none;
  // cursor: pointer;

  @media only screen and (max-width: 780px) {
    position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
    margin-right: 40px;
    overflow: visible;
  
    top: 0;
    right: 0;
    // border: solid black;
  }
`;


const DropdownItemContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
  width: 200px;
  height: 600px;

  // border: solid blue;

`
const DropdownListItem = styled(Link)`
    color: #1C2838;
    font-size: 16px;
    text-decoration: none;
    width: 200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    align-items: center; 

    // border: black solid;


`;

const HamburgerIcon = styled.img`
    display: flex;
    width: 40px;
    height: 30px;
    cursor: pointer;
    // margin-top: 20px;
    // border: solid blue;

`;


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
      window.scrollTo(0, 0);
  };

  return (
    <Container>
        <HomeContainer>
          <Link to="/Home" >
            <HomeIcon src={HomeLogo} alt='ImageNotLoading'/>
          </Link>
        </HomeContainer>
        <ItemContainer>
            <ListItem to="/Home" onClick={handleLinkClick}> Home </ListItem>
            <ListItem to="/About" onClick={handleLinkClick}> About </ListItem>
            <ListItem to="/Students" onClick={handleLinkClick}> Students </ListItem>
            <ListItem to="/Companies" onClick={handleLinkClick}> Companies </ListItem>
            <ListItem to="/Careers" onClick={handleLinkClick}> Careers </ListItem>
            <ListItem to="/Apply" onClick={handleLinkClick}> Apply </ListItem>
        </ItemContainer>
        <DropdownContainer>
          <HamburgerIcon src={hamburgerIcon} onClick={() => handleClick()}/>
          {
          isOpen && 
            <DropdownItemContainer>
              <DropdownListItem to="/Home" onClick={handleLinkClick}> Home </DropdownListItem>
              <DropdownListItem to="/About" onClick={handleLinkClick}> About </DropdownListItem>
              <DropdownListItem to="/Students" onClick={handleLinkClick}> Students </DropdownListItem>
              <DropdownListItem to="/Companies" onClick={handleLinkClick}> Companies </DropdownListItem>
              <DropdownListItem to="/Careers" onClick={handleLinkClick}> Careers </DropdownListItem>
              <DropdownListItem to="/Apply" onClick={handleLinkClick}> Apply </DropdownListItem>
            </DropdownItemContainer>
        }
        </DropdownContainer>
                
{/* 
        <DropdownMenu> 
            <ListItem to="/Home" onClick={handleLinkClick}> Home </ListItem>
            <ListItem to="/About" onClick={handleLinkClick}> About </ListItem>
            <ListItem to="/Students" onClick={handleLinkClick}> Students </ListItem>
            <ListItem to="/Companies" onClick={handleLinkClick}> Companies </ListItem>
            <ListItem to="/Careers" onClick={handleLinkClick}> Careers </ListItem>
            <ListItem to="/Apply" onClick={handleLinkClick}> Apply </ListItem>
        </DropdownMenu> */}
    </Container>
  );
}

export default Navbar;
