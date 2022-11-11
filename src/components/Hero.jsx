import React from 'react'
import styled from 'styled-components'
import bg from '../assets/bg1.jpg';
const Hero = () => {
  return (
    <Wrapper>
        <Heading>
            <div >Welcome to </div>
            <div id = "bname">Anjuli  Automobiles Pvt. Ltd.</div>
        </Heading>
        <Caption>
            <span>Quality is Remembered long,</span> 
            <span>After the price is Forgotten !</span> 
        </Caption>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100%;
    background-image: url(${bg});
    background-size: cover;
    height: 500px;
    /* opacity: 10%; */
    color:white;
    box-shadow: 2px 2px 5px #191b1b;
    @media screen and (max-width: 570px){
        height: 500px;
    }

   
`
const Heading = styled.div`
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 6rem;
    text-shadow: 0 0 6px white;
    #bname{
        color: #B00000;
        font-family: 'Lobster', cursive;
        
    }
    @media screen and (max-width: 570px){
        font-size: 2rem;
    }
`
const Caption = styled.div`
    font-size: 1.5rem;
    /* width: max-content; */
    display: flex;
    flex-direction: column;
    justify-content: center;
 align-items: center;
    font-weight: 300;
    position: relative;
    top: 7rem;
    text-shadow: 0 0 5px #c9c4c4ed;
    @media screen and (max-width: 570px){
        font-size: 1.3rem;
    }
`
export default Hero