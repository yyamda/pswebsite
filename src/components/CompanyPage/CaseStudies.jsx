import styled from 'styled-components'
import hubspot from "../images/company/hubspot2.png"
import amex from "../images/company/amex.png"
import box from "../images/company/box.png"
import edmodo from "../images/company/edmodo.png"
import bartleby from "../images/company/bartleby.png"
import sega from "../images/company/sega.png"
import atsign from "../images/company/atsign.png"




const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    gap: 30px;
    padding-top: 100px;
    padding-bottom: 70px;

    @media only screen and (max-width: 450px) {
        display: none;
     }
`
const Heading = styled.div`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;

    padding-bottom: 50px;

`

const Logos = styled.img`
    width: ${(props) => props.width ? `${props.width}px` : 'auto'};
    height: ${(props) => props.height ? `${props.height}px` : 'auto'};
    // transform: scale(0.7);

    // border: solid black;

`
const LogoContainerBeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding-bottom: 80px;
    gap: 70px;
    width: 1200px;

    // border: solid black; 

    @media only screen and (max-width: 1500px) {
        max-width: 1200px;
        width: auto; 
    }
    
`

function CaseStudies() {
    return (
       <Container>
        <Heading> PAST CLIENTS </Heading>
        <LogoContainerBeta>
                    <Logos src={amex} alt="AMEX" weight={150}  height={100}/>
                    <Logos src={box} alt="box" weight={150}  height={100}/>
                    <Logos src={hubspot} alt="hubspot" weight={180}  height={100}/>
                    <Logos src={sega} alt="sega" weight={100}  height={100}/>
                    <Logos src={bartleby} alt="bartleby" weight={100} height={100}/>
                    <Logos src={edmodo} alt="edmodo" weight={150}  height={100}/>
                    <Logos src={atsign} alt="atsign" weight={110}  height={100}/>
                </LogoContainerBeta>
       </Container>
    )
}

export default CaseStudies