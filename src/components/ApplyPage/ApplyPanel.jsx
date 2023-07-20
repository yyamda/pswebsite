import styled from 'styled-components'
import ApplyBG from '../images/applyBG.png'
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
`

const PictureContainer = styled.div`
    height: 450px;;
    width: 600px;

    @media only screen and (max-width: 1270px) {
        display: none;
    }

    // border: solid black;

`
const PictureBox = styled.img`
    width: 780px;
    height: 500px;

`;

function ApplyPanel() {
    return (
        <Panel>
        <OpeningHeader>
            <HeadingTitle> Apply</HeadingTitle>
            <HeadingSubtitle> 
            Product Space welcomes anyone with a passion for PM 
            to apply. Join us and shape your product journey! You
             can also fill out our interest form here.
            </HeadingSubtitle>
        </OpeningHeader>
        <PictureContainer> 
            <PictureBox src={ApplyBG} />
        </PictureContainer>

        </Panel>

    )
}

export default ApplyPanel;