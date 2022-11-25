import styled, { keyframes } from "styled-components"
import IconEmail from "./icons/IconEmail"
import IconWhatsapp from "./icons/IconWhatsapp"
import { theme } from '../styles'
const { colors, fontSizes, spacing } = theme

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;

  p {
    text-align: center;
    font-size: ${fontSizes.xl};
  }
`

const gradient = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

const GetInTouch = styled.h1`
  font-weight: bold;
  font-size: ${fontSizes.x5l};
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

const ContactContainer = styled.div`
  display: flex;
`

const [Email, Whatsapp] = Array(3).fill(styled.div`
  margin-right: ${spacing.md};
  cursor: pointer;
  svg {
    width: 40px;
  }

  svg path {
    fill: ${colors.grey};
  }

  a:hover svg path {
    fill: white;
  }
`)

const Contact = () => {
  return (
    <Container>
      <GetInTouch>
        LET'S GET IN TOUCH
      </GetInTouch>
      <p>
        I’m currently available for full-time employment in Bandung <br />
        and freelance projects.
      </p>
      <ContactContainer>
        <Email>
          <a href="">
            <IconEmail />
          </a>
        </Email>
        <Whatsapp>
          <a href="">
            <IconWhatsapp />
          </a>
        </Whatsapp>
      </ContactContainer>
    </Container>
  )
}

export default Contact