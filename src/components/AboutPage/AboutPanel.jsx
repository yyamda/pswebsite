import styled from 'styled-components'
import HomePG from '../images/HomeBG.png'
import PSPicture1 from '../images/AboutBG.png'
import MaskBlob from '../images/blob.svg'



const Panel = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // margin-top: 70px;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    @media only screen and (max-width: 400px) {
        margin-bottom: 100px;
    }

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


    @media only screen and (max-width: 400px) {
        width: 70%;
        text-align: center;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 60px;
        padding-top: 150px;
        // flex-wrap: wrap;
    }
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

`

const HeadingSubtitle = styled.div`
    font-size: 26px;
    padding-bottom: 40px;

    @media only screen and (max-width: 400px) {
        height: 600px;

        // border: solid black;

    }
`

const PictureContainer = styled.div`
    height: auto;

    @media only screen and (max-width: 1400px) {
        display: none;
    }
    // border: solid black;

`
const PictureBox = styled.img`
    width: 680px;
    height: 420px;

`;

function AboutPanel() {
    return (
        <Panel>
        <OpeningHeader>
            <HeadingTitle> Mission</HeadingTitle>
            <HeadingSubtitle> 
            At Product Space, our mission is to help undergraduate 
            students nurture the skills demanded in this field so 
            they can thrive as product leaders and help others who are
             interested in product management. To accomplish this, we
              continue to build a strong, engaged community of future 
              product managers who are excited to embark on their product 
              journey and desire to give back as much as they take.
            </HeadingSubtitle>
        </OpeningHeader>
        <PictureContainer> 
            <PictureBox src={PSPicture1} />
        </PictureContainer>

    </Panel>

    )
}

export default AboutPanel;