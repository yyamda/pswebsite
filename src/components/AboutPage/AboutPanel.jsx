import styled from 'styled-components'
import HomePG from '../images/pictures/HomeBG.png'
import sp23Fellowship from '../images/pictures/fa22fellowship.png'
import AboutPanelPic from '../images/pictures/AboutPanelPic.png'



const Panel = styled.div`
    width: 100%;
    min-height: 700px;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    top: 0;
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
    width: 600px; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    // padding-left: 90px;
    align-items: flex-start;

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

    // border: solid yellow;

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    min-width: 350px;

    // border: solid blue;


    @media only screen and (max-width: 400px) {
        height: 600px;
        
        // border: solid black;

    }
`

const PictureContainer = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    
    animation: Appear 0.5s ease-in-out 0.5s both;

    @keyframes Appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    // border: solid black;

`
const PictureBox = styled.img`
    width: 800px;
    height: 620px;

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
                <PictureBox src={AboutPanelPic} />
            </PictureContainer>

    </Panel>

    )
}

export default AboutPanel;