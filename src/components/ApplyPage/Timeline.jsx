import styled from 'styled-components'
import { Link } from "react-router-dom"


const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin-top: 50px;
    margin-bottom: 80px;

`
const Header = styled.div`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    // padding-left: 450px;
    // padding-bottom: 50px;
`

const Table = styled.div`
    margin-top: 45px;
    height: auto;
    width: 70%;
    

    display: flex; 
    flex-direction: column;
    justify-content: center; 
    // align-items: center;
    

    // border: solid black; 


    @media only screen and (max-width: 450px) {
        width: auto
    }
`

const Row = styled.div`
    display: flex; 
    justify-content: flex-start;

`
const DateRow = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 

    width: 200px;

    // border: solid black;
    @media only screen and (max-width: 450px) {
        margin-right: 15px;
        width: 100px;
    }
`

const DateText = styled.div`
    width: 125px;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;

    // border: solid yellow;
`
const InfoRow = styled.div`
    display: flex; 
    flex-direction: column;
    
    min-height: 200px;
    height: auto;
    padding-left: 30px;
    border-bottom: solid #DEDEDE; 
    border-bottom-width: 1px;
    align-content: center;
    background-color: #FEF4F7;
    border-left: solid #EB5B8D;
    border-left-width: 5px;
    width: 800px;

    background-image: linear-gradient(to right, transparent, transparent 100px, #F9D4DF);
    background-position: left bottom;
    background-size: 100% 3px;

    // border: solid purple;

    @media only screen and (max-width: 1000px) {
        height: auto;
    }
    @media only screen and (max-width: 450px) {
        width: 200px;
    }
`

const RowTitle = styled.div`
    font-family: Arial, sans-serif;
    font-size: 30px;
    font-weight: 400;  
    padding-top: 25px;
    padding-bottom: 25px;

    // border: solid red; 
`

const RowDescription = styled.div` 
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 15px;

    // border: solid yellow; 
`
const RowLocation = styled.div` 

    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #EB5B8D;
    margin-top: 5px;
    margin-bottom: 5px;

    // border: solid blue; 
`

const Subtitle = styled.div`
    color: #EB5B8D;
    font-size: 18px;
    // font-weight: 500;
    text-decoration: none;

    margin-top: 10px;
    // width: 400px;

    @media only screen and (max-width: 450px) {
        width: auto;
        text-align: center;
        // border: solid red;
    }
`

const ALink = styled(Link)`
    font-weight: 700;
    text-decoration: none;
`



const handleLinkClick = () => {
    window.scrollTo(0, 1200);
  };


function Timeline() {
    return(
        <Container> 
            
            <Header> TIMELINE FOR FALL 2023 </Header>
            <Table>
                <Row> 
                    <DateRow>
                        <DateText> 8/23 (Wed) - 9/1 (Fri) </DateText>
                    </DateRow> 
                    <InfoRow> 
                        <RowTitle> Tabling & Coffee Chats Open </RowTitle>
                        <RowDescription>
                            Find us tabling at Sproul or sign up for coffee chats with members at
                            Product Space to learn more about the club! 
                            <ALink to="../About" onClick={handleLinkClick}>
                                <Subtitle> *Click here to sign up for coffee chats</Subtitle>
                            </ALink>
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row>
                    <DateRow>
                        <DateText> 8/28 (Mon) </DateText>
                    </DateRow> 
                    <InfoRow> 
                        <RowTitle> Applications Open </RowTitle>
                        <RowDescription>
                            Application form will be linked above!
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText> 8/29 (Tues)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> Info Session (8 - 10 PM PT) </RowTitle>
                        <RowLocation> Location: Latimer 120</RowLocation>
                        <RowDescription>
                            Join us to get a glimpse into the way we do 
                            things at Product Space @ Berkeley.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText> 8/31 (Thurs)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> PS Case Workshop (8 - 10 PM PT) </RowTitle>
                        <RowLocation> Location: Latimer 120 </RowLocation>
                        <RowDescription>
                        Whether you're completely new to PM or experienced, 
                        the Intro to PM workshop—led by a senior PS member—is 
                        an excellent way to be introduced to product
                        management. We will also go over a popular product 
                        case interview framework that we recommend to use 
                        for our Final Round Interview!
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText> 9/1 (Fri) </DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> Applications Close! (12AM Midnight)  </RowTitle>
                        <RowDescription>
                        Submit your Product Space application by midnight Pacific Time on this date!
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText> 9/3 (Sun) - 9/4 (Mon) </DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> 1st Round Interviews (invite only)</RowTitle>
                        <RowDescription>
                        We'll cover a couple of behavioral question to learn 
                        more about you and your interest in Product Space.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText> 9/5 (Tues) - 9/6 (Wed) </DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> Final Round Interviews (invite only)</RowTitle>
                        <RowDescription>
                        We'll ask you to walk us through a product design question.
                        </RowDescription>
                    </InfoRow>
                </Row>
                <Row> 
                    <DateRow>
                        <DateText> 9/6 (Wed) </DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> Social Night (7-9PM PT) (invite only)</RowTitle>
                        <RowDescription>
                        Meet all of us in Product Space at our social night!
                        </RowDescription>
                    </InfoRow>
                </Row>


            </Table>
        </Container>
    )
}

export default Timeline; 