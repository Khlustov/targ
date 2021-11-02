import React from "react"
import Header from "../components/Header"
import HowWeWork from "../components/HowWeWork"
import Services from "../components/Services"
import Reviews from "../components/Reviews"

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {  
  return (
    <div className="wrapper">
      <Header />
      <HowWeWork />
      <Services />
      <Reviews />
    </div>
  ) 
 
}
