import React from 'react'
import GoogleMapReact from 'google-map-react';


const Office1 = ({ text }) => <div>{text}</div>;

class MapApi extends React.Component {
    
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '600px', width: '90%', margin: '0 auto' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyB13_qAHHWC1DVy3vhHA9Kk1Uygnf1Fx2Q' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <Office1
                lat={59.955413}
                lng={30.337844}
                text="Office"
              />
            </GoogleMapReact>
          </div>
        );
    }
}

export default MapApi
