import './Food_Resources.css'
// import {Button} from '@chakra-ui/react'
import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
// //import { GoogleMap, withScriptjs, withGoogleMap } from "@react-google-maps/api";
// import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";




// const {} = useLoadScript({googleMapsApiKey: ""});

function Food_Resources() {
    return (  
        <div className='print'>

        {/* <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
            Button
        </Button> */}

            <h1 className='h1'>
                Poverty and poor health are intertwined.  
            </h1>

            <p>
                Poverty can cause poor health, but poor health can also cause 
                and trap people in poverty. There are many causes to poor health, but
                one of the most prominent is food deserts. 
            </p>

            <h1 className='h1'>
                What are food deserts? 
            </h1>

            <p>
                Food deserts are where more than 20% of the people live in poverty
                and lack access to affordable, high-quality, and healthy foods. 
                People living in food deserts may need to use the few resources
                they have to take public transportation or walk long distances
                to get what they need from markets. 

                <br/>
                <br/>


                This lack of access to healthy foods can lead people to have 
                unhealthy diets that are low in fruits, vegetables, and proteins.
                While it may not seem important, lack of nutrition can lead to 
                mental and physical health issues, which are risk factors that
                can lead to or keep people in poverty.
            </p>

            <h1 className='h1'>
                How can people living in food deserts access healthy foods?
            </h1>

            <p>
                1. Choose frozen produce.
                <br/>
                2. Cook with pantry staples such as brown rice, lentils, and
                beans, which are healthy and last longer than canned foods.
                <br/>
                3. Make large stews.
                <br/>
                4. Preserve your food; this helps you save money and makes fresh
                vegtables and fruits last longer. 
                <br/>
                5. Find out where your local community garden is. Community gardens
                are shared land where you can grow your own produce and exchange items
                with other people. 
                <br/>
                6. Using kitchen scraps, grow your own garden and produce. 
            </p>

            <h1 className='h1'>
                Resources
            </h1>

            <p>
            If you live in a food desert, you may have access to free or affordable food through government 
            programs, soup kitchens, food pantries, or food banks.

            <br></br>
            
            <a className='link' target='_blank' href='https://foodpantries.org/'>Food Pantry Access Link</a>


            <br/>
            <br/>

            The Feeding America nationwide network of food banks and food programs helps millions of 
            people find food and grocery help in their communities every year. Connect with your local 
            food bank to learn about upcoming free food distributions and to apply for national food programs.

            <br></br>

            <a className='link' target='_blank' href='https://www.feedingamerica.org/find-your-local-foodbank'>Feeding America Website</a>

            <br/>
            <br/>

            SNAP, Supplemental Nutrition Assistance Program, formerly called food stamps, is a government program that 
            helps people buy the food they need for healthy lives. Across the United States, there are 9.5 million 
            families and children using SNAP to buy food. It is the largest program working to fight hunger in 
            America. SNAP helps many people stretch their budgets because the money they would use on food can go 
            towards other needs like medical bills, utilities, and rent.

            <br></br>

            <a className='link' target='_blank' href='https://www.feedingamerica.org/our-work/hunger-relief-programs/snap'>Hunger Relief Government Programs</a>




            </p>

            {/* <div style = {{width: '100vw', height:'100vh'}}>
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div> */}

            


            
            
        </div>

    );
}

export default Food_Resources;