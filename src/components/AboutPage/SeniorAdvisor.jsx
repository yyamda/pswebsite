import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"
import SeniorAdvisorInfo from "./SeniorAdvisorInfo"
import jordan from "../images/people/jordan.png"
import yuta from "../images/people/yuta.png"
import hana from "../images/people/hana.png"
import geetanjali from "../images/people/geetanjali.png"
import krish from "../images/people/krish.png"
import raymond from "../images/people/raymond.png"
import lucas from "../images/people/lucas.png"
import angela from "../images/people/angela.png"
import anisa from "../images/people/anisa.png"
import shannon from "../images/people/shannon.png"
import tyler from "../images/people/tyler.png"
import garrett from "../images/people/garrett.png"
import cady from "../images/people/cady.png"
import michelle from "../images/people/michelle.png"
import wesley from "../images/people/wesley.png"
import truong from "../images/people/truong.png"
import lauren from "../images/people/lauren.png"




const Container = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    gap: 0px;

    @media only screen and (max-width: 400px) {
        margin-top: 70px;

    }
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
    // NOTE!!!! Frame radio: 1 (width) to 1.46 (height)
    width: 225px;
    height: 305px; 
    border-radius: 10px;
    margin-top: 10px;
    padding-bottom: 10px;
    transition: filter 0.5s;
    

    
    // border: solid black;
`
const LeaderInfo = styled.div`
    width: 250px;
    height: 500px;
    position: absolute;
    overflow: hidden;
    margin-top: 330px;
    
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
        margin-top: 100px;
      }

    &:hover ${LeaderImage} {
        filter: blur(2px);
    }
    
    padding-top: 10px;

    // border: solid blue;
`

const HeadingText = styled.h2`
    color: #EB5B8D;
    font-size: 24px;
    font-weight: 500;
    font-size: 30px;

    padding-top: 70px;

    // border: solid black;

`

const Subtitle = styled.div`
    color: #EB5B8D;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    
    margin-bottom: 30px; 
    // padding-left: 100px;
    width: 480px;

    // border: solid red;

    @media only screen and (max-width: 450px) {
        width: 80%;

    }
`

const Headers = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // border: solid blue;

    @media only screen and (max-width: 450px) {
        width: 80%;

    }
`



function SeniorAdvisors() {
    return (
       <Container> 
            <Headers>
                <HeadingText> SENIOR ADVISORS & ALUMNI</HeadingText>
                    
            </Headers>
            <LeadersContainer> 
                <LeaderCard>
                    <LeaderImage src={jordan} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Jordan Yee" position="President FA '23" grade="Senior" 
                        major="EECS"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={yuta} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Yuta Yamada" position="VP Fellowship FA '23" grade="Junior" 
                        major="Computer Science, Data Science"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={michelle} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Michelle Lee" position="Fellowship Mentor FA '23" grade="Junior" 
                        major="Business, Data Science" />
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={garrett} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Garrett Chau" position="Fellowship Mentor FA '23" grade="Senior" 
                        major="Business, Data Science" />
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={cady} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Cady Hsu" position="Fellowship Mentor FA '23" grade="Junior" 
                        major="Data Science, Economics " />
                    </LeaderInfo>
                </LeaderCard>
                
                <LeaderCard>
                    <LeaderImage src={truong} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Truong Nguyen" position="Project Manager FA '23" grade="Junior" 
                        major="Computer Science, Business"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={shannon} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Shannon Or" position="Project Manager FA '23" grade="Junior" 
                        major="EECS" />
                    </LeaderInfo>
                </LeaderCard>
                
                <LeaderCard>
                    <LeaderImage src={wesley} alt="leader " /> 
                    <LeaderInfo> 
                        <SeniorAdvisorInfo fullname="Wesley Griggs" position="Project Manager FA '23" grade="Junior" 
                        major="Data Science, Cognitive Science"/>
                    </LeaderInfo>
                </LeaderCard>

            </LeadersContainer>
       </Container>
    )
}

export default SeniorAdvisors;