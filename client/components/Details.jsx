import React from 'react'
import styled from 'styled-components'
import DetailsItem from './DetailsItem.jsx'

const Details = (props) => (
  <DetailContainer styling={props.styling} hide={props.hide}>
    <TitleContainer>
      <MainTitle>
        Shop & Eat
        </MainTitle>
        <SubTitle>
          Amenity information provided by <img src="https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png" style={{"width": "40p", "margin-bottom": "4px", "padding-left": "2px"}}/>
        </SubTitle>
      </TitleContainer>
    <ContentContainer>
    {props.places.map((business, key) => {
      return <DetailsItem business={business} key={key}/>
    })}
    </ContentContainer>
  </DetailContainer>
)
//padding-left: 2px; margin-bottom: 4px

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
border-color: rgb(232, 233, 234);
border-style: solid;
border-width: 1px;
visibility: ${props => {
  if (props.styling.shopAndEat && !props.hide) {
    return 'visible'
  } else {
    return 'hidden'
  }
}}
`
//margin-bottom: 4px" //img
const TitleContainer = styled.div`
text-align: left;
`
const MainTitle = styled.div`
padding: 5px;
font-size: 20px;
font-weight: bold;
`

const SubTitle = styled.div`
padding: 2px 2px 5px 5px;
font-size: 12px;
align-items: center;
display: flex;
`

const ContentContainer = styled.div`
border-radius: 5px;
overflow:scroll;
max-height: 87%;
`

export default Details;