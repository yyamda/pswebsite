import styled from 'styled-components'
import hubspot from "../images/hubspot2.png"
import amex from "../images/amex.png"
import box from "../images/box.png"
import edmodo from "../images/edmodo.png"
import bartleby from "../images/bartleby.png"
import sega from "../images/sega.png"
import atsign from "../images/atsign.png"




const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    gap: 30px;
    padding-bottom: 70px;

    @media only screen and (max-width: 400px) {
        display: none;
     }
`
const Heading = styled.div`
    color: #EB5B8D;
    font-size: 40px;
    font-weight: 500;

    padding-bottom: 50px;

`

const Logos = styled.img`
    width: auto;
    height: auto;
    // transform: scale(0.7);



    // border: solid black;

`
const LogoContainerBeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding-bottom: 80px;
    gap: 70px;
    // border: solid black; 
    
`

function CaseStudies() {
    return (
       <Container>
        <Heading> PAST CLIENTS </Heading>
        <LogoContainerBeta>
                    <Logos src={amex} alt="AMEX"/>
                    <Logos src={box} alt="box"/>
                    <Logos src={hubspot} alt="hubspot"/>
                    <Logos src={sega} alt="sega"/>
                    <Logos src={bartleby} alt="bartleby"/>
                    <Logos src={edmodo} alt="edmodo"/>
                    <Logos src={atsign} alt="atsign"/>
                </LogoContainerBeta>
       </Container>
    )
}

export default CaseStudies