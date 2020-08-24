import React, { Component } from 'react';

class Geolocalizacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
              console.log(position);
            },
            function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
            }
          );
      }
    render() {
        return (
            <div>
            <h4>Using geolocation JavaScript API in React</h4>
          </div>
    );

    }
}

export default Geolocalizacion;