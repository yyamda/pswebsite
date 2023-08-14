import styled from 'styled-components'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AboutPanel from './AboutPanel'
import Values from './Values'
import Leadership from './Leadership'
import BeyondPS from './BeyondPS'


const Container = styled.div`
@media only screen and (max-width: 800px) {
    overflow-x: hidden;
    flex-wrap: wrap;
}

`


function About() {
    return (
        <Container>
            <Navbar/>
            <AboutPanel/>
            <Values/>
            <Leadership id="coffee_chats"/>
            <BeyondPS/>
            <Footer />
        </Container>
    )
}

export default About