import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import Modal from './components/Modal.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: 'hidden',
      currentHouse: {},
      shopAndEatMarkers: [],
      location: {}
    }
  }
  componentDidMount(){
    var params = this.pullParams();
    axios.get(`/house/${params.id}`)
    .then((data)=> {
      this.setState({
        currentHouse: data.data[0],
        location: data.data[0].location.coordinates
      })
    }).then(() => {
      //invoke function to create Map
      this.initializeMap();
      }).catch((err)=>console.log(err))
  }
  pullParams(){
    var paramsArr = window.location.search.replace('?','').split('&');
    //URLSearchParams - Dive into this
    var params = {};
    paramsArr.forEach((item) => {
      var equal = item.indexOf('=');
      params[item.substring(0, equal)] = item.substring(equal+1, item.length);
    });
    return params;
  }
  initializeMap(){
    var centerPoint = {lat: this.state.location[1] ,lng: this.state.location[0]}
    window.map = new window.google.maps.Map(document.getElementById("map"), {
        center: centerPoint,
        zoom: 15,
        fullscreenControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite'],
          position: google.maps.ControlPosition.TOP_LEFT
        },
        zoomControlOptions:{
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControl: false
    });
    var centerMarker = new google.maps.Marker({position: centerPoint, map: map});
  }
  getShopAndEatMarkers(){
    axios.get(`/map/yelp`,{params:{
      lat: this.state.location[1],
      lng: this.state.location[0]
    }
  }).then((data) => {
    console.log(data.data.businesses)
    var markers = data.data.businesses.map((business) => {
      return new google.maps.Marker({position: {lat: business.coordinates.latitude, lng: business.coordinates.longitude}, icon:'https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png',  map: window.map})
    })
    this.setState({
      shopAndEatMarkers: markers
      })
    })
  }
  basicMap(){
    this.clearAllMarkers();
    this.toggleModal();
  }
  toggleModal(){
    var modalVisibility = this.state.modalVisible === 'hidden' ? 'visible' : 'hidden';
    this.setState({
      modalVisible: modalVisibility,
    });
  }
  shopAndEatMap(){
    this.getShopAndEatMarkers();
    this.toggleModal();
  }
  streetView(){
    this.toggleModal();
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('map'),{position: this.state.location, pov: {heading: 54, pitch: 4}});
  }
  clearAllMarkers(){
    this.state.shopAndEatMarkers.forEach(marker => {
      marker.setMap(null)
    })
  }
  render(){
    return (
      <React.Fragment>
       <Modal closeModal={this.toggleModal.bind(this)} modalVisibile={this.state.modalVisible} mapHeight={this.state.mapViewHeight} streetViewHeight={this.state.streetViewHeight}/>
      <MapModuleContainer>
        <IndividualMapContainer onClick={this.basicMap.bind(this)}>
          <div className="individual-map-tile"></div>
          <h1>Basic Map</h1>
          <p>Details</p>
        </IndividualMapContainer>
        <IndividualMapContainer onClick={this.shopAndEatMap.bind(this)}>
          <div className="individual-map-tile"></div>
            <h1>Shop & Eat</h1>
            <p>Details</p>
        </IndividualMapContainer>

        <IndividualMapContainer onClick={this.streetView.bind(this)}>
          <div className="individual-map-tile" ></div>
            <h1>Street View</h1>
            <p>Details</p>

        </IndividualMapContainer>
        <IndividualMapContainer>
          <div className="individual-map-tile"></div>
            <h1>Map 2</h1>
            <p>Details</p>
        </IndividualMapContainer>
      </MapModuleContainer>

      </React.Fragment>
    )
  }

}

const MapModuleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const IndividualMapContainer = styled.div`
  min-width: 200px;
`

ReactDOM.render(<App/>, document.getElementById('mapModule'))