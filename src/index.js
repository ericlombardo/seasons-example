import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  // this belongs to JavaScript
  constructor(props) {
    super(props) // deprecated code
    
    this.state = {lat: null, errorMessage: ''}

    window.navigator.geolocation.getCurrentPosition(
      position => { // success callback
        this.setState({lat: position.coords.latitude})
      }, 
      err => {  // failure callback 
        this.setState({ errorMessage: err.message })
      } 
    );
  }

  render() { // render method with conditional rendering to handle loading and errors
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: { this.state.errorMessage}</div>
      } 

      if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: { this.state.lat}</div>
      }

      if (!this.state.errorMessage && !this.state.lat) {
        return <div>Loading...</div>
      }
  }
  
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
)