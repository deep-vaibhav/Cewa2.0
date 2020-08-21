import React, {Component, createRef } from "react";


class GoogleMap extends Component {

    googleMapRef = createRef()

    createGoogleMap = () => 
        new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 16,
            center: {
                lat: 27.123567,
                lng: 81.944663,
            },
            disableDefaultUI: true,
        })
    
        componentDidMount() {
            const googleMapScript = document.createElement('script');

            googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB0SpGRVyXAWcyt9-qiWeZvVXDcuou_3uw&libraries=places';

            window.document.body.appendChild(googleMapScript);

            googleMapScript.addEventListener('load', function() {
                this.googleMap = this.createGoogleMap();
                this.marker = this.createMarker();
            });
        }

        createMarker = () => 
            new window.google.maps.Marker({
                position: { lat: 27.123567, lng: 81.944663 },
                map: this.googleMap,
            })

    render() {
        return (
            <div 
                id="google-map"
                ref={this.googleMapRef}
                style={{width: '400px', height: '300px'}}
            />
        );
    }
}

export default GoogleMap;