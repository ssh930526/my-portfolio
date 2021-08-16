import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: #fff;
    height: 3rem;
    padding: 0 1rem;
    box-shadow: 1px 1px 3px 1px #808080;
    font-family: 'PT Sans Narrow', sans-serif;
    h1 {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    nav {
        display: flex;
        align-items: center;
    }
    
    ul {
        list-style: none;
        margin: 0;
        display: flex;
        align-items: center;
        li {
            margin: 0 1rem 0 0;
            a {
                font-weight: 700;
            }
        }
    }
    
`


export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
`

export const StyledLayout = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    min-height: 100vh;
    & > div {
        flex-grow: 1;
    }
`
export const StyledAbout = styled.div`
    .about{
        font-family: 'Indie Flower', cursive;
        padding-top: 40px;
        padding-left: 20px;
    }
    .profileImg{
        display: flex;
        width: 400px;
        margin-top: 100px;
        }
    .intro {
        display: flex;
        padding-left: 25rem;
        vertical-align: text-top;
        margin-top:-45%;
        font-family: Arial;
        font-size: 32px;
        font-weight: bold;
        line-height: 1.6;
    }
    .introduce{
        display: flex;
        padding-left: 25rem;
    }
    .skill {
        display: flex;
        padding-left: 25rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    .mySkill {
        display: flex;
        padding-left: 25rem;
       
    }
    .contact {
        padding-left: 5rem;
        padding-top: 80px;
    }
`
export const StyledIndex = styled.div`
    .home{
        font-family: 'Indie Flower', cursive;
        padding-top: 40px;
        padding-left: 40px;
    }
    .index {
        padding-left: 16rem;
    }
`

export const StyledProject = styled.div`
    .link{
        font-family: monospace;
        color: gray;
    }
    .project {
        margin-top: 30px;
    }
`

export const StyledContact = styled.div`
    .contact {
        font-family: 'Indie Flower', cursive;
        padding-top: 40px;
        padding-left: 50px;
    }
    .form {
        width: 200px;
        margin-left: 25rem;
    }

`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #99cc99;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
      width: 100%;
    }
  a, div {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 3rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.80s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #663399;
    }
  }
`

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  animation: fadeIn 1800ms linear forwards;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (max-width: 576px) {
      background: ${({ open }) => open ? '#fff' : '#333'};
    }
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
 
   