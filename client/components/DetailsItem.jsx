import React from 'react';
import styled from 'styled-components'

const DetailsItem = (props) => (
<ItemContainer>
<BusinessImage src={props.business.image_url}></BusinessImage>
  <ItemTitle>
    {props.business.name}
    {console.log(props.business)}
  </ItemTitle>
  <ItemSubtitle>
    {props.business.categories[0].title}
  </ItemSubtitle>
  <ItemContent>

  {/* <img src={} style="max-height: 50px"/> */}
  <ReviewsAndRating><img src={ratingImages[props.business.rating]}/> {props.business.review_count} Reviews <a target="_blank" href={props.business.url}><img src="https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png" style={{width: '40px'}}/></a></ReviewsAndRating>
  </ItemContent>

</ItemContainer>
)
var ratingImages = {
  '0': 'https://www.trulia.com/images/txl/icons/yelp/small_0.png',
  '1': 'https://www.trulia.com/images/txl/icons/yelp/small_1.png',
  '1.5': 'https://www.trulia.com/images/txl/icons/yelp/small_1_half.png',
  '2': 'https://www.trulia.com/images/txl/icons/yelp/small_2.png',
  '2.5': 'https://www.trulia.com/images/txl/icons/yelp/small_2_half.png',
  '3': 'https://www.trulia.com/images/txl/icons/yelp/small_3.png',
  '3.5': 'https://www.trulia.com/images/txl/icons/yelp/small_3_half.png',
  '4': 'https://www.trulia.com/images/txl/icons/yelp/small_4.png',
  '4.5': 'https://www.trulia.com/images/txl/icons/yelp/small_4_half.png',
  '5': 'https://www.trulia.com/images/txl/icons/yelp/small_5.png'
}
const ItemContainer = styled.div`
background-color: white;
padding: 5px;
margin: 10px;
border-radius: 5px;
border-style: solid;
border-width: 1px;
border-color: black;
`
const ItemTitle = styled.div`
`
const ItemSubtitle = styled.div`
font-size: 14px;
color: gray;
`
const ItemContent = styled.div`
`
const BusinessImage = styled.div`
background-image: url(${props => props.src});
background-repeat: no-repeat;
background-size: contain;
height: 50px;
`
const ReviewsAndRating = styled.p`
font-size: 12px;
`

export default DetailsItem;