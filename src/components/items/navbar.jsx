"use client"

import { useState } from "react"
import { Button } from "../ui/button"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Enterprise", id: "enterprise" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Resources", id: "resources" },
  ]

  const scrollToSection = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      <div className="flex justify-center w-full h-16">
        <div className="w-5/6 flex justify-between items-center">

          <div className="flex items-center">
            <button
              className="lg:hidden mr-3 text-2xl"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            <div className="flex items-center">
              <div className="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5d5858"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>
              </div>
              <div className="text-xl font-black">Sensei</div>
            </div>

            <div className="hidden lg:flex">
              {navItems.map(item => (
                <Button
                  key={item.id}
                  className="text-sm shadow-none font-light border-none"
                  size="sm"
                  variant="outline"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <Button className="bg-black p-5 text-sm text-white rounded-3xl">
            Get Started
          </Button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 p-6 flex flex-col gap-4">
            <button
              className="self-end text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {navItems.map(item => (
              <Button
                key={item.id}
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </>
      )}
    </>
  )
}
