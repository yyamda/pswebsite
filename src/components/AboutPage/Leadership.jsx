import styled from "styled-components"
import tyler from "../images/tyler.png"

const Container = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-direction: column;

    @media only screen and (max-width: 400px) {
        margin-top: 70px;

    }
`

const HeadingText = styled.h2`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;
    padding-bottom: 20px;

`

const LeadersContainer = styled.div`
    width: 80%;
    height: auto;
    align-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    gap: 25px;


    // border: black solid;
`
const LeaderCard = styled.div`
    width: 300px;
    height: 450px;

    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;

    &:hover {
        border: solid black;
      }

    // border: solid black;

`

const LeaderName = styled.h2`
    font-weight: normal;
`
const LeaderPosition = styled.h3`
    font-weight: normal;

`
const LeaderImage = styled.img`
    width: 250px;
    height: 320px; 
`
const TestInfo = styled.div`
    width: 220px;
    height: 500px;
    position: absolute;
    overflow: hidden;
    margin-top: 300px;
    border: solid purple;
    transition: margin-top 0.5s;
    background-color: white;
    opacity: 0.9;
`
const TestImage = styled.img`
    width: 200px;
    height: 250px; 
    border: solid black;

    padding-bottom: 10px;
`

const TestCard = styled.div`
    width: 250px;
    height: 380px; 
    position: relative;
    
    overflow: hidden; 
    display: flex; 
    flex-direction: column;
    align-items: center;


    &:hover ${TestInfo} {
        margin-top: 0px;
      }
    
    // &:hover ${TestImage} {
    //     opacity: 0.1;
    // }
    padding-top: 10px;

    border: solid blue;
`


function Leadership() {
    return (
       <Container> 
            <HeadingText> LEADERSHIP</HeadingText>
            <LeadersContainer> 
                <TestCard>
                    <TestImage src={tyler} alt="leader " /> 
                    <TestInfo>
                        HELLO
                    </TestInfo>
                </TestCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Jordan Yee</LeaderName>
                    <LeaderPosition> President</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Yuta Yamada</LeaderName>
                    <LeaderPosition> VP of Fellowship / Co-IVP</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Geetanjali Jain</LeaderName>
                    <LeaderPosition> Internal Vice President</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Hana McNierney</LeaderName>
                    <LeaderPosition> VP of Projects</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Krish Kumar</LeaderName>
                    <LeaderPosition> VP of Development</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Michelle Lee</LeaderName>
                    <LeaderPosition> Fellowship Mentor</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Garrett Chau</LeaderName>
                    <LeaderPosition> Fellowship Mentor</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Cady Hsu</LeaderName>
                    <LeaderPosition> Fellowship Mentor</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Lucas Omori</LeaderName>
                    <LeaderPosition> Project Manager</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Shannon Or</LeaderName>
                    <LeaderPosition> Project Manager</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Truong Nguyen</LeaderName>
                    <LeaderPosition> Project Manager</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Raymond Feng</LeaderName>
                    <LeaderPosition> Project Manager</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Anisa Majhi</LeaderName>
                    <LeaderPosition> Project Manager</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Wesley Griff</LeaderName>
                    <LeaderPosition> Project Manager</LeaderPosition>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader" />
                    <LeaderName> Angela Zhang</LeaderName>
                    <LeaderPosition> Content Manager</LeaderPosition>
                </LeaderCard>

            </LeadersContainer>
       </Container>
    )
}

export default Leadership;