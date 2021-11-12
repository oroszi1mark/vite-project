import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
text-align: center;
`

const logoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Logo = styled.img`
height: 40vmin;
pointer-events: none;
@media (prefers-reduced-motion: no-preference) {
  animation: ${logoSpin} infinite 20s linear;
}
`

const Header = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const Link = styled.a`
color: #61dafb;
`

const Button = styled.button`
  font-size: calc(10px + 2vmin);
`

export {
  Wrapper,
  Logo,
  Header,
  Link,
  Button
}