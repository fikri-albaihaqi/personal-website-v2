import styled, { keyframes } from 'styled-components'
import { theme } from '../styles'
const { colors, spacing } = theme

import IconMenu from './icons/IconMenu'

const Nav = styled.nav`
  padding: ${spacing.lg};
  width: 90vw;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
`

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  h1:hover {

  }
`

const MenuIcon = styled.div`
  stroke: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a:hover svg path {
    transition: 0.4s ease-in-out;
    stroke: ${colors.yellow};
  }

  a:hover svg path:last-child {
    d: path('M56 25H0');
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Logo>FA</Logo>
      <MenuIcon>
        <a>
          <IconMenu />
        </a>
      </MenuIcon>
    </Nav>
  )
}

export default Navbar