import { GlobalStyle } from './styles'
import styled from 'styled-components'
import Navigation from './components/Navigation'
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
      <Navigation />
      <Socials />
      <Email />
      <Home />
    </Container>
  )
}

export default App
