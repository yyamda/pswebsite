import styled from 'styled-components'
import Navbar from '../Navbar'
import Footer from '../Footer'
import StudentPanel from './StudentPanel'
import OurPrograms from './OurPrograns'
import Join from './Join'


const Container = styled.div`

@media only screen and (max-width: 800px) {
    overflow-x: hidden;
}

`


function Students() {
    return (
        <Container>
            <Navbar/>
            <StudentPanel/>
            <OurPrograms/>
            <Footer/>
        </Container>
    )
}

export default Students