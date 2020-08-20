import React from "react";

import {Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={10}
                initialCenter={{ lat: 27.125652, lng: 81.944599}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB0SpGRVyXAWcyt9-qiWeZvVXDcuou_3uw'
})(MapContainer)