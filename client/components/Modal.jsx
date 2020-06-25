import React from 'react';
import styled from 'styled-components';
import ModalNav from './ModalNav.jsx';
import Map from './Map.jsx';
import StreetView from './StreetView.jsx';
import Details from './Details.jsx';

const Modal = (props) => (
<FlexContainer hide={props.modalVisible}>
  <ModalContainer hide={props.modalVisible}>
    <ModalNav closeModal={props.closeModal} currentMapView={props.currentMapView} mapToggles={props.mapToggles}/>
      <Details hide={props.modalVisible} styling={props.currentMapView} places={props.places}/>
      <Map location={props.location} api={props.api} shopAndEatMarkers={props.shopAndEatMarkers}/>

  </ModalContainer>
</FlexContainer>

)
//Styled Components
const FlexContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
position: absolute;
background-color: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(20px);
visibility: ${props => props.hide? 'hidden': 'visible'};
`

const ModalContainer = styled.div`
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
const MapContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
flex: 1 1 0%;
`

export default Modal;