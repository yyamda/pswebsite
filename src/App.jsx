import styled from 'styled-components'
import Apply from './components/ApplyPage/Apply'
import About from './components/AboutPage/About'
import Careers from './components/CareerPage/Careers'
import Companies from './components/CompanyPage/Companies'
import Students from './components/StudentsPage/Students'
import Home from './components/HomePage/Home'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />}/>
      <Route path="/Apply" element={<Apply />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Careers" element={<Careers />}/>
      <Route path="/Students" element={<Students />}/>
      <Route path="/Companies" element={<Companies />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
