import React from 'react'
import styled from 'styled-components'

const Details = (props) => (
  <DetailContainer styling={props.styling}>
    <TitleContainer><h2>Highlights</h2></TitleContainer>
    <ContentContainer>

    </ContentContainer>
  </DetailContainer>
)

const DetailContainer = styled.div`
height: 70%;
width: 25%;
background-color: purple;
position: absolute;
z-index: 500;
margin-left: 70%;
margin-top 8%;
visibility: ${props => {
  if (props.styling.commute || props.styling.crime || props.styling.schools || props.styling.shopAndEat ) {
    return 'visible'
  } else {
    return 'hidden'
  }
}}
`
const TitleContainer = styled.div`
background-color: blue;
`

const ContentContainer = styled.div`
background-color: green;
`

export default Details;