import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/bull1.png'
import img2 from '../assets/bull2.png'
import img3 from '../assets/bull3.png'
import img4 from '../assets/bull4.png'
import img5 from '../assets/bull5.jpg'
import img6 from '../assets/bull6.jpg'
const Gallery = () => {
    return (
        <Wrapper>
            <Heading>Motorcycles</Heading>
            <Container>
                <ImgContainer><Img src={img1}></Img></ImgContainer>
                <ImgContainer><Img src={img2}></Img></ImgContainer>
                <ImgContainer><Img src={img3}></Img></ImgContainer>
                <ImgContainer><Img src={img4}></Img></ImgContainer>
                <ImgContainer><Img src={img5}></Img></ImgContainer>
                <ImgContainer><Img src={img6}></Img></ImgContainer>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const Heading = styled.h2`
font-size: 2rem;
padding-top: 2rem;
padding-bottom: .3rem;
color: white;
border-bottom: .3rem solid var(--red);
border-radius: 20rem;
width: 100%;
text-align: center;
margin-bottom: 6px;
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-basis:22.2222%;
width: 90%;
margin: 10px;
`

const ImgContainer = styled.div`
width: 50%;
box-sizing: border-box;
height: auto;
padding: 10px;
@media screen and (max-width: 570px){
 width : 90%;
 margin: 0 10px;
}
`
const Img = styled.img`
border-radius: 10px;
width: 95%;
&:hover{
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
}
`
export default Gallery