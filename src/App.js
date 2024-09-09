import React, { Component } from 'react';
import './App.css';
import Home from "./pages/HomePage";
import AllProduct from "./pages/AllProductsPage"
import ESat from "./pages/ESat"
import Wallbox from "./pages/Wallbox"
import Wallbox1 from "./pages/Wallbox1"
import SmartBox from "./pages/SmartBox"
import Pv from './pages/SmartBox/pv_uber';
import EccAp from "./pages/Ecc"
import Elms from "./pages/Elms"
import Elight from "./pages/eLight"
import Private from "./pages/Private"
import Commercial from "./pages/Commercial"
import Public from "./pages/Public"
import Loading from "./pages/Loading"
import Navbar from './pages/components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    return (
   <Router>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/all' element={<AllProduct/>}/>
     <Route path='/eSat' element={<ESat/>}/>
      <Route path='/wallbox' element={<Wallbox/>}/>
       <Route path='/wallbox1' element={<Wallbox1/>}/>
        <Route path='/smartBox' element={<SmartBox/>}/>
       <Route path='/eCC' element={<EccAp/>}/>
       <Route path='/eLms' element={<Elms/>}/>
        <Route path='/eLight' element={<Elight/>}/>
        <Route path="/private" element={<Private/>}/>
        <Route path="/commercial" element={<Commercial/>}/>
        <Route path="/public" element={<Public/>}/>
         <Route path="/loading" element={<Loading/>}/>
         
   </Routes>
 
    </Router>
    );
  }
}

export default App;
