import React from 'react';
import { NavWrapper, LeftNavContainer, RightNavContainer, Button, RightButton, CloseButton} from '../styles.js'

const ModalNav = (props) => {
  const {currentMapView, mapToggles, closeModal} = props
  return (
  <NavWrapper>
    <LeftNavContainer>
      <Button active={currentMapView.basic} onClick={mapToggles.basicMap}>Map</Button>
      <Button active={currentMapView.streetView} onClick={mapToggles.streetView}>Street View</Button>
      <Button active={currentMapView.schools} onClick={mapToggles.schoolMap}>Schools</Button>
      <Button active={currentMapView.crime} onClick={mapToggles.crimeMap}>Crime</Button>
      <Button active={currentMapView.commute} onClick={mapToggles.commuteMap}>Commute</Button>
      <Button active={currentMapView.shopAndEat} onClick={mapToggles.shopAndEat}>Shop & Eat</Button>
    </LeftNavContainer>

    <RightNavContainer>
      <RightButton><svg className="svgMap" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#869099"></path></svg>Save</RightButton>
      <RightButton><svg className="svgMap" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#869099"></path></svg>Share</RightButton>
      <CloseButton onClick={closeModal}><svg className="svgMap" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="#869099"></path></svg></CloseButton>
    </RightNavContainer>

  </NavWrapper>
  )
}

export default ModalNav;