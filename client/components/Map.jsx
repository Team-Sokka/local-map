import React from 'react';
import axios from 'axios';
import config from '../config.js'

class Map extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    var centerPoint = { lat: 21.260088, lng: -157.706806 };
    var map = new window.google.maps.Map(document.getElementById("map"), {
        center: centerPoint,
        zoom: 15
    });
    var centerMarker = new google.maps.Marker({position: centerPoint, map:map});

  }
  render(){
    return (
      <div id="map"></div>
    )
  }
}



export default Map;