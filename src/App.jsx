import { useState } from 'react'
import { GlobalStyle } from './styles'
import styled from 'styled-components'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Email from './components/Email'

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
      <Hero />
    </Container>
  )
}

export default App
