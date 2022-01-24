import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  
  state = {lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      position =>  this.setState({lat: position.coords.latitude}), 
      // failure callback 
        err => this.setState({ errorMessage: err.message })
    );
  }

  render() { // render method with conditional rendering to handle loading and errors
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: { this.state.errorMessage}</div>
      } 

      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />
      }

      return <div>Loading...</div>

  }
  
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
)