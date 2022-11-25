import IconLinkedin from "./icons/IconLinkedin"
import IconGithub from './icons/IconGithub'
import IconCodepen from './icons/IconCodepen'
import styled from 'styled-components'
import { theme } from '../styles'
const { colors, spacing } = theme

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 5%;
`

const [Github, Codepen, Linkedin] = Array(3).fill(styled.div`
  margin: ${spacing.sm} 0px;
  cursor: pointer;
  svg {
    stroke: ${colors.grey};
    width: 20px;
  }

  a:hover svg {
    stroke: white;
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
    <LeftSide>
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
        <a href="" target='_blank'>
          <IconLinkedin />
        </a>
      </Linkedin>
      <LeftLine />
    </LeftSide>
  )
}

export default Socials