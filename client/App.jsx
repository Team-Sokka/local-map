import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from './components/Modal.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      api: '',
      shopAndEatMarkers: []
    }
    this.location = { lat: 21.260088, lng: -157.706806 };
  }
  componentDidMount(){
    this.getShopAndEatMarkers();
  }
  getShopAndEatMarkers(){
    axios.get(`/map/yelp`,{params:{
      lat: this.location.lat,
      lng: this.location.lng
    }
  }).then((data) => {
    console.log(data.data)
    this.setState({
      shopAndEatMarkers: data.data.businesses
      })
    });
  }
  basicMap(){
    this.clearAllMarkers();
    this.toggleModal();
  }
  toggleModal(){
    var visibility = this.state.modalVisible ? false : true;
    this.setState({
      modalVisible: visibility
    });
  }
  shopAndEatMap(){
    this.setState({
      api: 'yelp'
    })
    this.getShopAndEatMarkers();
    this.toggleModal();
  }
  clearAllMarkers(){
    this.setState({
      shopAndEatMarkers: []
    })
  }
  render(){
    let modal;
    this.state.modalVisible ? modal = <Modal shopAndEatMarkers={this.state.shopAndEatMarkers} api={this.state.api} location={this.location} closeModal={this.toggleModal.bind(this)}/> : modal = ''
    return (
      <React.Fragment>

      {modal}
      <div className="map-module-container">
        <div className="individual-map-container" onClick={this.basicMap.bind(this)}>
          <div className="individual-map-tile"></div>
          <h1>Basic Map</h1>
          <p>Details</p>
        </div>
        <div className="individual-map-container">
        <div className="individual-map-tile" onClick={this.shopAndEatMap.bind(this)}></div>
          <h1>Shop & Eat</h1>
          <p>Details</p>
        </div>
        <div className="individual-map-container">
        <div className="individual-map-tile"></div>
          <h1>Map 3</h1>
          <p>Details</p>
        </div>
        <div className="individual-map-container">
        <div className="individual-map-tile"></div>
          <h1>Map 2</h1>
          <p>Details</p>
        </div>
      </div>

      </React.Fragment>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('mapModule'))