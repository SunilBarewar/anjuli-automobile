import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.jpeg'
import { BiMenu } from 'react-icons/bi';
const Navbar = () => {
  const [clicked,setCliked] = useState(false);
  return (
    <Wrapper>
      <Left>
        <Logo><Img src={logo} alt="logo"></Img></Logo>
        <BrandName> Anjuli Automobile</BrandName>
      </Left>
      <MenuIcon ><BiMenu className='menu' onClick={() => setCliked(!clicked)}/></MenuIcon>
      <Right  click ={clicked}>
        <MenuContainer>
          <MenuItem onClick={() => setCliked(!clicked)}>Home</MenuItem>
          <MenuItem onClick={() => setCliked(!clicked)}>Motorcycles</MenuItem>
          <MenuItem onClick={() => setCliked(!clicked)}>Contact Us</MenuItem>
        </MenuContainer>
      </Right>
    </Wrapper>

  )
}
const MenuIcon = styled.div`
  .menu{
      /* background: green; */
      position: absolute;
      right: 1rem;
      top: .8rem;
      font-size : 2rem;
      text-align: center;
display: none;
    }
    @media screen and (max-width: 570px){
      .menu{

        display: block;
      }
    }

`
const Wrapper = styled.div`
position: relative;
  width:100%;
  /* height:3rem; */
  display:flex;
  background-color:var(--red);
  justify-content:space-between;
  color : var(--white);
  align-items:center;
  position: relative;
    @media screen and (max-width: 768px){
      gap:2rem;
    }
    @media screen and (max-width: 570px){
      height: 3rem;
    }
`
const Left = styled.div`
display:flex;
align-items:center;
gap:2rem;
justify-content: center;
  @media screen and (max-width: 768px){
    gap:2rem;
  }
`
const Logo = styled.div`
display: flex;
width:2.8rem;
margin-left:20px;
box-sizing: border-box;
padding: 2px;
@media screen and (max-width: 570px){
    width: 3.4rem;
    align-items: center;
    margin-left:8px ;
  }
`
const Img = styled.img`
width : 100%;
border-radius:10px;
`
const BrandName = styled.h1`
font-family: 'Lobster', cursive;
letter-spacing:2px;
color:white;
font-size: 1.5rem;
@media screen and (max-width: 570px){
  font-size:1.2rem;
}
`
const Right = styled.div`
  font-family: var(--primary-font);
  width: max-content;
  margin-right: 12px;
  font-size: .6rem;
  @media screen and (max-width: 570px){
    width: auto;
    display: ${(props) => props.click ?"block":"none"};
  }
`
const MenuContainer = styled.ul`
display :flex;
align-items: center;
justify-content:center;
gap:2.3rem;
@media screen and (max-width: 768px){
  gap:2rem;
}

@media screen and (max-width: 570px){
    position: absolute;
    width: 6rem;
    right: 0;
    top: 3rem;
    flex-direction: column;
    font-size: 14px;
    background:var(--red);
    border-radius: 0 0 5px 5px;
    box-shadow: 0 0  6px var(--red);
    gap:.3rem;
  }
`
const MenuItem = styled.li`
list-style:none;
@media screen and (max-width: 570px){
  padding: 5px;
  &:hover{
    cursor: pointer;
  }
}
`

export default Navbar