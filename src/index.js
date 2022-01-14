import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  // this belongs to JavaScript
  constructor(props) {
    super(props) // deprecated code
    
    this.state = {lat: null}

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
      }, // success callback
      err => console.log(err) // failure callback 
    );
  }

  render() {

    return <div>Latitude: {this.state.lat}</div>
  }
  
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
)