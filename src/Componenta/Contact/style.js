import styled from "styled-components";

export const Container=styled.div`
margin-top: 240px;
margin-bottom: 300px;
height: 450px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
`
export const Right=styled.div`
flex: 5;
box-sizing: border-box;
height: 450px;
`
export const Form=styled.form`
width: 100%;
height: 450px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Input=styled.input`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 37px;
color: #486958;
width: 90%;
border: none;
outline: none;
border-bottom: 1px solid #000000;
padding-bottom: 18px;
`
export const Textarea=styled.textarea`
width: 90%;
height: 44px;
border: none;
outline: none;
border-bottom: 1px solid #000000;
margin-top: 43px;
`
export const P=styled.p`
margin-top: 32px;
width: 90%;
border: none;
outline: none;
`
export const Button=styled.div`
width: 231px;
height: 68px;
background: #58A9A5;
border-radius: 20px 20px 20px 0px;
display: flex;
align-items: center;
justify-content: center;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;
color: #FFFFFF;
transition: all .8s ease;
margin-left: auto;
margin-right: 70px;
cursor: pointer;
&:hover{
    background-color: white;
    border: 1px solid #58A9A5;
    color: #58A9A5;
    transition: all .8s ease;
}
`
export const Left=styled.div`
flex: 3;
height: 450px;
display: flex;
flex-direction: column;
text-align: left;
`
export const Title=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 64px;
color: #1C2323;
margin-top: 55px;
`
export const Desc=styled.div`
width: 398px;
height: 76px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #486958;
margin-top: 10px;
`
export const Lines=styled.div`
margin-top: 37px;
`
export const Line=styled.div`
width: 135px;
height: 0px;
border: 4px solid #58A9A5;
margin-top: 4px;
`