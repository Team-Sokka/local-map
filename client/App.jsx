import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './components/Modal.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    }
  }
  toggleModal(){
    var visibility = this.state.modalVisible ? false : true;
    this.setState({
      modalVisible: visibility
    });
  }
  render(){
    let modal;
    this.state.modalVisible ? modal = <Modal closeModal={this.toggleModal.bind(this)}/> : modal = ''
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
        <div className="individual-map-tile"></div>
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