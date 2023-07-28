import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"
import jordan from "../images/jordan.png"
import yuta from "../images/yuta.png"
import hana from "../images/hana.png"
import geetanjali from "../images/geetanjali.png"
import krish from "../images/krish.png"
import raymond from "../images/raymond.png"
import lucas from "../images/lucas.png"
import angela from "../images/angela.png"
import anisa from "../images/anisa.png"
import shannon from "../images/shannon.png"
import tyler from "../images/tyler.png"
import garrett from "../images/garrett.png"
import cady from "../images/cady.png"
import michelle from "../images/michelle.png"




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
    padding-top: 40px;

`

const LeadersContainer = styled.div`
    width: 80%;
    height: auto;
    align-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    gap: 50px;

    // border: black solid;
`
const LeaderImage = styled.img`
    width: 225px;
    height: 295px; 
    border-radius: 10px;
    margin-top: 10px;
    // border: solid black;

    padding-bottom: 10px;
`
const LeaderInfo = styled.div`
    width: 250px;
    height: 500px;
    position: absolute;
    overflow: hidden;
    margin-top: 320px;
    
    display: flex; 
    flex-direction: column;
    align-items: center;
    
    transition: margin-top 0.5s;
    background-color: white;
    opacity: 0.95;
    border-radius: 10px;

    // border: solid purple;
`

const LeaderCard = styled.div`
    width: 280px;
    height: 430px; 
    position: relative;
    background: #F9D4DF;
    border-radius: 10px;
    
    overflow: hidden; 
    display: flex; 
    flex-direction: column;
    align-items: center;


    &:hover ${LeaderInfo} {
        margin-top: 0px;
      }
    
    padding-top: 10px;

    // border: solid blue;
`


function Leadership() {
    return (
       <Container> 
            <HeadingText> LEADERSHIP</HeadingText>
            <LeadersContainer> 
                <LeaderCard>
                    <LeaderImage src={jordan} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Jordan Yee" position="President" grade="Senior" 
                    major="EECS" hobbies="sports, sports, apple"
                    email="jordantyee@berkeley.edu" linkedin="https://www.linkedin.com/in/jordan-terence-yee/"
                    calendlylink="calendly.com"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={yuta} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Yuta Yamada" position="VP Fellowship & IVP" grade="Junior" 
                        major="CS & DS" hobbies="tennis, music production, causing trouble"
                        email="yutayamada@berkeley.edu" linkedin="https://www.linkedin.com/in/yutayamada/"
                        calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={hana} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Hana McNierney" position="VP of Projects" grade="Junior" 
                    major="Business" hobbies="dogs and cats"
                    email="hanamcnierney@berkeley.edu" linkedin="https://www.linkedin.com/in/hana-mcnierney/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={geetanjali} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Geetanjali Jain" position="Internal Vice President" grade="Junior" 
                    major="Data Science" hobbies="going on long walks, hosting game nights, trying new recipes and playing with dogs"
                    email="gjainn@berkeley.edu" linkedin="https://www.linkedin.com/in/gjainn/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={krish} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Krish Kumar" position="VP of Development" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={michelle} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Michelle Lee" position="Fellowship Mentor" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={garrett} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Garrett Chau" position="Fellowship Mentor" grade="Senior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={cady} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Cady Hsu" position="Fellowship Mentor" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={anisa} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Anisa Majhi" position="Project Manager" grade="Sophomore" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Truong Nguyen" position="Project Manager" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={shannon} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Shannon Or" position="Project Manager" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={raymond} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Raymond Feng" position="Project Manager" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={lucas} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Lucas Omori" position="Project Manager" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
            
                <LeaderCard>
                    <LeaderImage src={angela} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Angela Zhang" position="Content Manager" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={tyler} alt="leader " /> 
                    <LeaderInfo> 
                   
                    <LeadershipInfo fullname="Lauren Sung" position="Historian" grade="Junior" 
                    major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                    email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                    calendlylink="HELLO"/>
                    </LeaderInfo>
                </LeaderCard>
  
            </LeadersContainer>
       </Container>
    )
}

export default Leadership;