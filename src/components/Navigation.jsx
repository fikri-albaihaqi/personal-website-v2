import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import allProjects from '../data/allProjects.json'
import { theme } from '../styles'
const { breakpoints, colors, fontSizes, spacing } = theme

const NavContainer = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ show }) => show ? colors.black : 'transparent'};
  position: ${({ show }) => show ? 'fixed' : 'absolute'};
  z-index: ${({ show }) => show ? '10' : '0'};
`

const Nav = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.lg} 0;
`

const Logo = styled(Link)`
  font-weight: bold;
  font-size: ${fontSizes.x3l};
  text-decoration: none;
  color: white;
  cursor: pointer;
`

const MenuIcon = styled.div`
  stroke: white;
  cursor: pointer;

  a {
    z-index: 999;
    width: 48px;
    height: 24px;
    background: none;
    position: relative;
    display: inline-flex;
    margin-top: 0.699em;
    color: white;
  }

  a::before {
    content: '';
    top: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.2s ease;
    transform: ${({ show }) => show ? 'rotate(45deg)' : 'rotate(0deg)'};
    background-color: white;
  }

  a::after {
    content: '';
    top: ${({ show }) => show ? '0' : 'auto'};
    bottom: ${({ show }) => show ? 'auto' : '0'};
    right: 0;
    width: ${({ show }) => show ? '100%' : '72%'};
    height: 2px;
    position: absolute;
    transition: 0.2s ease;
    transform: ${({ show }) => show ? 'rotate(-45deg)' : 'rotate(0deg)'};
    background-color: white;
  }

  &:hover a::after {
    width: 100%;
  }

  &:hover a::before, &:hover a::after {
    background-color: ${colors.purple};
  }
`

const Menu = styled.div`
  display: flex;
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${colors.black};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ show }) => show ? '1' : '0'};
  z-index: ${({ show }) => show ? '-1' : '-99'};
  transition: all 0.5s ease-in;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: white;
  }

  ${({ location }) => location === '/' ? '& div:nth-child(1) a::before {height: 80%;}'
    : location === '/all-projects' ? '& div:nth-child(2) a::before {height: 80%;}'
      : location === '/about' ? '& div:nth-child(3) a::before {height: 80%;}' : ''}
`

const MenuNumber = styled.span`
  font-size: ${fontSizes.sm};
`

const MenuItem = styled.div`
  font-size: ${fontSizes.x5l};
  text-align: center;
  margin: ${spacing.sm} 0;
  cursor: pointer;

  @media (${breakpoints.xs}) { 
    font-size: ${fontSizes.x3l};
  }

  a {
    text-decoration: none;
    position: sticky;

    &::before {
      background: ${colors.purple};
      z-index: 5;
      content: "";
      width: 100%;
      position: absolute;
      bottom: 8px;
      height: 0;
      left: 0;
      display: block;
      transition: height 0.5s ease-in-out;
      z-index: -1;
    }

    &:hover::before {
      height: 80%;
    }
  }
`

const Contact = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 90vw;
  bottom: 0;
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

  &::before {
    background: ${colors.purple};
    z-index: 5;
    content: "";
    width: 100%;
    position: absolute;
    bottom: 2px;
    height: 6px;
    left: 0;
    display: block;
    transition: height 0.5s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    height: 70%;
  }
`

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [projects, setProjects] = useState(allProjects)
  const location = useLocation().pathname

  return (
    <NavContainer show={showMenu}>
      <Nav>
        <Logo to='/'>FA</Logo>
        <MenuIcon show={showMenu} onClick={() => setShowMenu(!showMenu)} >
          <a></a>
        </MenuIcon>
      </Nav>
      <Menu show={showMenu}>
        <MenuList location={location} show={showMenu}>
          <MenuItem location={location}>
            <MenuNumber>01</MenuNumber> <Link to="/" onClick={() => setShowMenu(!showMenu)}>HOME</Link>
          </MenuItem>
          <MenuItem location={location}>
            <MenuNumber>02</MenuNumber> <Link to="/all-projects" state={{ allProjects: projects }} onClick={() => setShowMenu(!showMenu)}>ALL PROJECTS</Link>
          </MenuItem>
          <MenuItem location={location}>
            <MenuNumber>03</MenuNumber> <Link to="/about" onClick={() => setShowMenu(!showMenu)}>ABOUT ME</Link>
          </MenuItem>
        </MenuList>
        <Contact>
          <div>
            <Social href='https://github.com/fikri-albaihaqi' target='_blank' row>Github</Social>
            <Social href='https://codepen.io/Fikri-Code' target='_blank' row>Codepen</Social>
            <Social href='https://www.linkedin.com/in/muhamad-fikri-albaihaqi-0a8444219/' target='_blank' row>Linkedin</Social>
          </div>
          <Social href='mailto:fikrialbaihaqi@gmail.com'>fikrialbaihaqi@gmail.com</Social>
        </Contact>
      </Menu>
    </NavContainer>
  )
}

export default Navbar