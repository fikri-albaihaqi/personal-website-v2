import styled, { keyframes } from 'styled-components'
import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
`

const WelcomeText = styled.h1`
  font-size: ${fontSizes.x5l};
  line-height: 1;
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const Name = styled.h1`
  --bg-size: 300%;
  font-size: ${fontSizes.x5l};
  line-height: 1;
  background: linear-gradient(
      90deg, 
      ${colors.yellow}, 
      ${colors.pink}, 
      ${colors.purple}, 
      ${colors.lightBlue}, 
      ${colors.purple},
      ${colors.pink},
      ${colors.yellow}
    ) 0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-left: ${spacing.xs};
  animation: ${gradient} 20s infinite linear;
`

const Desc = styled.p`
  font-size: ${fontSizes.lg};
  text-align: center;
`

const Header = () => {
  return (
    <Container>
      <TextContainer>
        <WelcomeText>HELLO, I'M</WelcomeText>
        <Name>FIKRI ALBAIHAQI</Name>
      </TextContainer>
      <Desc>
        I’m a front-end web developer based in Bandung. I like to craft solid and beautiful <br />
        website with great user experience
      </Desc>
    </Container>
  )
}

export default Header