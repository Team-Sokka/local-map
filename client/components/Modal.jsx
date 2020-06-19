import React from 'react';
import ModalNav from './ModalNav.jsx'
import Map from './Map.jsx'
import StreetView from './StreetView.jsx'

const Modal = (props) => (
<div className="modal-container" style={{visibility: props.modalVisibile}}>
  <ModalNav closeModal={props.closeModal}/>
  <h1>Modal</h1>
  <Map location={props.location} api={props.api} shopAndEatMarkers={props.shopAndEatMarkers}/>
  <StreetView />
</div>
)

export default Modal;