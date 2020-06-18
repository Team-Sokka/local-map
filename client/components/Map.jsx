import React from 'react';
import axios from 'axios';
import config from '../config.js'

class Map extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    var map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.260088, lng: -157.706806 },
        zoom: 15
    });
  }
  render(){
    return (
      <div id="map"></div>
    )
  }
}



export default Map;