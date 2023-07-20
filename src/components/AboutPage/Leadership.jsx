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


function Leadership() {
    return (
       <Container> 
            <HeadingText> LEADERSHIP</HeadingText>
            <LeadersContainer> 
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
                    <LeaderName> Mitchelle Lee</LeaderName>
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
                    <LeaderPosition> Fellowship Mentory</LeaderPosition>
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