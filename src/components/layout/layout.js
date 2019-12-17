import React from 'react'
import Header from './header/header'
import Content from './contentarea/contentarea'
import { Global,css } from "@emotion/core"


const Layout = ()=>{
    return (
      <>
        <Global
          styles={css`
            html *{
              box-sizing:border-box;
            }
            body{
              margin:0;
            }
          `}
        ></Global>
        <Header />
        <Content />
      </>
    )
}

export default Layout