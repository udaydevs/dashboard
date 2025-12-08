"use client"
import Hero from "@/components/items/hero"
import Navbar from "@/components/items/navbar"

export default function Page(){
  return(
    <>
      <div className="w-screen h-screen">
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}