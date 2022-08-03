import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 37.774929, lng: -122.419418 }} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Locator() {

        return ( 

            
            <div className='print' id="map" style={{ width: "1000px", height: "1000px"}} >  

                Coming soon!
    
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY
                    }`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    style={{zIndex: "1000000000"}}
                />   
                           
            </div>
        );

    
  


}



// import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";


// export default function Locator() {

//     const [viewport, setViewport] = useState({
//         latitude: 37.774929,
//         longitude:  -122.419418,
//         width: "70vw",
//         height: "70vh",
//         zoom: 10
//       });

//     return (
    
//         <div className='print' style={{ width: "70vw", height: "70vh"}} > 
//             <ReactMapGL {...viewport}>

//                 here




//             </ReactMapGL>

       
//         </div>
//     );
// }






