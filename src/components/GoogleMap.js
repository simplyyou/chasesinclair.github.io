import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'black',
    height: 15, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 38.57, lng: -94.87},
    zoom: 15
  };

  render() {
    return (
      <div className="map">
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={38.5721322}
          lng={-94.8799967}
          text={'Simply You'}
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;