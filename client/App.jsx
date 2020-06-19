import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './components/Modal.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      api: ''
    }
    this.location = { lat: 21.260088, lng: -157.706806 };
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
    this.toggleModal();

  }
  render(){
    let modal;
    this.state.modalVisible ? modal = <Modal api={this.state.api} location={this.location} closeModal={this.toggleModal.bind(this)}/> : modal = ''
    return (
      <React.Fragment>

      {modal}
      <div className="map-module-container">
        <div className="individual-map-container" onClick={this.toggleModal.bind(this)}>
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