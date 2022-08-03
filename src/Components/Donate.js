import './Food_Resources.css'
// import {Button} from '@chakra-ui/react'
import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
// //import { GoogleMap, withScriptjs, withGoogleMap } from "@react-google-maps/api";
// import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";




// const {} = useLoadScript({googleMapsApiKey: ""});

function Donate() {
    return (  
        <div className='print'>

            <h1 className='h1'>
                Donate
            </h1>

            If you don’t live in a food desert but want to help those in need, 
            consider volunteering at your local food bank or with an organization like Wholesome Wave.

            <br></br>
            <br></br>

            <a className='link' target='_blank' href='https://www.wholesomewave.org/'>Wholesome Wave Volunteering Access Link</a>

            <br></br>
            <br></br>

            DonorBox is an online donation platform where you can both donate and fundraise 
            for your organization of choice.

            <br></br>
            <br></br>

            <a className='link' target='_blank' href='https://donorbox.org/'>Donor Box Access Link</a>



            
        </div>

    );
}

export default Donate;