import styled from "styled-components"
import duolingo from "../images/duolingoLogo.png"
import databricks from "../images/databricksLogo.png"
import google from "../images/googleLogo.png"
import salesforce from "../images/salesforceLogo.png"
import microsoft from "../images/microsoftLogo.png"
import hubspot from "../images/hubspot2.png"
import amex from "../images/amex.png"
import eagames from "../images/eagames2.png"
import tesla from "../images/tesla2.png"
import robinhood from "../images/robinhood2.png"
import apple from "../images/apple2.png"
import blizzard from "../images/blizzard2.png"
import zoom from "../images/zoom2.png"



const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 80px;

    // border: solid black;
`
const HeaderText = styled.h1`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;
`
const Description = styled.h2`
    color: purple;
    font-size: 20px;
    font-weight: normal;
    width: 60%;
    text-align: center;
    line-height: 2;

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

    @media only screen and (max-width: 400px) {
        display: none;

    }
`


function BeyondPS() {
    return(
        <Container>
            <TextContainer>
                 <HeaderText>BEYOND PRODUCT SPACE</HeaderText>
                 <Description> 
                 Our members and alumni have continued their product 
                 management journeys at a variety of companies through 
                 internships and full-time opportunities.
                 </Description>
            </TextContainer>
                <LogoContainerBeta>
                    <Logos src={salesforce} alt="Salesforce"/>
                    <Logos src={google} alt="Google"/>
                    <Logos src={duolingo} alt="Duolingo"/>
                    <Logos src={databricks} alt="Databricks"/>
                    <Logos src={microsoft} alt="Microsoft"/>
                    <Logos src={hubspot} alt="hubspot"/>
                    <Logos src={amex} alt="AMEX"/>
                    <Logos src={eagames} alt="EAGames"/>
                    <Logos src={tesla} alt="Tesla"/>
                    <Logos src={robinhood} alt="Robinhood"/>
                    <Logos src={apple} alt="Apple"/>
                    <Logos src={blizzard} alt="Blizzard"/>
                    <Logos src={zoom} alt="Zoom"/>

            
                </LogoContainerBeta>

        </Container>
    )
}

export default BeyondPS;