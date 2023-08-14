import styled from 'styled-components'
import ApplyBG from '../images/applyBG.png'
import HomePG from '../images/HomeBG.png'
import { Link } from "react-router-dom"


const Panel = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;


    @media only screen and (max-width: 400px){
        display: flex; 
        justify-content: center;
        align-items: center;
    }
    // border: solid black; 
`
const OpeningHeader = styled.div`
    width: 45%; 
    height: 550px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    gap: 10px;
    padding-left: 90px;

    // border: solid yellow;

    @media only screen and (max-width: 400px) {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        padding-left: 0px;

        // border: solid yellow;
        
    }
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

    @media only screen and (max-width: 400px) {
        margin-top: 30px;
        text-align: center;

        // border: solid red;
    }

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    width: 600px;

    // border: solid black;

    display: flex;
    flex-direction: column;
    min-height: 0; /* Allow content to expand vertically */

    @media only screen and (max-width: 400px) {
        width: 250px;
        text-align: center;
        // border: solid red;
    }
`


const Subtitle = styled.div`
    color: #EB5B8D;
    font-size: 18px;
    // font-weight: 500;
    text-decoration: none;

    margin-top: 10px;
    width: 400px;

    @media only screen and (max-width: 400px) {
        width: 250px;
        text-align: center;
        // border: solid red;
    }
`

const HeadingInfo = styled.div`

`
const ALink = styled(Link)`
    font-weight: 700;
    text-decoration: none;
`

const MoreInfo = styled.div`
    margin-top: 100px;

    // border: solid red;
`

const handleLinkClick = () => {
    window.scrollTo(0, 1200);
  };

function ApplyPanel() {
    return (
        <Panel>
        <OpeningHeader>
            <HeadingTitle> Apply</HeadingTitle>
            <HeadingSubtitle> 
                <HeadingInfo>
                Product Space welcomes anyone with a passion for PM 
                to apply. Join us and shape your product journey! 
                </HeadingInfo>

                <MoreInfo>
                    <Subtitle> *Applications open 8/28 (Mon). </Subtitle>
                    <Subtitle> You can find us tabling on campus, coffee chat our members, or attend our recruitment events! </Subtitle>
                    <ALink to="../About" onClick={handleLinkClick}>
                        <Subtitle> *Sign up for coffee chats here</Subtitle>
                    </ALink>
                </MoreInfo>
            </HeadingSubtitle>
        </OpeningHeader>
        

        </Panel>

    )
}

export default ApplyPanel;