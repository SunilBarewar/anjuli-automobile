import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
const Home = () => {
  
  return (
    <Wrapper>
      
        <Navbar/>
        <Hero/>
        <Gallery/>
        <Services/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 100%;
height:100%;
background: #1E211D;
position: relative;
`

const MenuIcon = styled.div`
  .menu{
      /* background: green; */
      position: absolute;
      right: 1rem;
      top: .8rem;
      font-size : 2rem;
      text-align: center;
      /* display: none; */
    }
    @media screen and (max-width: 450px){
      .menu{
        display: block;
      }
    }

`
export default Home