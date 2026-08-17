import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'

const StyledAlink = styled.a`
    color: #000;
    text-decoration: none;
    font-size: 20px;
`

const Nav:React.FC = () => {
  return (
    <header>
        <div style={{
            width: "100%",
            maxWidth: "1800px",
            margin: "0 auto",
            display: "flex",
            paddingTop: "50px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <img src={logo} alt="" style={{
                width: "300px"
            }}/>
            <nav style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginTop: "20px"
            }}>
                <StyledAlink href="#">Home</StyledAlink>
                <StyledAlink href="#hitw">How it works</StyledAlink>
                <StyledAlink href="#contact">Contact</StyledAlink>
                <StyledAlink href="#">Career</StyledAlink>
            </nav>
        </div>
    </header>
  )
}

export default Nav
