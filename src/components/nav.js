import React from "react"
import { Link } from "gatsby"
import { StyledNav } from "../styles/styled-components"

function Nav({ open, setOpen }) {
  return (
    <StyledNav open={open}>
      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setOpen(false)}>About</Link>
    </StyledNav>
  )
}

export default Nav