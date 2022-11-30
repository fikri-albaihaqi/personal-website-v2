import styled from 'styled-components'
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import Contact from './Contact'
import Socials from './Socials'
import Email from './Email'
import WarpBackground from './WarpBackground'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

const Home = () => {
  return (
    <Container>
      <WarpBackground />
      <Socials />
      <Email />
      <Hero />
      <FeaturedProjects />
      <Contact />
    </Container>
  )
}

export default Home