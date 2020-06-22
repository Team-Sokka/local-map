import React from 'react';
import styled from 'styled-components';
import ModalNav from './ModalNav.jsx';
import Map from './Map.jsx';
import StreetView from './StreetView.jsx';
import YelpList from './YelpList.jsx';

const Modal = (props) => (

<ModalContainer hide={props.modalVisible}>
  <ModalNav closeModal={props.closeModal}/>
  {/* <YelpList /> */}
  <Map location={props.location} api={props.api} shopAndEatMarkers={props.shopAndEatMarkers}/>

  <StreetView />
</ModalContainer>

)

const ModalContainer = styled.div`
  height: 80vh;
  width: 90%;
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

export default Modal;