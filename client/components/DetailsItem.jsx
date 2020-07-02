import React from 'react';
import { ItemContainer, LeftContainer, RightContainer, ItemTitle, ItemSubtitle, ItemContent, BusinessImage, ReviewsAndRating } from '../styles.js';

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
        <a target="_blank" href={props.business.url}><img src="https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/yelp_logo_small.png" style={{width: '40px'}}/></a>
      </div>
      </ReviewsAndRating>

    </ItemContent>
  </RightContainer>

</ItemContainer>
)
var ratingImages = {
  '0': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_0.png',
  '1': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_1.png',
  '1.5': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_1_half.png',
  '2': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_2.png',
  '2.5': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_2_half.png',
  '3': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_3.png',
  '3.5': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_3_half.png',
  '4': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_4.png',
  '4.5': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_4_half.png',
  '5': 'https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/small_5.png'
}


export default DetailsItem;