import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { GlobalStyle } from './styles'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Home from './components/Home'
import AllProjects from './components/AllProjects'
import AboutMe from './components/AboutMe'
import WarpBackground from './components/WarpBackground'


const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <WarpBackground />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-projects' element={<AllProjects />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
