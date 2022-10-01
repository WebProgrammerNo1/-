import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap } from "google-map-react";
import { InfoWindow } from "google-map-react";
import Geolocation from "react-geolocation";
import { Button } from "@mui/material";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 80
  };

  constructor(props) {
    super(props);

    this.state = props;
  }

  geoSuccess = position => {
    
    
    let coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    
    this.setState({
      center: coords
    })
  };

  render() {
   

    return (
      <Geolocation
        onSuccess={this.geoSuccess}
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) => (
          <div>
            <Button variant="outlined" color="success" className="my-2" onClick={getCurrentPosition}>Get Position</Button>
            {error && <div>{error.message}</div>}
            {/* <pre>
              latitude: {latitude}
              longitude: {longitude}
            </pre> */}
            <div
              className="google-map"
              style={{ height: "45vh", width: "100%" }}
            >
              <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
                    center={this.state.center}
                    zoom={this.state.zoom}
              >
                <AnyReactComponent
                  lat={latitude}
                  lng={longitude}
                  text={"Wheres Waldo?"}
                />
              </GoogleMapReact>
            </div>
          </div>
        )}
      />
    );
  }
}
