import React from "react"
import Header from "../components/Header"
import HowWeWork from "../components/HowWeWork"
import Services from "../components/Services"

import '../styles/global.css'


export default function Home() {  
  return (
    <div className="wrapper">
      <Header />
      <HowWeWork />
      <Services />
    </div>
  ) 
 
}
