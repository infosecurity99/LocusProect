import React from 'react'
import {Container ,Content ,Title ,Reck ,Img1,Img2 ,Img3 ,Img4 ,Span ,Botos,Description ,Title3,Company,Row ,Img5,Left ,Right} from './style'
import sel1 from '../../Rasim/sel1.png'
import sel2 from '../../Rasim/sel2.png'
import sel3 from '../../Rasim/sel3.png'
import sel4 from '../../Rasim/sel4.png'
import sel5 from '../../Rasim/sel5.png'
const Testimonial = () => {
    return (
       <Container>

          <Content>
              <Title>Testimonial</Title>
          </Content>
            
          <Reck>
              <Img1  src={sel1}/>
              <Img2  src={sel2}/>
              <Img3  src={sel3}/>
              <Img4  src={sel4}/>
          </Reck>

           <Company>

                 <Left>
                     <Img5  src={sel5}/>
                 </Left>

                 <Right>
                      <Row>
                         <Title3><Span>105</Span>  project <br/>  done</Title3>
                         <Title3><Span>12</Span> years of experience</Title3>
                         <Title3><Span>10+</Span> big company partnership</Title3>
                      </Row>
                      <Row>
                         <Description>
                         "Not able to tell you how happy I am with interior design. 
                         Interior design has completely surpassed our expectations. 
                         Interior design saved my business. Interior design is worth 
                         much more than I paid."
                        <Botos>
                        - Roscoe
                        </Botos>
                         </Description>
                      </Row>
                 </Right>

           </Company>
       </Container>
    )
}

export default Testimonial
