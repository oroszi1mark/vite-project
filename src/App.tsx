import { useState } from 'react'
import logo from './logo.svg'
import { Button, Header, Link, Logo, Wrapper } from './App.styled'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {' | '}
          <Link
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </p>
      </Header>
    </Wrapper>
  )
}

export default App
