import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import allProjects from '../data/allProjects.json'
import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

const NavContainer = styled.nav`
  padding: ${spacing.lg};
  background-color: ${({show}) => show ? colors.black : 'transparent'};
  position: ${({ show }) => show ? 'fixed' : 'absolute'};
  z-index: 10;
`

const Nav = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
    transform: ${({show}) => show ? 'rotate(45deg)' : 'rotate(0deg)'};
    background-color: white;
  }

  a::after {
    content: '';
    top: ${({show}) => show ? '0' : 'auto'};
    bottom: ${({show}) => show ? 'auto' : '0'};
    right: 0;
    width: ${({show}) => show ? '100%' : '72%'};
    height: 2px;
    position: absolute;
    transition: 0.2s ease;
    transform: ${({show}) => show ? 'rotate(-45deg)' : 'rotate(0deg)'};
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
  height: 81vh;
  background-color: ${colors.black};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ show }) => show ? 'flex' : 'none'};
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuNumber = styled.span`
  font-size: ${fontSizes.sm};
`

const MenuItem = styled.div`
  font-size: ${fontSizes.x5l};
  text-align: center;
  margin: ${spacing.sm} 0;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;

    position: sticky;

    &::before {
      background: ${colors.purple};
      z-index: 5;
      content: "";
      width: 100%;
      position: absolute;
      bottom: 8px;
      height: 0px;
      left: 0;
      display: block;
      transition: height 0.5s ease-in-out;
      z-index: -1;
    }

    &:hover::before {
      height: 60%;
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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <NavContainer show={showMenu}>
      <Nav>
        <Logo to='/'>FA</Logo>
        <MenuIcon show={showMenu} onClick={() => setShowMenu(!showMenu)}>
          <a></a>
        </MenuIcon>
      </Nav>
      <Menu show={showMenu}>
        <MenuList>
          <MenuItem>
            <MenuNumber>01</MenuNumber> <Link to="/" onClick={() => setShowMenu(!showMenu)}>HOME</Link>
          </MenuItem>
          <MenuItem>
            <MenuNumber>02</MenuNumber> <Link to="/all-projects" state={{ allProjects: allProjects }} onClick={() => setShowMenu(!showMenu)}>ALL PROJECTS</Link>
          </MenuItem>
          <MenuItem>
            <MenuNumber>03</MenuNumber> <Link to="/about" onClick={() => setShowMenu(!showMenu)}>ABOUT ME</Link>
          </MenuItem>
        </MenuList>
        <Contact>
          <div>
            <Social href='' row>Github</Social>
            <Social href='' row>Codepen</Social>
            <Social href='' row>Linkedin</Social>
          </div>
          <Social href=''>fikrialbaihaqi@gmail.com</Social>
        </Contact>
      </Menu>
    </NavContainer>
  )
}

export default Navbar