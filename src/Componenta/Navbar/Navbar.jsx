import React from 'react'
import {Nav,Container ,Navs ,NavLogo,Sign ,Li  ,Logo ,Text} from './style'
import logo from '../../Rasim/logo.png'
const Navbar = () => {
    return (
       <Container>
           <Nav>
               <NavLogo> 
                  <Logo  src={logo}/>
                  <Text>Locus</Text>
               </NavLogo>
               <Navs>
                    <Li>Home</Li>
                    <Li>Contact</Li>
                    <Li>Location</Li>
                    <Li>About Us</Li>
               </Navs>
               <Sign>Sign Up</Sign>
           </Nav>
       </Container>
    )
}

export default Navbar
