import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"
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



function Leadership() {
    return (
       <Container> 
            <Headers>
                <HeadingText> LEADERSHIP</HeadingText>
                <Subtitle> Hover over the cards to sign up for coffee chats and to learn more about our leadership!</Subtitle>
                <Subtitle> Note* -  number of coffee chats are limited to 2 per person</Subtitle>
                    
            </Headers>
            <LeadersContainer> 
                <LeaderCard>
                    <LeaderImage src={jordan} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Jordan Yee" position="President" grade="Senior" 
                        major="EECS" hobbies="playing basketball, weightlifting, exploring coffee shops, going to the beach/surfing"
                        email="jordantyee@berkeley.edu" linkedin="https://www.linkedin.com/in/jordan-terence-yee/"
                        calendlylink="https://calendly.com/jordantyee/product-space-coffee-chat-w-jordan"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={yuta} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Yuta Yamada" position="VP Fellowship & IVP" grade="Junior" 
                        major="Computer Science, Data Science" hobbies="tennis, lots of manga, music production, parties :D"
                        email="yutayamada@berkeley.edu" linkedin="https://www.linkedin.com/in/yutayamada/"
                        calendlylink="https://calendly.com/yutayamada/product-space-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={hana} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Hana McNierney" position="VP of Projects" grade="Junior" 
                        major="Business, Data Science" hobbies="Hiking, cooking, anime, learning ASL, playing with my cats"
                        email="hanamcnierney@berkeley.edu" linkedin="https://www.linkedin.com/in/hana-mcnierney/"
                        calendlylink="https://calendly.com/hanamcnierney/coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={geetanjali} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Geetanjali Jain" position="Internal Vice President" grade="Junior" 
                        major="Data Science" hobbies="going on long walks, hosting game nights, trying new recipes and playing with dogs"
                        email="gjainn@berkeley.edu" linkedin="https://www.linkedin.com/in/gjainn/"
                        calendlylink="https://calendly.com/gjainn/coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={krish} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Krish Kumar" position="VP of Development" grade="Junior" 
                        major="Computer Science" hobbies="Basketball, photography, dining experience, video games"
                        email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                        calendlylink="https://calendly.com/krishkumar-1/krish-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={michelle} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Michelle Lee" position="Fellowship Mentor" grade="Junior" 
                        major="Business, Data Science" hobbies="Product design, podcasts, cafe hopping, karaoke, pottery"
                        email="michdlee@berkeley.edu" linkedin="https://www.linkedin.com/in/michdlee/"
                        calendlylink="https://calendly.com/michdlee/coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={garrett} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Garrett Chau" position="Fellowship Mentor" grade="Senior" 
                        major="Business, Data Science" hobbies="Mechanical Keyboards, Cars, Chipotle, Gym"
                        email="gchau@berkeley.edu" linkedin="https://www.linkedin.com/in/garrett-chau/"
                        calendlylink="https://calendly.com/gchau/garrett-club-coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={cady} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Cady Hsu" position="Fellowship Mentor" grade="Junior" 
                        major="Data Science, Economics " hobbies="Going to beach, thrifting, exploring new coffee shops, baking"
                        email="cadencehsu@berkeley.edu" linkedin="https://www.linkedin.com/in/cadyhsu/"
                        calendlylink="https://calendly.com/cadencehsu/product-space-coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={anisa} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Anisa Majhi" position="Project Manager" grade="Sophomore" 
                        major="Data Science, Economics" hobbies="Traveling, Stargazing, Movies, Reading"
                        email="anisamajhi@berkeley.edu" linkedin="https://www.linkedin.com/in/anisamajhi/"
                        calendlylink="https://calendly.com/anisamajhi/fa-23-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={truong} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Truong Nguyen" position="Project Manager" grade="Junior" 
                        major="Computer Science, Business" hobbies="Hobbies: basketball, gym, golf, mahjong"
                        email="truongnguyen@berkeley.edu" linkedin="https://www.linkedin.com/in/truong-h-nguyen/"
                        calendlylink="https://calendly.com/truong_nguyen/coffee-chat-w-truong"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={shannon} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Shannon Or" position="Project Manager" grade="Junior" 
                        major="EECS" hobbies="Basketball, Snowboarding, Traveling, Cooking"
                        email="shannonor@berkeley.edu" linkedin="https://www.linkedin.com/in/shannonorsn/"
                        calendlylink="https://calendly.com/shannonor/product-space-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={raymond} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Raymond Feng" position="Project Manager" grade="Junior" 
                        major="Economics, Data Science" hobbies="Sports, Piano, Sneakers, Pokemon"
                        email="raymondfeng@berkeley.edu" linkedin="https://www.linkedin.com/in/raymondcfeng/"
                        calendlylink="https://calendly.com/raymondfeng0408/fa23-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={wesley} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Wesley Griggs" position="Project Manager" grade="Junior" 
                        major="Data Science, Cognitive Science" hobbies="Hiking, jewelry making, reading, frolicking"
                        email="wesley.griggs@berkeley.edu" linkedin="https://www.linkedin.com/in/wesley-griggs/"
                        calendlylink="https://calendly.com/wesley-griggs/product-space-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={lucas} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Lucas Omori" position="Project Manager" grade="Junior" 
                        major="Data Science" hobbies="Going to concerts, Hip Hop Dance, Playing video games, and building Lego"
                        email="lomori@berkeley.edu" linkedin="https://www.linkedin.com/in/lucasomori/"
                        calendlylink="https://calendly.com/lomori/product-space-lucas-omori-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
            
                <LeaderCard>
                    <LeaderImage src={angela} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Angela Zhang" position="Content Manager" grade="Junior" 
                        major="Computer Science, Cognitive Science" hobbies="Dancing, café hopping, producing music, reading"
                        email="zhaang74@berkeley.edu" linkedin="https://www.linkedin.com/in/angela-zhang-139b8814b/"
                        calendlylink="https://calendly.com/zhaang74/product-space-coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={lauren} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Lauren Sung" position="Historian" grade="Junior" 
                        major="Cognitive Science" hobbies="dancing, traveling, rewatching shows i've already watched, makeup/fashion"
                        email="lauren.sung@berkeley.edu" calendlylink="https://calendly.com/laurensung/product-space-coffee-chat-lauren"/>
                    </LeaderInfo>
                </LeaderCard>
  
            </LeadersContainer>
       </Container>
    )
}

export default Leadership;