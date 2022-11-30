import styled, { keyframes } from "styled-components"
import IconExternal from "./icons/IconExternal"
import IconGithub from "./icons/IconGithub"

import { theme } from '../styles'
import useViewport from '../helpers/useViewport'

const { breakpoints, colors, fontSizes, spacing } = theme

const Container = styled.div`
  display: flex;
  border-radius: 4px;
  margin: ${spacing.xxl} 0;

  @media (${breakpoints.xs}) {
    flex-direction: column;
    width: 90vw;
  }

  @media (${breakpoints.sm}) {
    width: 90vw;
  }

  @media (${breakpoints.md}) {
    background-color: ${colors.darkGrey};
  }

  @media (${breakpoints.lg}) {
    width: 70vw;
  }
`

const ImageContainer = styled.div`
  min-width: 500px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;

  @media (${breakpoints.md}) {
    min-width: 300px;
  }

  @media (${breakpoints.md}) {
    border-top-right-radius: ${({ index }) => index % 2 !== 0 ? '4px' : '0'};
    border-bottom-right-radius: ${({ index }) => index % 2 !== 0 ? '4px' : '0'};
    border-top-left-radius: ${({ index }) => index % 2 === 0 ? '4px' : '0'};
    border-bottom-left-radius: ${({ index }) => index % 2 === 0 ? '4px' : '0'};
  }

  @media (${breakpoints.xl}) {
    min-width: 560px;
  }
`

const ProjectImage = styled.img`
  @media (${breakpoints.xs}) {
    min-width: 10%;
    max-width: 100%;
  }
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (${breakpoints.xs}) {
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin: ${spacing.sm} 0 0 0;
  }

  @media (${breakpoints.md}) {
    flex-direction: column;
    align-items: ${({ index }) => index % 2 === 0 ? 'flex-end' : 'flex-start'};
    margin: ${({ index }) => index % 2 === 0 ? '32px 32px 32px 0' : '32px 0 32px 32px'};
  }

  h3 {
    color: ${colors.grey};
    font-weight: lighter;
    font-size: ${fontSizes.sm};
    text-transform: uppercase;

    @media (${breakpoints.xs}) {
      font-size: ${fontSizes.xs};
    }
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

    @media (${breakpoints.xs}) {
      font-size: ${fontSizes.x3l};
    }
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ index }) => index % 2 === 0 ? '24px' : '0'};
  margin-right: ${({ index }) => index % 2 !== 0 ? '24px' : '0'};
  text-align: ${({ index }) => index % 2 === 0 ? 'right' : 'left'};
  align-items: ${({ index }) => index % 2 === 0 ? 'flex-end' : 'flex-start'};

  p {
    font-size: ${fontSizes.xl};
  }
`

const Line = styled.div`
  border-bottom: solid 1px ${colors.grey};
  margin: ${spacing.sm} 0;
  width: 40%;

  @media (${breakpoints.xs}) {
    width: 100%;
  }
`

const TechContainer = styled.div`
  display: flex;

  p {
    font-size: ${fontSizes.sm};
  }

  @media (${breakpoints.xs}) {
    flex-wrap: wrap;
  }
`

const Tech = styled.p`

  @media (${breakpoints.xs}) {
    margin: ${spacing.sm} ${spacing.sm} 0 0;

    &:last-child {
      margin: ${spacing.sm} 0 0 0;
    }
  }

  @media (${breakpoints.md}) {
    margin-right: ${({ index }) => index % 2 !== 0 ? '24px' : '0'};
    margin-left: ${({ index }) => index % 2 === 0 ? '24px' : '0'};
  }
`

const ExternalLink = styled.div`
  display: flex;
  margin-top: ${spacing.sm};
`

const [Github, External] = Array(2).fill(styled.div`
  margin-right: ${({ index }) => index % 2 !== 0 ? '24px' : '0'};
  margin-left: ${({ index }) => index % 2 === 0 ? '24px' : '0'};
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
  const { width } = useViewport()
  const breakpoint = 768

  return (
    width < breakpoint ? (
      <Container data-aos="fade-up" data-aos-duration="1000" data-aos-delay='400'>
        <ProjectImage src={project.image} index={index} />
        <DetailContainer>
          <a href={project.external} target='_blank'>
            <h1>{project.title}</h1>
          </a>
          <h3>{project.type}</h3>
        </DetailContainer>
        <Line />
        <TechContainer>
          {project.tech?.length > 0 &&
            project.tech.map((item, i) => (
              <Tech key={i} index={index}>{item}</Tech>
            ))}

        </TechContainer>
      </Container>
    ) :
      index % 2 === 0 ? (
        <Container data-aos="fade-up" data-aos-duration="1000" data-aos-delay='400'>
          <ImageContainer image={project.image} index={index}></ImageContainer>
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
                {project.tech?.length > 0 &&
                  project.tech.map((item, i) => (
                    <Tech key={i} index={index}>{item}</Tech>
                  ))}

              </TechContainer>
              <ExternalLink>
                <Github index={index}>
                  <a href={project.github} target='_blank'>
                    <IconGithub />
                  </a>
                </Github>
                <External index={index}>
                  <a href={project.external} target='_blank'>
                    <IconExternal />
                  </a>
                </External>
              </ExternalLink>
            </Detail>
          </DetailContainer>
        </Container>
      ) : (
        <Container data-aos="fade-up" data-aos-duration="1000" data-aos-delay='400'>
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
                <Tech index={index}>Vue JS</Tech>
                <Tech index={index}>Tailwind CSS</Tech>
                <Tech index={index}>The Movie Database API</Tech>
              </TechContainer>
              <ExternalLink>
                <Github index={index}>
                  <a href={project.github} target='_blank'>
                    <IconGithub />
                  </a>
                </Github>
                <External index={index}>
                  <a href={project.external} target='_blank'>
                    <IconExternal />
                  </a>
                </External>
              </ExternalLink>
            </Detail>
          </DetailContainer>
          <ImageContainer image={project.image} index={index}></ImageContainer>
        </Container>
      )
  )
}

export default Project