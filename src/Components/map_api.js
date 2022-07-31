import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map() {
    return ( 
    <GoogleMap 
        defaultZoom = {10} 
        defaultCenter={{lat: 37.774929, lng: -122.419418}}
    />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));