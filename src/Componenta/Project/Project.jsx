import React from 'react'
import {Container ,Content ,Title ,Desc  ,Line ,Lines ,Row  ,Card ,CardHeader ,Title3 ,Desc2 ,Img9 ,CardBody}  from './style'
import rec1 from '../../Rasim/rec1.png'
import rec2 from '../../Rasim/rec2.png'
import rec3 from '../../Rasim/rec3.png'
const Project = () => {
    return (
      <Container>
          <Content>
            <Title>Our project </Title>
            <Desc>Introducing our first official project</Desc>
             <Line>
               <Lines></Lines>
               <Lines></Lines>
             </Line>
          </Content>

          <Row>
               <Card>
                      <CardHeader>
                               <Title3>Project Livingroom</Title3>
                               <Desc2>
                               A simple guide to create the perfect livingro-
                               om for . Night Watc works beautifully in a wi-
                               de gamut of arrangements.
                               </Desc2>
                      </CardHeader>
                      <CardBody>
                            <Img9 src={rec1}/>
                      </CardBody>
               </Card>

               <Card>

               <CardBody>
                    <Img9 src={rec2}/>
                </CardBody>

               <CardHeader style={{marginTop:'35px'}}>
                        <Title3>Project workspace</Title3>
                        <Desc2>
                        A simple guide to create the perfect livingro-
                        om for . Night Watc works beautifully in a wi-
                        de gamut of arrangements.
                        </Desc2>
               </CardHeader>
        </Card>

               <Card>
               <CardHeader>
                        <Title3>Library</Title3>
                        <Desc2>
                        A simple guide to create the perfect livingro-
                        om for . Night Watc works beautifully in a wi-
                        de gamut of arrangements.
                        </Desc2>
               </CardHeader>
               <CardBody>
                     <Img9 src={rec3}/>
               </CardBody>
        </Card>
          </Row>
      </Container>
    )
}

export default Project
