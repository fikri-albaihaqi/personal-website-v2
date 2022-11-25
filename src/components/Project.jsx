import styled, { keyframes } from "styled-components"
import IconExternal from "./icons/IconExternal"
import IconGithub from "./icons/IconGithub"

import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

const Container = styled.div`
  width: 70vw;
  display: flex;
  background-color: ${colors.darkGrey};
  padding: ${spacing.md};
  margin: ${spacing.xxl} 0;
`

const ProjectImage = styled.img`
  min-width: 560px;
  border-radius: 16px;
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    color: ${colors.grey};
    font-weight: lighter;
    font-size: ${fontSizes.sm};
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }

  h1 {
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
    font-size: ${fontSizes.x4l};
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${spacing.md};

  p {
    font-size: ${fontSizes.xl};
  }
`

const Line = styled.div`
  border-bottom: solid 1px ${colors.grey};
  width: 40%;
`

const TechContainer = styled.div`
  display: flex;

  p {
    font-size: ${fontSizes.sm};
  }
`

const Tech = styled.p`
  margin-right: ${spacing.md};
`

const ExternalLink = styled.div`
  display: flex;
  margin-top: ${spacing.sm};
`

const [Github, External] = Array(3).fill(styled.div`
  margin-right: ${spacing.md};
  cursor: pointer;
  svg {
    stroke: ${colors.grey};
    width: 20px;
  }

  a:hover svg {
    stroke: white;
  }
`)

const Project = ({ project }) => {
  return (
    <Container>
      <ProjectImage src={project.image} />
      <TitleContainer>
        <h3>{project.type}</h3>
        <a href={project.links[1]} target='_blank'>
          <h1>{project.title}</h1>
        </a>
        <Detail>
          <p>
            {project.desc}
          </p>
          <Line />
          <TechContainer>
            <Tech>Vue JS</Tech>
            <Tech>Tailwind CSS</Tech>
            <Tech>The Movie Database API</Tech>
          </TechContainer>
          <ExternalLink>
            <Github>
              <a href={project.links[0]}>
                <IconGithub />
              </a>
            </Github>
            <External>
              <a href={project.links[1]} target='_blank'>
                <IconExternal />
              </a>
            </External>
          </ExternalLink>
        </Detail>
      </TitleContainer>
    </Container>
  )
}

export default Project