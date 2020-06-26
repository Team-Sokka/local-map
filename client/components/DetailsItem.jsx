import React from 'react';
import styled from 'styled-components'

const DetailsItem = (props) => (
<ItemContainer>
  <LeftContainer>
    <BusinessImage src={props.business.image_url}></BusinessImage>
  </LeftContainer>
  <RightContainer>
    <ItemTitle>
      {props.business.name}
    </ItemTitle>
    <ItemSubtitle>
      {props.business.categories[0].title}
    </ItemSubtitle>
    <ItemContent>
    <ReviewsAndRating>
      <div>
        <img src={ratingImages[props.business.rating]}/> {props.business.review_count} Reviews
      </div>
      <div>
        <a target="_blank" href={props.business.url}><img src="https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png" style={{width: '40px'}}/></a>
      </div>
      </ReviewsAndRating>

    </ItemContent>
  </RightContainer>

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
border-radius: 8px;
border-color: rgb(232, 233, 234);
border-style: solid;
border-width: 1px;
display: flex;
flex-direction: row;
align-items:center;
`
const LeftContainer = styled.div`
flex:1
`

const RightContainer = styled.div`
flex: 4;
padding-left: 5px;
`

const ItemTitle = styled.div`
color: rgb(59, 65, 68);
`
const ItemSubtitle = styled.div`
font-size: 14px;
color: gray;
`
const ItemContent = styled.div`
`
const BusinessImage = styled.img`
height: 53px;
width: 53px;
object-fit: cover;
border-radius: 8px;
`

const ReviewsAndRating = styled.div`
font-size: 10px;
color: rgb(134, 144, 153);
display: flex;
justify-content: space-between;
`

export default DetailsItem;