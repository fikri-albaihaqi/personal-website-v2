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

const floating = keyframes`
  0% {
    transform: translateY(-8px);
  }
  
  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-8px);
  }
`

const Circle = styled.div`
  position: relative;
  top: 25%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  border-radius: 100%;
  animation: ${floating} 3s ease-in-out infinite;
`

const Header = () => {
  return (
    <Container>
      <TextContainer>
        <WelcomeText data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">HELLO, I'M</WelcomeText>
        <Name data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">FIKRI ALBAIHAQI</Name>
      </TextContainer>
      <Desc data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        I’m a front-end web developer located in Bandung. I like to craft solid and beautiful <br />
        website with great user experience
      </Desc>
      <Circle data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1600">
        <span className="material-symbols-outlined text-white">
          keyboard_arrow_down
        </span>
      </Circle>
    </Container>
  )
}

export default Header