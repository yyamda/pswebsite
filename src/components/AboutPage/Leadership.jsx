import styled from "styled-components"
import LeadershipInfo from "./LeadershipInfo"
import hana from "../images/people/hana.png"
import geetanjali from "../images/people/geetanjali.png"
import krish from "../images/people/krish.png"
import raymond from "../images/people/raymond.png"
import lucas from "../images/people/lucas.png"
import angela from "../images/people/angela.png"
import anisa from "../images/people/anisa.png"
import lauren from "../images/people/lauren.png"
import dasang from "../images/people/dasang.png"
import marissa from "../images/people/marissa.png"
import melanie from "../images/people/melanie.png"
import nina from "../images/people/nina.png"
import ryan from "../images/people/ryan.png"
import su from "../images/people/su.png"
import vicky from "../images/people/vicky.png"
import christine from "../images/people/christine.png"
import suhani from "../images/people/suhani.png"




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
                    <LeaderImage src={hana} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Hana McNierney" position="President" grade="Junior" 
                        major="Business, Data Science" hobbies="Hiking, cooking, watching anime, playing with my cats"
                        email="hanamcnierney@berkeley.edu" linkedin="https://www.linkedin.com/in/hana-mcnierney/"
                        calendlylink="https://calendly.com/hanamcnierney/coffee-chats-1"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={krish} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Krish Kumar" position="VP of Fellowship" grade="Junior" 
                        major="Data Science" hobbies="basketball, photography, video games, PC-Building, Yelp Reviewing, Looking for new Restaraunts in SF"
                        email="krishkumar@berkeley.edu" linkedin="https://www.linkedin.com/in/krishh-kumar/"
                        calendlylink="https://calendly.com/krishkumar-1/coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={lucas} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Lucas Omori" position="VP of Projects & IVP" grade="Junior" 
                        major="Data Science" hobbies="Going to concerts, learning Korean, Pokemon, RnB, video games"
                        email="lomori@berkeley.edu" linkedin="https://www.linkedin.com/in/lucasomori/"
                        calendlylink="https://calendly.com/lomori/product-space-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={lauren} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Lauren Sung" position="IVP" grade="Junior" 
                        major="Cognitive Science & Data Science" hobbies="makeup/fashion, snowboarding, binging shows&movies"
                        email="lauren.sung@berkeley.edu" calendlylink="https://calendly.com/laurensung/sp24-ps-coffeechats"/>
                    </LeaderInfo>
                </LeaderCard>
                
                <LeaderCard>
                    <LeaderImage src={raymond} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Raymond Feng" position="VP of Development" grade="Junior" 
                        major="Economics, Data Science" hobbies="Sports, Piano, Sneakers, Pokemon"
                        email="raymondfeng@berkeley.edu" linkedin="https://www.linkedin.com/in/raymondcfeng/"
                        calendlylink="https://calendly.com/raymondfeng0408/fa23-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={geetanjali} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Geetanjali Jain" position="VP of Operations" grade="Junior" 
                        major="Data Science" hobbies="Thrifting, going to coffee shops with friends and watching TV"
                        email="gjainn@berkeley.edu" linkedin="https://www.linkedin.com/in/gjainn/"
                        calendlylink="https://calendly.com/gjainn/coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={angela} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Angela Zhang" position="Fellowship Mentor" grade="Junior" 
                        major="Computer Science, Cognitive Science" hobbies="Dance, music production, exploring new shops n cafés, photography/videography"
                        email="zhaang74@berkeley.edu" linkedin="https://www.linkedin.com/in/angela-zhang-139b8814b/"
                        calendlylink="https://calendly.com/zhaang74/product-space-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={anisa} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Anisa Majhi" position="Fellowship Mentor" grade="Sophomore" 
                        major="Data Science, Economics" hobbies="Traveling, Stargazing, Movies, Reading"
                        email="anisamajhi@berkeley.edu" linkedin="https://www.linkedin.com/in/anisamajhi/"
                        calendlylink="https://calendly.com/anisamajhi/sp-24-coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={dasang} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Dasang Dolma" position="Fellowship Mentor" grade="Junior" 
                        major="Data Science & Economics" hobbies="Cafe-hopping, google reviewing, trying new workouts, going to whole foods, murder mysteries, vintage shopping"
                        email="dasangdolma@berkeley.edu" linkedin="linkedin.com/in/dasang-dolma-8740051b3"
                        calendlylink="https://calendly.com/dasangdolma/dasang-coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>
                <LeaderCard>
                    <LeaderImage src={su} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Su Lee" position="Project Manager" grade="Junior" 
                        major="Data Science" hobbies="Lifting + Reading + Streetwear + Music + Finding good coffee + Sightseeing"
                        email="sulee2562@berkeley.edu" linkedin="https://www.linkedin.com/in/su-lee1/"
                        calendlylink="https://calendly.com/sucoffeechats/su-coffee-chats"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={marissa} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Marissa Jensen" position="Project Manager" grade="Sophomore" 
                        major="Business Administration & Data Science " hobbies="Travel, Volleyball, Thrifting, Hiking, Trader Joe's, Moffitt <3"
                        email="marissajensen@berkeley.edu" linkedin="http://linkedin.com/in/marissa-jensen"
                        calendlylink="https://calendly.com/marissajensen/coffee-chat"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={melanie} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Melanie Hsiang" position="Project Manager" grade="Sophomore" 
                        major="Cognitive Science & Business" hobbies="watching reruns of Good Will Hunting, collecting an egregious number of denim jeans"
                        email="melaniehsiang@berkeley.edu" linkedin="https://www.linkedin.com/in/melaniehsiang/"
                        calendlylink="https://calendly.com/melaniehsiang/ps-sp24-coffee-chat-w-melanie"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={nina} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Nina Cheuck" position="Project Manager" grade="Sophomore" 
                        major="Data Science & Economics" hobbies="Guitar + Karaoke (Huge Swiftie!) + Journaling + Escape Rooms + Modeling + Cooking"
                        email="nina.cheuck@berkeley.edu" linkedin="https://www.linkedin.com/in/nina-cheuck/"
                        calendlylink="https://calendly.com/nina-cheuck/30min"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={ryan} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Ryan Cho" position="Project Manager" grade="Sophomore" 
                        major="Bioengineering & Data Science" hobbies="Volleyball + Cooking + Avatar TLA + Eating"
                        email="ryancho05@berkeley.edu" linkedin="linkedin.com/in/ryancho05"
                        calendlylink="Calendly.com/ryancho05/30min"/>
                    </LeaderInfo>
                </LeaderCard>

                

                <LeaderCard>
                    <LeaderImage src={vicky} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Vicky Xiao" position="Project Manager" grade="Sophomore" 
                        major="BioEngineering & Business" hobbies="hiking + exploring nature, thrifting, visiting new cafes, cooking + baking, rotting in bed"
                        email="vickyx@berkeley.edu" linkedin="https://www.linkedin.com/in/vicky-x/"
                        calendlylink="https://calendly.com/vickyx-berkeley/30min"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={christine} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Christine Wong" position="Content Manager" grade="Junior" 
                        major="Computer Science & Data Science" hobbies="latte art, house music, spicy food, cats, fashion, photography"
                        email="christineywong@berkeley.edu" linkedin="https://www.linkedin.com/in/christine-y-wong/"
                        calendlylink="https://calendly.com/christineywong/30min"/>
                    </LeaderInfo>
                </LeaderCard>

                <LeaderCard>
                    <LeaderImage src={suhani} alt="leader " /> 
                    <LeaderInfo> 
                        <LeadershipInfo fullname="Suhani Ram" position="Historian" grade="Sophomore" 
                        major="Data Science & Business Administration" hobbies="travelling, photography, running, sci-fi, retail therapy"
                        email="suhanir@berkeley.edu" linkedin="https://www.linkedin.com/in/suhanir"
                        calendlylink="https://calendly.com/suhanir-ldy/30min"/>
                    </LeaderInfo>
                </LeaderCard>

  
            </LeadersContainer>
       </Container>
    )
}

export default Leadership;