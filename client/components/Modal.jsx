import React from 'react';
import { ModalFlexContainer, ModalContainer} from '../styles.js'
import ModalNav from './ModalNav.jsx';
import Map from './Map.jsx';
import StreetView from './StreetView.jsx';
import Details from './Details.jsx';

const Modal = (props) => (
<ModalFlexContainer hide={props.modalVisible}>
  <ModalContainer hide={props.modalVisible}>
    <ModalNav closeModal={props.closeModal} currentMapView={props.currentMapView} mapToggles={props.mapToggles}/>
      <Details hide={props.modalVisible} styling={props.currentMapView} places={props.places} currentHouse={props.currentHouse}/>
      <Map location={props.location} api={props.api} shopAndEatMarkers={props.shopAndEatMarkers}/>

  </ModalContainer>
</ModalFlexContainer>

)

export default Modal;