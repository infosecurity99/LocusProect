import React from 'react'
import {Container  ,Left ,Right ,BanerImg,Title, Button ,Desc} from './style'
import baner from '../../Rasim/header.png'
const Baner = () => {
    return (
       <Container>

               <Left>
                     <Title>Get the inspiration of interior design  here</Title>
                     
                     <Desc>architecture not only about engineering, it even 
                      lands to art and aesthetics. With us, you will get 
                      a residentical design with an extraordinary touch 
                      of art.
                      </Desc>
                      <Button>Let’s go</Button>
               </Left>
                
               <Right>
                    <BanerImg  src={baner}/>
               </Right>

       </Container>
    )
}

export default Baner
