import React from 'react';
import axios from 'axios';
import config from '../config.js'

class Map extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    var centerPoint = this.props.location;
    var map = new window.google.maps.Map(document.getElementById("map"), {
        center: centerPoint,
        zoom: 15
    });
    var centerMarker = new google.maps.Marker({position: centerPoint, map:map});
    if (this.props.api ==='yelp') {
      this.props.shopAndEatMarkers.forEach((business) => {
        var marker = new google.maps.Marker({position: {lat: business.coordinates.latitude, lng: business.coordinates.longitude}, map:map})
      })
    }
  }
  render(){
    return (
      <div id="map"></div>
    )
  }
}



export default Map;