import styled from 'styled-components'
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import Contact from './Contact'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  `

const Home = () => {
  return (
    <Container>
      <Hero />
      <FeaturedProjects />
      <Contact />
    </Container>
  )
}

export default Home