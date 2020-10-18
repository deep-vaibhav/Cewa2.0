import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFpYmhhdmQ5IiwiYSI6ImNrZzBxd3JjeDBma3UydW8yNm5kNjIzb3oifQ.LnwTWttWhyLPcs7VwnpB7Q";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default Map;
