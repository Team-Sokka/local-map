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

//App
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

//Details
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;
`

export const DetailContainer = styled.div`
  height: 88%;
  width: 332px;
  background-color: white;
  position: absolute;
  z-index: 500;
  margin-top 10px;
  border-radius: 8px;
  border-color: rgb(232, 233, 234);
  border-style: solid;
  border-width: 1px;
  visibility: ${props => {
    if ((props.styling.shopAndEat || props.styling.basic)&& !props.hide) {
      return 'visible'
    } else {
      return 'hidden'
    }
  }}
`

export const TitleContainer = styled.div`
  text-align: left;
`
export const MainTitle = styled.div`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(59, 65, 68);
`

export const SubTitle = styled.div`
  padding: 2px 2px 5px 5px;
  font-size: 12px;
  align-items: center;
  display: flex;
`

export const ContentContainer = styled.div`
  border-radius: 5px;
  overflow:scroll;
  max-height: 87%;
`

export const FormContainer = styled.div`
padding: 16px;
`

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`

export const Form = styled.form`
  border-radius: 5px;
  overflow:scroll;
  max-height: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SimpleInput = styled.input`
  display: inline-block;
  border-radius: 8px;
  border-color: rgb(205, 209, 212);
  border-style: solid;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  width: 94%;
  margin: 8px;
`

export const MessageText = styled.textarea`
  border-radius: 8px;
  border-color: rgb(205, 209, 212);
  border-style: solid;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  height: 78px;
  width: 94%;
  margin: 8px;
  resize: none;
`

export const Submit = styled.button`
  display: inline-block;
  border-radius: 8px;
  border-color: rgb(217, 60, 35);
  border-style: solid;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
  margin: 8px;
  background-color: rgb(217, 60, 35);
  color: rgb(255, 255, 255);
  font-weight: 400;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(217, 60, 35);
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  color: rgb(134, 144, 153);
  font-size: 12px;
  line-height: 2;
  margin: 3px;
  align-items: center;
`;

export const CheckBox = styled.input`
  display: inline-block;
  border-radius: 8px;
  border-color: rgb(205, 209, 212);
  border-style: solid;
  border-width: 1px;
  font-size: 16px;
  line-height: 1.5;
`

export const LegalDisclaimer = styled.div`
font-size: 10px;
line-height: 16px;
color: rgb(134, 144, 153);
`

//DetailsItem
export const ItemContainer = styled.div`
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
export const LeftContainer = styled.div`
flex:1
`

export const RightContainer = styled.div`
flex: 4;
padding-left: 5px;
`

export const ItemTitle = styled.div`
color: rgb(59, 65, 68);
`
export const ItemSubtitle = styled.div`
font-size: 14px;
color: gray;
`
export const ItemContent = styled.div`
`
export const BusinessImage = styled.img`
height: 53px;
width: 53px;
object-fit: cover;
border-radius: 8px;
`

export const ReviewsAndRating = styled.div`
font-size: 10px;
color: rgb(134, 144, 153);
display: flex;
justify-content: space-between;
`


//Modal
export const ModalFlexContainer = styled.div.attrs({id: 'modal'})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  visibility: ${props => props.hide? 'hidden': 'visible'};
  z-index: 80000;
  top: 0;
  left: 0;
`

export const ModalContainer = styled.div`
  height: calc(100% - 96px);
  width: calc(100% - 96px);
  z-index: 1000;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: rgb(245,245,245);
  border-color: silver;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  margin: auto;
  visibility: ${props => props.hide? 'hidden': 'visible'};
`

//Navbar
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  max-width: inherit;
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(255,255,255);
  margin: 0;
  position: relative;
  border-radius: 5px;
  flex-direction: row;
  padding: 0px 0px;
  height: 8%;
`;

export const LeftNavContainer = styled.div`
`;

export const RightNavContainer = styled.div`
`;

export const Button = styled.button `
  color: ${props => props.active? 'rgb(0,120,130)' : 'rgb(59,65,68)'};
  border-color: ${props => props.active? 'rgb(232,233,234)' : 'transparent'};
  box-shadow: ${props => props.active? 'rgba(59, 65, 68, 0.4) 0px 8px 20px -15px':'none'};
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  border-radius: 8px;
  border-width: 1px;
  text-align:center;
  margin: 5px;
  padding: 8px 16px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  &:hover{
    background-color: rgb(239,239,239);
  }
  &:focus{
    outline-color: rgb(239,239,239);
  }
`

export const RightButton = styled(Button)`
  border-color: rgb(232,233,234);
  box-shadow: rgba(59, 65, 68, 0.4) 0px 8px 20px -15px;
  border-style: solid;
  border-width: 1px;
`

export const CloseButton = styled(Button)`
  &:hover{
    color: rgb(0,120,130);
    background-color: transparent;
  }
`