import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import Modal from './components/Modal.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: true,
      currentHouse: {},
      shopAndEatMarkers: [],
      location: {},
      currentMapView: {
        basic: false,
        shopAndEat: false,
      },
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
    this.setState({
      currentMapView:{
        basic: true,
        shopAndEat: false,
      }
    })
    this.clearAllMarkers();

    if (this.state.modalVisible) this.toggleModal()

  }
  toggleModal(){
    var modalVisibility = this.state.modalVisible ? false : true;
    this.setState({
      modalVisible: modalVisibility,
    });
  }
  shopAndEatMap(){
    this.setState({
      currentMapView:{
        basic: false,
        shopAndEat: true,
      }
    })
    this.getShopAndEatMarkers();
    if (this.state.modalVisible) this.toggleModal()
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
       <Modal closeModal={this.toggleModal.bind(this)} currentMapView={this.state.currentMapView} modalVisible={this.state.modalVisible} mapToggles={{basicMap: this.basicMap.bind(this), shopAndEat: this.shopAndEatMap.bind(this)}} mapHeight={this.state.mapViewHeight} streetViewHeight={this.state.streetViewHeight}/>
      <MapModuleContainer>
        <IndividualMapContainer onClick={this.basicMap.bind(this)}>
          <MapTile></MapTile>
          <h1>Basic Map</h1>
          <p>Explore the area</p>
        </IndividualMapContainer>
        <IndividualMapContainer onClick={this.shopAndEatMap.bind(this)}>
          <MapTile></MapTile>
            <h1>Shop & Eat</h1>
            <p>See all the restaurants!</p>
        </IndividualMapContainer>

        <IndividualMapContainer onClick={this.streetView.bind(this)}>
          <MapTile></MapTile>
            <h1>Street View</h1>
            <p>Take a virtual walk around the neighborhood</p>

        </IndividualMapContainer>
        <IndividualMapContainer>
          <MapTile></MapTile>
            <h1>Schools</h1>
            <p>Schools in the area</p>
        </IndividualMapContainer>
      </MapModuleContainer>

      </React.Fragment>
    )
  }

}

const MapModuleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const IndividualMapContainer = styled.div`
  min-width: 200px;
`

const MapTile = styled.div`
  background-color: blue;
  border-radius: 6px;
  background-image: url('https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=156x106&scale=1&markers=icon%3Ahttps%3A%2F%2Fstatic.trulia-cdn.com%2Fimages%2Fapp-shopping%2Fmap-marker-txl3R%2FMapMarkerHouseIcon_large%401x.png%7Cscale%3A1%7C21.260159%2C-157.70671&style=feature%3Aadministrative%7Cvisibility%3Aoff&style=feature%3Apoi%7Cvisibility%3Aoff&key=AIzaSyCzWKDOMLGYlR3C9dltAR7sbLvcQEWNcvc&signature=ZKRlRKbvfUwbO2EJ-LTPi2gyskY%3D');
  background-repeat: no-repeat;
  background-position: center;
  height:104px;
  background-size: 100%;
`

ReactDOM.render(<App/>, document.getElementById('mapModule'))