import styled, { keyframes } from 'styled-components'
import { theme } from '../styles'
import WarpBackground from './WarpBackground'

const { breakpoints, colors, fontSizes, spacing } = theme

const Container = styled.div`
  width: 90vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (${breakpoints.xs}) {
    width: 100%;
  }

  @media (${breakpoints.md}) {
    width: 100%;
  }

  @media (${breakpoints.lg}) {
    width: 60%;
  }
`

const About = styled.p`
  font-size: ${fontSizes.x2l};

  @media (${breakpoints.xs}) {
    font-size: ${fontSizes.lg};
  }
`

const Contact = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 90vw;
  bottom: 10%;
  margin-bottom: ${spacing.md};
  
  @media (${breakpoints.xs}) {
    display: none;
  }
`

const Social = styled.a`
  text-decoration: none;
  color: white;
  position: relative;
  font-size: ${fontSizes.xl};
  margin-right: ${props => props.row ? '16px' : '0'};

  @media (${breakpoints.xs}) {
    font-size: ${fontSizes.lg};
  }

  &::before {
    background: ${colors.purple};
    z-index: 5;
    content: "";
    width: 100%;
    position: absolute;
    bottom: 4px;
    height: 6px;
    left: 0;
    display: block;
    transition: height 0.5s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    height: 60%;
  }
`

const AboutMe = () => {
  return (
    <Container>
      <BG>
        <WarpBackground />
      </BG>
      <AboutContainer>
        <About data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          Hello, my name is Fikri Albaihaqi.  I’m a front-end developer from Bandung, Indonesia.  I recently graduated majoring in
          informatics engineering at the Bandung State Polytechnic.  I’m always fascinated by the world of front-end website development
          and i enjoy building a solid, dynamic, and beautiful website.  I’m always curious to learn something when it comes to new
          technologies.
        </About>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
          <Social href='./Resume.pdf' target='_blank'>My resume</Social>
        </div>
      </AboutContainer>
      <Contact>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
          <Social href='https://github.com/fikri-albaihaqi' target='_blank' row>Github</Social>
          <Social href='https://codepen.io/Fikri-Code' target='_blank' row>Codepen</Social>
          <Social href='https://www.linkedin.com/in/muhamad-fikri-albaihaqi-0a8444219/' row>Linkedin</Social>
        </div>
        <Social href='mailto:fikrialbaihaqi@gmail.com' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">fikrialbaihaqi@gmail.com</Social>
      </Contact>
    </Container>
  )
}

export default AboutMe