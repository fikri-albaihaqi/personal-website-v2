import { GlobalStyle } from './styles'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Email from './components/Email'
import Home from './components/Home'

function App() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
  `

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Socials />
      <Email />
      <Home />
    </Container>
  )
}

export default App
