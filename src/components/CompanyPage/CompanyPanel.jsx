import styled from 'styled-components'
import CompanyBG from '../images/CompanyBG.png'
import HomePG from '../images/HomeBG.png'



const Container = styled.div`
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap;
    padding-bottom: 80px;
    height: auto;

    background: url(${HomePG});
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    // border: solid black;
    @media only screen and (max-width: 400px) {

     }
`

const TextContainer = styled.div`
    font-size: 20px;
    display: flex; 
    margin-left: 150px;
    margin-top: 120px;
    flex-direction: column; 

    gap: 40px;
    height: auto;
    width: 500px;

    // border: solid black;

    @media only screen and (max-width: 400px) {

        display: flex; 
        align-items: center;
        width: 100px;
        // border: solid red;
     }
`

const Header = styled.div`
    font-size: 60px;

    @media only screen and (max-width: 400px) {
        width: 300px;
        text-align: center;

        // border: solid black;
     }

`
const Description = styled.div`
    font-size: 22px;
    min-width: 330px;

    @media only screen and (max-width: 400px) {
        width: 330px;
        text-align: center;

     }
    //  border: solid black; 

`

const Button = styled.div`
    font-size: 16px;
    font-weight: 800;
    border-radius: 25px;
    color: white; 
    background-image: linear-gradient(to bottom, #EB5B8D, #ED7472);
    text-align: left;

    width: 300px;
    padding: 20px;
    border: none;
    text-decoration: none;


    display: flex;
    justify-content: center;
    align-items: center;
`
const PictureContainer = styled.div`
    height: auto;
    width: 700px;

    // border: solid black;
    @media only screen and (max-width: 1400px) {
       display: none;
    }

`
const PictureBox = styled.img`
    width: 780px;
    height: 500px;

`;

function CompanyPanel() {
    return (
        <Container>
            <TextContainer>
                <Header> What we offer </Header>
                <Description> 
                    All client projects are paired with an experienced 
                    project manager, advisor, and 4 to 6 product associates
                    who have gone through our training programs. Product
                    Space enlists its most experienced members to ensure 
                    that your project is in good hands.
                </Description>
                <Button>
                    Contact Us: contact@product.berkeley.edu
                </Button>
            </TextContainer>
            <PictureContainer> 
                <PictureBox src={CompanyBG} />
            </PictureContainer>
            

        </Container>
    )
}

export default CompanyPanel