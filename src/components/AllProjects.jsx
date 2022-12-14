import styled, { keyframes } from "styled-components"
import { useLocation } from "react-router-dom"
import { theme } from '../styles'
const { breakpoints, colors, fontSizes, fontWeights, spacing } = theme

import Socials from './Socials'
import Email from "./Email"
import IconGithub from "./icons/IconGithub"
import IconExternal from "./icons/IconExternal"
import WarpBackground from './WarpBackground'

const BG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: ${spacing.xxl} 0;

  @media (${breakpoints.xs}) {
    width: 90vw;
  }

  table {
    width: 70vw;
    border-collapse: collapse;
    margin-top: ${spacing.xl};

    thead {
      font-size: ${fontSizes.xl};
    }

    th {
      text-align: left;
      font-weight: ${fontWeights.normal};
      padding: ${spacing.base};
      border-bottom: solid ${colors.grey} 2px;
    }

    @media (${breakpoints.xs}) {
        th:nth-child(2) {
          display: none;
        }
      }

    tbody {
      font-size: ${fontSizes.xl};

      tr:hover {
        background-color: ${colors.darkGrey};
      }

      td:first-child {
        font-weight: ${fontWeights.normal};
        font-size: ${fontSizes.xl};
        color: white;
      }

      @media (${breakpoints.xs}) {
        td:nth-child(2) {
          display: none;
        }
      }

      td {
        padding: ${spacing.base};
        font-size: ${fontSizes.lg};
        color: ${colors.grey};
      }
    }
  }
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const SectionTitle = styled.h1`
  font-size: ${fontSizes.x5l};
  align-self: flex-start;

  @media (${breakpoints.xs}) {
    font-size: ${fontSizes.x3l};
    align-self: center;
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

const Desc = styled.p`
  align-self: flex-start;
  font-size: ${fontSizes.lg};

  @media (${breakpoints.xs}) {
    align-self: center;
  }
`

const LinkIcon = styled.span`
  display: ${({ external }) => external === '' ? 'none' : 'table-cell'};

  &:first-child {
    padding-right: ${spacing.sm};
  }

  svg {
    stroke: ${colors.grey};
    width: 20px;
  }

  a:hover svg {
    stroke: white;
  }
`

const AllProjects = () => {
  const { state } = useLocation()
  const projects = state.allProjects

  return (
    <Container>
      <BG>
        <WarpBackground />
      </BG>
      <Socials />
      <Email />
      <SectionTitle data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">All of My Side Projects</SectionTitle>
      <Desc data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">A list of things i've worked on</Desc>
      <table data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
        <thead>
          <tr>
            <th>Title</th>
            <th>Built With</th>
            <th>Year</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <tr key={i}>
              <td>{project.title}</td>
              <td>
                {project.tech?.length > 0 &&
                  project.tech.map((item, i) => (
                    <span key={i}>
                      {item}
                      {i !== project.tech.length - 1 && <span> &bull; </span>}
                    </span>
                  ))}
              </td>
              <td>{project.year}</td>
              <td>
                <LinkIcon external={project.external}>
                  <a href={project.external} target='_blank'><IconExternal /></a>
                </LinkIcon>
                <LinkIcon>
                  <a href={project.github} target='_blank'><IconGithub /></a>
                </LinkIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default AllProjects