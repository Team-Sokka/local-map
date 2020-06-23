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
        streetView: false,
        schools: false,
        crime: false,
        commute: false,
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
    var markers = data.data.businesses.map((business) => {
      console.log('Business: ', business)
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
        streetView: false,
        schools: false,
        crime: false,
        commute: false,
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
    if (document.body.style.backgroundColor === 'transparent' || !document.body.style.backgroundColor ) {
      document.body.style.backgroundColor = 'rgba(10,10,10,0.8)';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }
  }
  shopAndEatMap(){
    this.setState({
      currentMapView:{
        basic: false,
        streetView: false,
        schools: false,
        crime: false,
        commute: false,
        shopAndEat: true,
      }
    })
    this.getShopAndEatMarkers();
    if (this.state.modalVisible) this.toggleModal()
  }
  streetViewMap(){
    this.setState({
      currentMapView:{
        basic: false,
        streetView: true,
        schools: false,
        crime: false,
        commute: false,
        shopAndEat: false,      }
    })
    this.clearAllMarkers();
    if (this.state.modalVisible) this.toggleModal()

    //this.toggleModal();
    //var panorama = new google.maps.StreetViewPanorama(document.getElementById('map'),{position: this.state.location, pov: {heading: 54, pitch: 4}});
  }
  schoolsMap(){
    this.setState({
      currentMapView:{
        basic: false,
        streetView: false,
        schools: true,
        crime: false,
        commute: false,
        shopAndEat: false,      }
    })
    this.clearAllMarkers();
    if (this.state.modalVisible) this.toggleModal()
  }
  crimeMap(){
    this.setState({
      currentMapView:{
        basic: false,
        streetView: false,
        schools: false,
        crime: true,
        commute: false,
        shopAndEat: false,      }
    })
    this.clearAllMarkers();
    if (this.state.modalVisible) this.toggleModal()
  }
  commuteMap(){
    this.setState({
      currentMapView:{
        basic: false,
        streetView: false,
        schools: false,
        crime: false,
        commute: true,
        shopAndEat: false,      }
    })
    this.clearAllMarkers();
    if (this.state.modalVisible) this.toggleModal()
  }
  clearAllMarkers(){
    this.state.shopAndEatMarkers.forEach(marker => {
      marker.setMap(null)
    })
  }
  render(){
    return (
      <React.Fragment>
       <Modal closeModal={this.toggleModal.bind(this)} currentMapView={this.state.currentMapView} modalVisible={this.state.modalVisible} mapToggles={{basicMap: this.basicMap.bind(this), streetView: this.streetViewMap.bind(this), schoolMap: this.schoolsMap.bind(this), crimeMap:this.crimeMap.bind(this), commuteMap: this.commuteMap.bind(this), shopAndEat: this.shopAndEatMap.bind(this)}} mapHeight={this.state.mapViewHeight} streetViewHeight={this.state.streetViewHeight}/>
      <MapModuleContainer>
        <IndividualMapContainer onClick={this.basicMap.bind(this)}>
          <MapTile img={'https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=156x106&scale=1&markers=icon%3Ahttps%3A%2F%2Fstatic.trulia-cdn.com%2Fimages%2Fapp-shopping%2Fmap-marker-txl3R%2FMapMarkerHouseIcon_large%401x.png%7Cscale%3A1%7C21.264822308314%2C-157.81543590334&style=feature%3Aadministrative%7Cvisibility%3Aoff&style=feature%3Apoi%7Cvisibility%3Aoff&key=AIzaSyCzWKDOMLGYlR3C9dltAR7sbLvcQEWNcvc&signature=edB-arPGl4jYJ1A5XpxJcZOtBg8%3D'}></MapTile>

          <MapTitle>Map View</MapTitle>
    <MapSubTitle>Explore the area around {this.state.currentHouse.address? this.state.currentHouse.address.substring(0, this.state.currentHouse.address.indexOf(',')) : ''}</MapSubTitle>
        </IndividualMapContainer>
        <IndividualMapContainer onClick={this.streetViewMap.bind(this)}>
          <MapTile img={'https://www.trulia.com/images/txl3R/local_cards/streetview.svg'}></MapTile>
            <MapTitle>Street View</MapTitle>
            <MapSubTitle>Take a virtual walk around the neighborhood</MapSubTitle>
        </IndividualMapContainer>
        <IndividualMapContainer>
          <MapTile img={'https://www.trulia.com/images/txl3R/local_cards/schools.svg'}></MapTile>
            <MapTitle>Schools</MapTitle>
            <MapSubTitle>1 Elementary School</MapSubTitle>
            <MapSubTitle>1 Middle School</MapSubTitle>
            <MapSubTitle>1 High School</MapSubTitle>
        </IndividualMapContainer>
        <IndividualMapContainer>
          <MapTile img={'https://www.trulia.com/images/txl3R/local_cards/crime.svg'}></MapTile>
            <MapTitle>Crime</MapTitle>
            <MapSubTitle>Lowest crime relative to the rest of Honolulu County</MapSubTitle>
        </IndividualMapContainer>

        <IndividualMapContainer>
          <MapTile img={'https://www.trulia.com/images/txl3R/local_cards/commute.svg'}></MapTile>
            <MapTitle>Commute</MapTitle>
            <MapSubTitle>96% of residents commute by car</MapSubTitle>
        </IndividualMapContainer>
        <IndividualMapContainer onClick={this.shopAndEatMap.bind(this)}>
          <MapTile img={'https://www.trulia.com/images/txl3R/local_cards/shop_eat.svg'}></MapTile>
            <MapTitle>Shop & Eat</MapTitle>
            <MapSubTitle>208 Restaurants</MapSubTitle>
            <MapSubTitle>21 Groceries</MapSubTitle>
            <MapSubTitle>50 Nightlife</MapSubTitle>

        </IndividualMapContainer>
      </MapModuleContainer>

      </React.Fragment>
    )
  }

}

//Styled Components
const MapModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const IndividualMapContainer = styled.div`
  max-width: 150px;
  min-width: 100px;
  flex: 1;
  padding:10px
`;

const MapTile = styled.div`
border-radius: 6px;
  background-image: ${props => props.img? `url(${props.img})` : `url('https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=156x106&scale=1&markers=icon%3Ahttps%3A%2F%2Fstatic.trulia-cdn.com%2Fimages%2Fapp-shopping%2Fmap-marker-txl3R%2FMapMarkerHouseIcon_large%401x.png%7Cscale%3A1%7C21.260159%2C-157.70671&style=feature%3Aadministrative%7Cvisibility%3Aoff&style=feature%3Apoi%7Cvisibility%3Aoff&key=AIzaSyCzWKDOMLGYlR3C9dltAR7sbLvcQEWNcvc&signature=ZKRlRKbvfUwbO2EJ-LTPi2gyskY%3D')` };
  background-repeat: no-repeat;
  background-position: center;
  height:104px;
  background-size: 100%;
`;
const MapTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;
const MapSubTitle = styled.div`
color: rgb(134, 144, 153);
font-size: 14px;
line-height: 1.43;
`;

ReactDOM.render(<App/>, document.getElementById('mapModule'))