import styled from 'styled-components'
import HomePG from '../images/HomeBG.png'
import { Link } from 'react-router-dom'

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


    @media only screen and (max-width: 400px) {
        display: flex; 
        flex-direction: column;
        width: 300px;
        text-align: center;
        justify-content: center;

    }
`
const OpeningHeader = styled.div`
    width: 30%; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 90px;

    // border: solid yellow;

    @media only screen and (max-width: 400px) {
        width: 70%;
        justify-content: center;
        align-items: center;
        left: 0;

        // border: solid yellow;
    }

    
`

const HeadingTitle = styled.div`
    font-size: 60px;
    font-weight: 450;

    @media only screen and (max-width: 400px) {
        width: 190px;
        display: flex; 

        text-align: center;

        // border: solid black;
    }

`

const HeadingSubtitle = styled.div`
    font-size: 25px;
    color: #656565;
    padding-bottom: 40px;

    @media only screen and (max-width: 400px) {
        width: 230px;
        display: flex; 
        text-align: center;
        // border: solid black;
    }
`

const ApplyButton = styled(Link)`
    height: 60px;
    width: 90px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 25px;
    color: white; 
    background-image: linear-gradient(to bottom, #EB5B8D, #ED7472);

    border: none;
    text-decoration: none;


    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 400px) {
        width: 90px;
        display: flex; 
        text-align: center;
        // border: solid black;
    }
`
const VideoContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 500px;
    // border: solid black;

    @media only screen and (max-width: 400px) {
        display: none;
    }


`
const Video = styled.div`

`
function OpeningPanel() {
    return (
        <Panel>
        <OpeningHeader>
            <HeadingTitle> Product Space @ Berkeley</HeadingTitle>
            <HeadingSubtitle> UC Berkeley Product Management Organization</HeadingSubtitle>
            <ApplyButton to="../Apply"> Apply </ApplyButton>
        </OpeningHeader>
        <VideoContainer>
            {/* <Video> Video</Video> */}
        </VideoContainer>
    </Panel>

    )
}

export default OpeningPanel;