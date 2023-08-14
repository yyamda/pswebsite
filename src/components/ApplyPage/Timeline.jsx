import styled from 'styled-components'


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
`

const Table = styled.div`
    margin-top: 45px;
    height: auto;
    width: 70%;

    // border: solid black; 


    @media only screen and (max-width: 400px) {
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
    @media only screen and (max-width: 400px) {
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
    height: 200px;
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
    @media only screen and (max-width: 400px) {
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
                            Sign up for coffee chats with members at
                            Product Space and get 
                            a head start on the application! 
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
                        <DateText> 8/30 (Wed)</DateText>
                    </DateRow>
                    <InfoRow> 
                        <RowTitle> Info Session (8 - 10 PM PT) </RowTitle>
                        <RowLocation> Location: TBD</RowLocation>
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
                        <RowLocation> Location TBD </RowLocation>
                        <RowDescription>
                        Whether you're completely new to PM or experienced, 
                        the Intro to PM workshop—led by a senior PS member—is 
                        an excellent way to see how we go about teaching product
                         management.
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
                        <DateText> 9/3 (Mon) - 9/4 (Tues) </DateText>
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
                        <DateText> 9/5 (Wed) - 9/6 (Thurs) </DateText>
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
                        <DateText> 9/6 (Thurs) </DateText>
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