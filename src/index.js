import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  // pass in two callbacks  
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position), // success callback
    err => console.log(err) // failure callback 
  );

  return <div>Latitude: </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)