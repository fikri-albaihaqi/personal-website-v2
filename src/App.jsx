import { useState } from 'react'
import { GlobalStyle } from './styles'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyle />
      <Hero />
    </div>
  )
}

export default App
