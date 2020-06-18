import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="map-module-container">
        <div className="individual-map-container">
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
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('mapModule'))