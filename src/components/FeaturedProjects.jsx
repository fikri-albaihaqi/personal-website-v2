import styled, { keyframes } from "styled-components"
import allProjects from '../data/allProjects.json'
import { Link } from "react-router-dom"
import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

import Project from "./Project"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: ${spacing.xxl} 0;
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const SectionTitle = styled.h1`
  font-size: ${fontSizes.x5l};
  align-self: flex-start;
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

const Desc = styled.p`
  align-self: flex-start;
  font-size: ${fontSizes.lg};
`

const SeeAllProject = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${fontSizes.x3l};
  position: relative;

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


const FeaturedProjects = () => {
  return (
    <Container>
      <SectionTitle>Featured Side Projects</SectionTitle>
      {/* <Desc>Some noteworthy projects</Desc> */}
      <div>
        {
          allProjects.filter(project => project.featured).map((project, i) => (
            <Project key={i} index={i} project={project} />
          ))
        }
      </div>
      <SeeAllProject to="/all-projects" state={{ allProjects: allProjects }}>
        See all my projects
      </SeeAllProject>
    </Container>
  )
}

export default FeaturedProjects