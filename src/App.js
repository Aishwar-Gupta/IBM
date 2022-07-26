import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';

import Home from './Components/Home';
import Food_Resources from './Components/Food_Resources';
import Womens_Health from './Components/Womens_Health';

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    //  <ChakraProvider>
      //  <App />

      <div className="App">


      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Food-Resources' element={<Food_Resources/>}></Route>
          <Route exact path='/Womens-Health' element={<Womens_Health/>}></Route>
        </Routes>
        
        <Navbar></Navbar>
        <Footer></Footer>
        

      </div>
    //  </ChakraProvider>

    






  );
}

export default App;
