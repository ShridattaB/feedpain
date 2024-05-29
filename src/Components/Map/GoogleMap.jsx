import GoogleMapReact from "google-map-react";
import React from "react";
const AnyReactComponent = ({ text }) => <span class="map-marker">{text}</span>;
export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 18.619696,
      lng: 73.749779,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "inherit", width: "400px", display: "contents" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={18.619696}
          lng={73.749779}
          text="JSPM Rajarshi Shahu College Of Engineering , Tathawade"
        />
      </GoogleMapReact>
    </div>
  );
}
