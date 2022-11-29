import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { GlobalStyle } from './styles'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Home from './components/Home'
import AllProjects from './components/AllProjects'
import AboutMe from './components/AboutMe'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

function App() {
  AOS.init();
  
  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
    </Container>
  )
}

export default App
