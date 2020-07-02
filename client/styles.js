import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif, "Segoe UI Bold", Arial, sans-serif;
  margin: 0px;
}

textarea, input, button {
  font-family: 'Roboto', sans-serif, "Segoe UI Bold", Arial, sans-serif;
}


#mapModule{
  display: flex;
  justify-content: space-around;
}

#map {
  height: 92%;
}
#street-view {
  height: 100%;
}

#yelp-list {
  background-color: purple;
  position: absolute;
  z-index: 3;
  margin-top: 100px;
  width: 300px
}
.svgMap {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  padding: 1px;
}
`

//Styled Components
export const MapModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const IndividualMapContainer = styled.div`
  max-width: 150px;
  min-width: 100px;
  flex: 1;
  padding:10px
`;

export const MapTile = styled.div`
  border-radius: 6px;
  background-image: ${props => props.img? `url(${props.img})` : `url('https://hrr46-fec-localmap-bucket.s3.amazonaws.com/map-views/basic-view.png')` };
  background-repeat: no-repeat;
  background-position: center;
  height:104px;
  background-size: 100%;
`;
export const MapTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;
export const MapSubTitle = styled.div`
  color: rgb(134, 144, 153);
  font-size: 14px;
  line-height: 1.43;
`;