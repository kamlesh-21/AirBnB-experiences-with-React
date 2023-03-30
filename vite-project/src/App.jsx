import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import dataArray from "./data"

export default function App(){

  const newData = dataArray.map(function(item){
    return (
        <Card 
          key={item.id}
          item ={item}
        />
    )
  })
  return (
    <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {newData}
            </section>
    </div>
  )
}