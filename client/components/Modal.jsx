import React from 'react';
import ModalNav from './ModalNav.jsx'
import Map from './Map.jsx'

const Modal = (props) => (
<div className="modal-container">
  <ModalNav closeModal={props.closeModal}/>
  <h1>Modal</h1>
  <Map />
</div>
)

export default Modal;