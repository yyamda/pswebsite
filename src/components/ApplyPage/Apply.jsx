import styled from 'styled-components'
import ApplyBG from '../images/pictures/applyBG.png'
import HomePG from '../images/pictures/HomeBG.png'
import ApplyPanel from './ApplyPanel'
import Navbar from '../Navbar'
import Timeline from './Timeline'
import Footer from '../Footer'


const Container = styled.div`
@media only screen and (max-width: 800px) {
    overflow-x: hidden;
}
`
function Apply() {
    return (
        <Container>
            <Navbar />
            <ApplyPanel /> 
            <Timeline />
            <Footer />
        </Container>
    )
}

export default Apply;