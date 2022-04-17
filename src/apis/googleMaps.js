import React, { Component }  from "react"
import GoogleMapReact from "google-map-react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// ...
 
export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedPlace: {
            name: "silva Jardim RJ"
        } }
    }


    render() {
   
      return (
        <Map google={this.props.google} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
      
        </Map>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCKo1tHIegRhc0l2zvvqG7dfC4nM8lYqwg"
})(MapContainer)