import styled from 'styled-components'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CareerPanel from './CareerPanel'
import TableContainer from "./TableContainer";
import JoinUs from "./JoinUs"


const Container = styled.div`
@media only screen and (max-width: 800px) {
    overflow-x: hidden;
}
`

function Careers() {
    return (
        <Container>
            <Navbar/>
            <CareerPanel/>
            <TableContainer />
            <Footer/>
        </Container>
    )
}

export default Careers