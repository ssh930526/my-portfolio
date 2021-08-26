import React from "react"
import { Link } from "gatsby"
import { StyledNav } from "../styles/styled-components"

function Nav({ open, setOpen }) {
  return (
    <StyledNav open={open}>
      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      <Link to="https://drive.google.com/file/d/1c9_CLWNC1nHluhRRX3PdfdXjJGxd-VbX/view?usp=sharing" onClick={() => setOpen(false)}>Resume</Link>
    </StyledNav>
  ) 
}

export default Nav