import styled, { keyframes } from 'styled-components'
import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

const Container = styled.div`
  width: 90vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AboutContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

const About = styled.p`
  font-size: ${fontSizes.x2l};
`

const Contact = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 90vw;
  bottom: 0;
  margin-bottom: ${spacing.md};
`

const Social = styled.a`
  text-decoration: none;
  color: white;
  position: relative;
  font-size: ${fontSizes.xl};
  margin-right: ${props => props.row ? '16px' : '0'};

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
      <AboutContainer>
        <About>
          Hello, my name is Fikri Albaihaqi.  I’m a front-end developer from Bandung, Indonesia.  I recently graduated majoring in
          informatics engineering at the Bandung State Polytechnic.  I’m always fascinated by the world of front-end website development
          and i enjoy building a solid, dynamic, and beautiful website.  I’m always curious to learn something when it comes to new
          technologies.
        </About>
        <div>
          <Social href=''>My resume</Social>
        </div>
      </AboutContainer>
      <Contact>
        <div>
          <Social href='' row>Github</Social>
          <Social href='' row>Codepen</Social>
          <Social href='' row>Linkedin</Social>
        </div>
        <Social href=''>fikrialbaihaqi@gmail.com</Social>
      </Contact>
    </Container>
  )
}

export default AboutMe