import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import Modal from './components/Modal.jsx';
import categories from '../database/yelpcategories.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: true,
      currentHouse: {},
      currentPlaces: [],
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
    //Bound Functions
    this.toggleModal = this.toggleModal.bind(this);
    this.basicMap = this.basicMap.bind(this);
    this.streetViewMap = this.streetViewMap.bind(this);
    this.schoolsMap = this.schoolsMap.bind(this);
    this.crimeMap = this.crimeMap.bind(this);
    this.commuteMap = this.commuteMap.bind(this);
    this.shopAndEatMap = this.shopAndEatMap.bind(this);

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
    //Add Event Listener
    document.getElementById('modal').addEventListener('click', (e) =>{
      //console.log('Body Click')
      //console.log(e.target)
      //console.log('state', this.state)
      //this.toggleModal()
    })
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
      var places = [];
      data.data.forEach((category) => {
        this.createShopAndEatMarkers(category.businesses)
        places = places.concat(category.businesses)
      })
      this.setState({
        currentPlaces: places
      })
    })
  }
  createShopAndEatMarkers(businessArray){
    var markers = businessArray.map((business) => {
      let iconMarker = {
        url: 'https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png',
        scaledSize: new google.maps.Size(30,30)
      }
      for (var category of business.categories) {
        if (categories.restaurants[category.alias]) {
          iconMarker.url = 'https://www.trulia.com/images/txl3R/map_markers/shop_and_eat/RestaurantsDotIcon@2x.png'
          break;
        } else if (categories.fitness[category.alias]) {
          iconMarker.url = 'https://www.trulia.com/images/txl3R/map_markers/shop_and_eat/FitnessDotIcon@2x.png'
          break;
        } else if (categories.shopping[category.alias]) {
          iconMarker.url = 'https://www.trulia.com/images/txl3R/map_markers/shop_and_eat/ShoppingBagDotIcon@2x.png'
          break;
        } else if (categories.entertainment[category.alias]) {
          iconMarker.url = 'https://www.trulia.com/images/txl3R/map_markers/shop_and_eat/EntertainmentDotIcon@2x.png'
          break;
        }  else if (categories.nightlife[category.alias]) {
          iconMarker.url = 'https://www.trulia.com/images/txl3R/map_markers/shop_and_eat/NightLifeDotIcon@2x.png';
          break;
        } else {
          console.log('Category - ', category)
        }
      }
      var newMarker = new google.maps.Marker({position: {lat: business.coordinates.latitude, lng: business.coordinates.longitude}, icon: iconMarker,  map: window.map})

      var ratingImages = {
        '0': 'https://www.trulia.com/images/txl/icons/yelp/small_0.png',
        '1': 'https://www.trulia.com/images/txl/icons/yelp/small_1.png',
        '1.5': 'https://www.trulia.com/images/txl/icons/yelp/small_1_half.png',
        '2': 'https://www.trulia.com/images/txl/icons/yelp/small_2.png',
        '2.5': 'https://www.trulia.com/images/txl/icons/yelp/small_2_half.png',
        '3': 'https://www.trulia.com/images/txl/icons/yelp/small_3.png',
        '3.5': 'https://www.trulia.com/images/txl/icons/yelp/small_3_half.png',
        '4': 'https://www.trulia.com/images/txl/icons/yelp/small_4.png',
        '4.5': 'https://www.trulia.com/images/txl/icons/yelp/small_4_half.png',
        '5': 'https://www.trulia.com/images/txl/icons/yelp/small_5.png'
      }

      var info = new google.maps.InfoWindow({
        content: `<h3>${business.name}</h3>
        <p><img src="${business.image_url}" style="height: 50px; width=50px;"/></p>
        <p><img src="${ratingImages[business.rating]}"/> ${business.review_count} reviews</p>
        `,
        position: {lat: business.coordinates.latitude, lng: business.coordinates.longitude}
      })

      newMarker.addListener('mouseover', ()=> {
        info.open(map, newMarker)
      })
      newMarker.addListener('mouseout', ()=>{
        info.close();
      })
      return newMarker;
    })
    this.setState({
      shopAndEatMarkers: this.state.shopAndEatMarkers.concat(markers)
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
    this.showState()
  }
  showState(){
    console.log('State - ', this.state)
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
    //Destructuring State
    const { currentHouse, currentPlaces, currentMapView, modalVisible, mapViewHeight, streetViewHeight } = this.state;
    return (
      <React.Fragment>
       <Modal currentHouse={currentHouse} places={currentPlaces} closeModal={this.toggleModal}
       currentMapView={currentMapView} modalVisible={modalVisible}
       mapToggles={{basicMap: this.basicMap, streetView: this.streetViewMap, schoolMap: this.schoolsMap, crimeMap:this.crimeMap, commuteMap: this.commuteMap, shopAndEat: this.shopAndEatMap}}
       mapHeight={mapViewHeight} streetViewHeight={streetViewHeight}/>
      <MapModuleContainer>
        <IndividualMapContainer onClick={this.basicMap}>
          <MapTile img={'https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=156x106&scale=1&markers=icon%3Ahttps%3A%2F%2Fstatic.trulia-cdn.com%2Fimages%2Fapp-shopping%2Fmap-marker-txl3R%2FMapMarkerHouseIcon_large%401x.png%7Cscale%3A1%7C21.264822308314%2C-157.81543590334&style=feature%3Aadministrative%7Cvisibility%3Aoff&style=feature%3Apoi%7Cvisibility%3Aoff&key=AIzaSyCzWKDOMLGYlR3C9dltAR7sbLvcQEWNcvc&signature=edB-arPGl4jYJ1A5XpxJcZOtBg8%3D'}></MapTile>

          <MapTitle>Map View</MapTitle>
    <MapSubTitle>Explore the area around {this.state.currentHouse.address? this.state.currentHouse.address.substring(0, this.state.currentHouse.address.indexOf(',')) : ''}</MapSubTitle>
        </IndividualMapContainer>
        <IndividualMapContainer onClick={this.streetViewMap}>
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
        <IndividualMapContainer onClick={this.shopAndEatMap}>
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

export default App;