import styled from 'styled-components'
import StudentsBG from '../images/StudentsBG.png'
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
    
    @media only screen and (max-width: 400px) {
        width: 100%;
        padding-left: 25px;

        // border: solid black;

    }



`
const OpeningHeader = styled.div`
    width: 45%; 
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 90px;

    @media only screen and (max-width: 400px) {
        display: flex; 
        align-items: center;

        // border: solid black;

    }

    // border: solid yellow;
`

const HeadingTitle = styled.div`
    font-size: 60px;
    padding-bottom: 20px;

`

const HeadingSubtitle = styled.div`
    font-size: 22px;
    padding-bottom: 40px;
    min-width: 350px;

    @media only screen and (max-width: 400px) {
        width: 350px;
        height: 300px;
        text-align: center;
        // border: solid red;
    }

`
const PictureContainer = styled.div`
    height: auto;
    width: 700px;

    // border: solid black;

    @media only screen and (max-width: 1500px) {
        display: none;
    }

`
const PictureBox = styled.img`
    width: 780px;
    height: 500px;

`;


function StudentPanel() {
    return (
        <Panel>
        <OpeningHeader>
            <HeadingTitle> Curricula</HeadingTitle>
            <HeadingSubtitle> 
            At Product Space, we invest a lot of our energies
             into creating educational programs that are relevant,
              high-impact, and full of insights into product management. 
              From tackling interviews to performing case studies on
               real-world issues, our members have made remarkable achievements
                putting what they’ve learned at Product Space into their
                 internships and beyond.
            </HeadingSubtitle>
        </OpeningHeader>
        <PictureContainer> 
            <PictureBox src={StudentsBG} />
        </PictureContainer>
        </Panel>

    )
}

export default StudentPanel;