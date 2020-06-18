import React from 'react';

const ModalNav = (props) => (
  <div className="modal-nav">
    <p>Modal Nav</p>
    <div onClick={props.closeModal}>X</div>
  </div>
)

export default ModalNav;