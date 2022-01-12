import styled from "styled-components";

export const Container=styled.div`
//border: 1px solid black;
margin-top: 105px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`

export const Right=styled.div`
height: 702px;
width: 773.87px;
background: #CCF0E6;
border-radius: 120px;
position: relative;
`
export const BanerImg=styled.img`
width: 100%;
height: 100%;
`

export const Left=styled.div`

`
export const Title=styled.div`
width: 674px;
height: 315px;
font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 70px;
line-height: 105px;
color: #1C2323;
`
export const Desc=styled.div`
width: 743px;
height: 180px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 45px;
color: #404242;
`
export const Button=styled.div`
width: 271px;
height: 80px;
background: #58A9A5;
border-radius: 20px 20px 20px 0px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
transition: all .7s ease;
border: 1px solid transparent;
cursor: pointer;
&:hover{
    border: 1px solid #58A9A5;
    color: #58A9A5;
    background-color: white;
    transition: all .7s ease;
    cursor: pointer;
}
`