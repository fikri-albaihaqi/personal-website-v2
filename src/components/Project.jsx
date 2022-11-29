import styled, { keyframes } from "styled-components"
import IconExternal from "./icons/IconExternal"
import IconGithub from "./icons/IconGithub"

import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

const Container = styled.div`
  width: 70vw;
  display: flex;
  /* background-color: ${colors.darkGrey}; */
  padding: ${spacing.md};
  margin: ${spacing.xxl} 0;
`

const ProjectImage = styled.img`
  min-width: 560px;
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({index}) => index % 2 === 0 ? 'flex-end' : 'flex-start'};

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
  margin-left: ${({index}) => index % 2 === 0 ? '24px' : '0'};
  margin-right: ${({index}) => index % 2 !== 0 ? '24px' : '0'};

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

const Project = ({ index, project }) => {
  return (
    index % 2 === 0 ? (
      <Container>
        <ProjectImage src={project.image} />
        <DetailContainer index={index}>
          <h3>{project.type}</h3>
          <a href={project.external} target='_blank'>
            <h1>{project.title}</h1>
          </a>
          <Detail index={index}>
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
                <a href={project.github} target='_blank'>
                  <IconGithub />
                </a>
              </Github>
              <External>
                <a href={project.external} target='_blank'>
                  <IconExternal />
                </a>
              </External>
            </ExternalLink>
          </Detail>
        </DetailContainer>
      </Container>
    ) : (
      <Container>
        <DetailContainer index={index}>
          <h3>{project.type}</h3>
          <a href={project.external} target='_blank'>
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
                <a href={project.github} target='_blank'>
                  <IconGithub />
                </a>
              </Github>
              <External>
                <a href={project.external} target='_blank'>
                  <IconExternal />
                </a>
              </External>
            </ExternalLink>
          </Detail>
        </DetailContainer>
        <ProjectImage src={project.image} />
      </Container>
    )
  )
}

export default Project