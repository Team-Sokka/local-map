import React from 'react'
import styled from 'styled-components'
import DetailsItem from './DetailsItem.jsx'

const Details = (props) => (
  <DetailContainer styling={props.styling}>
    <TitleContainer><h2>Highlights</h2></TitleContainer>
    <ContentContainer>
    {console.log(props)}
    {props.places.map((business, key) => {
      return <DetailsItem business={business} key={key}/>
    })}
    </ContentContainer>
  </DetailContainer>
)

const DetailContainer = styled.div`
height: 88%;
width: 30%;
max-width: 300px;
background-color: white;
position: absolute;
z-index: 500;
margin-left: 68%;
margin-top 10px;
border-radius: 8px;
visibility: ${props => {
  if (props.styling.commute || props.styling.crime || props.styling.schools || props.styling.shopAndEat ) {
    return 'visible'
  } else {
    return 'hidden'
  }
}}
`
const TitleContainer = styled.div`
text-align: center
`

const ContentContainer = styled.div`
border-radius: 5px;
overflow:scroll;
max-height: 87%;
`

export default Details;