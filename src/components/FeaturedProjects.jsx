import styled from "styled-components"
import { useState } from "react"
import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

import Project from "./Project"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: ${spacing.xl} 0;
`

const SectionTitle = styled.h1`
  font-size: ${fontSizes.x4l};
`

const SeeAllProject = styled.a`
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
    bottom: 8px;
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
  const [projects, setProjects] = useState([
    {
      title: 'Polatify',
      type: 'Web App',
      deployed: true,
      desc: 'A web app for visualizing user top track & artist in polaroid photo style by using data that retrieved from the Spotify API.',
      tech: [
        'Vue JS',
        'Express',
        'Tailwind CSS',
        'Spotify API',
      ],
      links: [
        'https://github.com/fikri-albaihaqi/polatify',
        'https://polatify.cyclic.app/',
      ],
      image: '../src/assets/polatify.png',
    },
    {
      title: 'Cinefo',
      type: 'Web App',
      deployed: true,
      desc: 'Cinefo is a web app that show all information about movie and TV show like ratings, actors, etc.',
      tech: [
        'Vue JS',
        'Tailwind CSS',
        'The Movie Database API',
      ],
      links: [
        'https://github.com/fikri-albaihaqi/cinefo',
        'https://cinefo.netlify.app/'
      ],
      image: '../src/assets/cinefo.png',
    },
    {
      title: 'This is Indonesia',
      type: 'Web App',
      deployed: true,
      desc: 'This is Indonesia is a website that contains information about Indonesia for traveller.',
      tech: [
        'React JS',
        'Tailwind CSS'
      ],
      links: [
        'https://github.com/fikri-albaihaqi/this-is-indonesia',
        'https://thisisindonesia.netlify.app/'
      ],
      image: '../src/assets/this-is-indo.png',
    },
  ])

  return (
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      <div>
        {
          projects.map((project, i) => (
            <Project key={i} project={project} />
          ))
        }
      </div>
      <SeeAllProject href="">
        See all my projects
      </SeeAllProject>
    </Container>
  )
}

export default FeaturedProjects