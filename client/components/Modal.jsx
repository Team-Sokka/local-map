import React from 'react';
import ModalNav from './ModalNav.jsx'

const Modal = (props) => (
<div className="modal-container">
  <ModalNav closeModal={props.closeModal}/>
  <h1>Modal</h1>
</div>
)

export default Modal;