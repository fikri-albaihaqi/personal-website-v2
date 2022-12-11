import styled, { keyframes } from "styled-components"
import IconEmail from "./icons/IconEmail"
import IconWhatsapp from "./icons/IconWhatsapp"
import IconGithub from "./icons/IconGithub"
import IconCodepen from "./icons/IconCodepen"
import IconLinkedin from "./icons/IconLinkedin"
import { theme } from '../styles'
const { breakpoints, colors, fontSizes, fontWeights, spacing } = theme

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  p {
    text-align: center;
    width: 80vw;
  }
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${fontSizes.xl};
  }
`

const GetInTouch = styled.h1`
  font-weight: bold;
  font-size: ${fontSizes.x5l};

  @media (${breakpoints.xs}) {
    font-size: ${fontSizes.x3l};
  }

  --bg-size: 300%;
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
  animation: ${gradient} 10s infinite linear;
`

const ContactContainer = styled.div`
  display: flex;

  & div:nth-child(1), div:nth-child(2), div:nth-child(3) {
    @media (${breakpoints.lg}) {
      display: none;
    }

    svg {
      width: 20px;
      stroke: ${colors.grey};
    }

    a:hover svg {
      stroke: white;
    }
  }

  & div:nth-child(4), div:nth-child(5) {
    svg {
      width: 20px;

      @media (${breakpoints.lg}) {
        width: 40px;
      }
    }

    svg path {
      fill: ${colors.grey};
    }

    a:hover svg path {
      fill: white;
    }
  }
`

const [Email, Whatsapp, Github, Codepen, Linkedin] = Array(5).fill(styled.div`
  margin: ${spacing.base};
`)

const Copyright = styled.p`
  position: absolute;
  bottom: 0;
  font-weight: ${fontWeights.light};
  font-size: ${fontSizes.base};
`

const Contact = () => {
  return (
    <Container>
      <TextContainer>
        <GetInTouch data-aos="fade-up" data-aos-duration="1000">
          LET'S GET IN TOUCH
        </GetInTouch>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay='600'>
          I’m currently available for full-time employment in Bandung <br />
          and freelance projects.
        </p>
        <ContactContainer>
          <Github>
            <a href="https://github.com/fikri-albaihaqi" target='_blank' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='800'>
              <IconGithub />
            </a>
          </Github>
          <Codepen>
            <a href="https://codepen.io/Fikri-Code" target='_blank' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='1000'>
              <IconCodepen />
            </a>
          </Codepen>
          <Linkedin>
            <a href="https://www.linkedin.com/in/fikri-albaihaqi-0a8444219/" target='_blank' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='1200'>
              <IconLinkedin />
            </a>
          </Linkedin>
          <Whatsapp>
            <a href="https://wa.me/+6282218644649" target='_blank' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='1400'>
              <IconWhatsapp />
            </a>
          </Whatsapp>
          <Email>
            <a href="mailto:fikrialbaihaqi@gmail.com" target='_blank' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='1600'>
              <IconEmail />
            </a>
          </Email>
        </ContactContainer>
      </TextContainer>
      <Copyright>
        &copy; Fikri Albaihaqi 2022
      </Copyright>
    </Container>
  )
}

export default Contact