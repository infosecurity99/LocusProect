import React from 'react'
import {Container ,Left ,Right ,Form ,Input ,Textarea ,P ,Button ,Title,Desc,Lines ,Line} from './style'
const Contact = () => {
    return (
       <Container>
           <Left>
              <Title>Contact Us</Title>
              <Desc>
                  Have any questions? Want help
                  before getting started?
              </Desc>
              <Lines>
                 <Line></Line>   
                 <Line></Line>           
              </Lines>
           </Left>
           <Right>
                <Form>
                <P>
                   <Input type='text' placeholder='Full name'/>
                </P>
                <P>
                    <Input type='email' placeholder='Email address'/>
                </P>
                <P>
                  <Textarea  placeholder="Description" >
                  
                  </Textarea>
                </P>
                <P>
                  <Button>Submit</Button>
                </P>
                </Form>
           </Right>
       </Container>
    )
}

export default Contact
