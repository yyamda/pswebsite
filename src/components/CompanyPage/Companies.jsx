import styled from 'styled-components'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Benefits from './Benefits'
import CaseStudies from './CaseStudies'
import CompanyPanel from './CompanyPanel'
import WorkWithUs from './WorkWithUs'


const Container = styled.div`
@media only screen and (max-width: 800px) {
    overflow-x: hidden;
}
`

function Companies() {
    return (
        <Container>
            <Navbar/>
            <CompanyPanel/>
            <Benefits/>
            <CaseStudies/>
            <Footer/>
        </Container>
    )
}

export default Companies