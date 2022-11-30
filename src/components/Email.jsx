import styled from 'styled-components'
import { theme } from '../styles'
const { breakpoints, colors, fontSizes, spacing } = theme

const RightSide = styled.div`
  position: fixed;
  right: 5%;
  bottom: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  @media (${breakpoints.xs}) {
    display: none;
  }

  @media (${breakpoints.sm}) {
    display: none;
  }

  @media (${breakpoints.lg}) {
    display: flex;
  }

  a {
    text-decoration: none;
    color: ${colors.grey};
    font-size: ${fontSizes.sm};
    margin-bottom: ${spacing.sm};
  }
  a:hover {
    color: white;
  }
`

const RightLine = styled.div`
  border-right: 1px solid ${colors.grey};
  height: 120px;
  margin-right: 8px;
  margin-top: ${spacing.sm};
`

const Email = () => {
  return (
    <RightSide data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
      <a href="">
        fikrialbaihaqi@gmail.com
      </a>
      <RightLine />
    </RightSide>
  )
}

export default Email