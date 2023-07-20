import styled from 'styled-components'
import CareerBG from '../images/PlacementBG.png'
import HomePG from '../images/HomeBG.png'


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


    // border: solid black; 
`
const OpeningHeader = styled.div`
    width: 45%; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 90px;

    // border: solid yellow;
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    height: auto; 
    min-width: 250px;
`

const PictureContainer = styled.div`
    height: auto;
    width: 700px;

    // border: solid black;
    @media only screen and (max-width: 1450px) {
        display: none;
    }

`
const PictureBox = styled.img`
    width: 780px;
    height: 500px;

`;

function CareerPanel() {
    return (
        <Panel>
        <OpeningHeader>
            <HeadingTitle> Careers</HeadingTitle>
            <HeadingSubtitle> 
            Product Space represents a significant proportion 
            of associate product managers from UC Berkeley. 
            From Google to Reddit to Twitter, 17 APM and PM 
            programs have had Product Space members as an intern 
            or full-timer. We've compiled our members' career 
            placement for 2023 below.
            </HeadingSubtitle>
        </OpeningHeader>
        <PictureContainer> 
            <PictureBox src={CareerBG} />
        </PictureContainer>

        </Panel>

    )
}

export default CareerPanel;