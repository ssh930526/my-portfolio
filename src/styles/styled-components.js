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

