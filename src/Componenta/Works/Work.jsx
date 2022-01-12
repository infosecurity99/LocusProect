import React from 'react'
import {Container ,Top ,Bottom ,Desc2 ,Content ,Vidio,Position,Title2, Img5,Title,Desc ,Left ,Right ,Img,Des,Img3  ,Lefter ,Righter} from './style'
import first from '../../Rasim/first.png'
import right from '../../Rasim/right.png'
import second from '../../Rasim/second.png'

const Work = () => {
    return (
        <Container>
             
          <Content>
               <Title>How it works</Title>
               <Desc>Spice up your space even simpler <br/>than you think</Desc>
          </Content>

            <Top>

               <Left>
                    <Img  src={first}/>
               </Left>
                 
               <Right>
                  <Des>
                      We provide design and build 
                      for commercial building, 
                     interior and furniture to improve 
                      the better life. 
                  </Des>
                  <Vidio>S E E  V I D E O</Vidio>

                  <Position>
                        <Img3  src={right}/>
                  </Position>

               </Right>

            </Top>

            <Bottom>

                 <Lefter>
                   <Img5  src={second}/>
                 </Lefter>

                 <Righter>
                    <Title2>
                       Our mission is to 
                       deliver aesthetic visual 
                       for your home
                    </Title2>

                    <Desc2>
                    By applying bacis psychology principles, 
                    we are going to explain how perception 
                    works and how we can use this understanding 
                    to maximise the space that we occupy in 
                    our homes.
                    </Desc2>
                 </Righter>
            </Bottom>

        </Container>
    )
}

export default Work
