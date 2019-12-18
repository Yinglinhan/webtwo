import React from "react"
import styled from "@emotion/styled"
import {css} from "@emotion/core"
import {Link} from "gatsby"


import { Logo,LineLogo } from "../../../assets/siteicons"
import {navItems,siteColor} from "../../../assets/siteconfig"
const Logobox = styled.div(css`
    width:2.4rem;
    display:flex;
    flex:0 0 auto;
   margin-left:0.7rem;
`)
const Slogan = styled(LineLogo)`
  
`

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: Uppercase;
  font-family: "optician sans";
  color: ${siteColor.black};
  height: 100%;
  display: flex;
  align-items: center;
  &:hover:hover {
    background-color: ${siteColor.black};
    color: white;
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  ${"" /* background-color: red; */}
  flex: 1;
  align-items: center;
  min-width: 780px;
  & > a {
    padding: 0.7rem 2rem;
  }
  @media (min-width: 1080px) {
    & > a {
      padding: 0.7rem 3rem;
    }
  }
  @media (min-width: 1380px) {
    & > a {
      padding: 0.7rem 5rem;
    }
  }
`

console.log(Object.keys(navItems))

const Header = ()=>{
    return (
      <header
        css={css`
          display: flex;
          border-bottom: 4px solid ${siteColor.black};
          align-items: center;
          justify-content: space-between;
          .active-nav {
            color: hsl(45, 0%, 70%);
          }
          & > a {
            margin-left: 0.7rem;
            display: flex;
          }
          .line-logo {
            display: none;
          }
          .normal-logo {
            width: 2.4rem;
            height: 100%;
          }

          @media (min-width: 1880px) {
            .normal-logo {
              display: none;
            }
            .line-logo {
              display: block;
            }
          }
        `}
      >
        <Link to="/">
          <Logo className="normal-logo"></Logo>
          <LineLogo className="line-logo"></LineLogo>
        </Link>
        <Nav>
          {Object.keys(navItems).map((item, index) => {
            return (
              <NavLink to={navItems[item].url} activeClassName="active-nav">
                {navItems[item].title}
              </NavLink>
            )
          })}
        </Nav>
      </header>
    )
}

export default Header