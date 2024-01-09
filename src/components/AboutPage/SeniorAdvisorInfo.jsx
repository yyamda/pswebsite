import styled from "styled-components"
import linkedinIcon from "../images/company/linkedinIcon.png"

const Container = styled.div`
    width: 215px;
    height: 370px; 

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 5px;

    // border: solid blue; 
`
const TabBar = styled.div`
    width: 50px; 
    height: 4px; 
    background-color: #D9D9D9;

    // border: solid black;
`

const InfoContainer = styled.div`
    width: 190px; 
    height: 150px; 
    display: flex; 
    flex-direction: column; 
    align-items: center;

    // background-color: #F0F0F0; 

`

const FullName = styled.div`
    width: 170px; 
    height: 40px; 
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 800;
    border-radius: 5px;

    background-color: #6F358E;
    color: white; 
`

const Position = styled.div`
    height: 40px;
    margin-top: 10px;
    padding-bottom: 20px;
    font-size: 14px;
    text-align: center;

    display: flex; 
    justify-content: center; 
    align-items: center;

    font-weight: 500;

`

const SubInfoContainer = styled.div`
    width: 190px; 
    border-radius: 5px;

    font-size: 14px;
    gap: 10px;

    padding-left: 30px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    white-space: pre-line; 

    background-color: #B3C2F8;
    // border: solid black;
`
function LeadershipInfo(props) {
    const { fullname, position, grade, major} = props;
    return (
        <Container>
            <TabBar/>
            <InfoContainer>
                <FullName>{fullname}</FullName>
                <Position> {position}</Position>
                <SubInfoContainer>
                {"> " + grade + "\n" + "> " + major} 
                </SubInfoContainer>
            </InfoContainer>
        </Container>
    )
}

export default LeadershipInfo; 