import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeLogo from './images/psHomeLogo.png'

const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };


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

    // border: solid black;

    @media only screen and (max-width: 900px) {
        display: flex; 
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 40px;
        padding-top: 30px;
        padding-right: 60px;
        flex-wrap: wrap;
        height: auto;
    }

    @media only screen and (max-width: 400px) {
        display: flex; 
        width: 300px; 
        padding-left: 30px;
        padding-bottom: 20px;
        padding-top: 30px;
        padding-right: 60px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        height: auto;
        gap: 20px;

        // border: solid black;
    }

`


const ListItem = styled(Link)`
    color: #1C2838;
    font-size: 20px;
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
function Navbar() {
  return (
    <Container>
        <HomeContainer>
            <div> 
                <Link to="/Home" >
                    <HomeIcon src={HomeLogo} alt='ImageNotLoading'/>
                </Link>
            </div>
        </HomeContainer>
        <ListItem to="/Home" onClick={handleLinkClick}> Home </ListItem>
        <ListItem to="/About" onClick={handleLinkClick}> About </ListItem>
        <ListItem to="/Students" onClick={handleLinkClick}> Students </ListItem>
        <ListItem to="/Companies" onClick={handleLinkClick}> Companies </ListItem>
        <ListItem to="/Careers" onClick={handleLinkClick}> Careers </ListItem>
        <ListItem to="/Apply" onClick={handleLinkClick}> Apply </ListItem>
    </Container>
  );
}

export default Navbar;
