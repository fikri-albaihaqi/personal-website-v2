import IconLinkedin from "./icons/IconLinkedin"
import IconGithub from './icons/IconGithub'
import IconCodepen from './icons/IconCodepen'
import styled from 'styled-components'
import { theme } from '../styles'
const { breakpoints, colors, spacing } = theme

const LeftSide = styled.div`
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 5%;

  @media (${breakpoints.xs}) {
    display: none;
  }

  @media (${breakpoints.sm}) {
    display: none;
  }

  @media (${breakpoints.lg}) {
    display: flex;
  }
`

const [Github, Codepen, Linkedin] = Array(3).fill(styled.div`
  margin: ${spacing.sm} 0px;
  cursor: pointer;
  svg {
    stroke: ${colors.grey};
    width: 20px;
    transition: 0.3s ease-in-out;
  }

  a:hover svg {
    stroke: white;
    margin-bottom: 4px;
  }
`)

const LeftLine = styled.div`
  border-left: 1px solid ${colors.grey};
  height: 120px;
  margin-left: ${spacing.sm};
  margin-top: ${spacing.sm};
`

const Socials = () => {
  return (
    <LeftSide data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
      <Github>
        <a href="https://github.com/fikri-albaihaqi" target='_blank'>
          <IconGithub />
        </a>
      </Github>
      <Codepen>
        <a href="https://codepen.io/Fikri-Code" target='_blank'>
          <IconCodepen />
        </a>
      </Codepen>
      <Linkedin>
        <a href="https://www.linkedin.com/in/fikri-albaihaqi-0a8444219/" target='_blank'>
          <IconLinkedin />
        </a>
      </Linkedin>
      <LeftLine />
    </LeftSide>
  )
}

export default Socials