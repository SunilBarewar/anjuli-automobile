import React from 'react'
import styled from 'styled-components'
import services from '../data/services.js'
const Services = () => {
    return (
        <Wrapper>
            <Heading>Services</Heading>


            <ItemContainer>
                {
                    services.map((service) => {
                        return (

                            <Item>
                                <Title>
                                    <Img src={service.icon}></Img>
                                    <Headline>{service.heading}</Headline>
                                </Title>
                                <Discription>
                                    <p>{service.discription[0]}</p>
                                    <p>{service.discription[1]}</p>
                                </Discription>
                               
                            </Item>
                        )
                    })
                }
            </ItemContainer>

        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    width: 100%;
    color: #101010;
`
const Heading = styled.h2`
font-size: 2rem;
padding-top: 2rem;
padding-bottom: .3rem;
border-bottom: .3rem solid var(--red);
border-radius: 20rem;
width: 100%;
text-align: center;
margin-bottom: 6px;
`

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
`
const Item = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 100%;
gap:.5rem;
`
const Title = styled.div`
display: flex;
align-items: center;
gap: 1.2rem;
`
const Headline = styled.div`
font-size: 1rem;
font-weight: 500;
@media screen and (max-width: 570px){
    font-size: .8rem;
}
`
const Img = styled.img`
width: 2rem;
`
const Discription = styled.div`
background: #F2F2F2;
display: flex;
flex-direction: column;
padding: 6px;
color: #272525;
font-size:.7rem;
gap: 2px;
border-radius: 5px;
`

export default Services