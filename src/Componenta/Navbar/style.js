import styled from "styled-components";

export const Container=styled.div`
//margin-bottom: 100px;
`

export const Nav=styled.div`
display: flex;
justify-content: space-between;
flex-direction:row;
align-items: center;
`

export const NavLogo=styled.div`
display: flex;
cursor: pointer;
`

export const Logo=styled.img`
width: 37px;
height: 45px;
margin-right: 14px;
`
export const Text=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 35px;
line-height: 52px;
color: #58A9A5;
`

export const Navs=styled.div`
display: flex;
flex-direction:row;
align-items: center;
width: 520px;
height: 70px;
justify-content: space-between;
//bottomborder: 1px solid green;
`

export const Sign=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
color: #FFFFFF;
background: #58A9A5;
border-radius: 15px;
width: 229px;
height: 73px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
transition: all .8s ease;
cursor: pointer;
&:hover{
border: 1px solid  #58A9A5;
background-color: white;
color:  #58A9A5;
transition: all .8s ease;
}
`
export const Li=styled.div`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 23px;
color: #404242;
cursor: pointer;
padding-bottom: 5px;
transition: all .6s ease;
border-bottom: 3px solid  transparent;
:hover{
color:#58A9A5;
transform: scale(1.009);
font-weight: bolder;
padding-bottom: 5px;
border-bottom: 3px solid  #FEC62D;
transition: all .6s ease;
border-radius: 5px;
}
`