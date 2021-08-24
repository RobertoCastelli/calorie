import React from "react"
import fatboy from "../images/fatboy.jpg"

export const Title = () => {
  return (
    <header>
      <h1>FAT</h1>
      <img className="title-image" src={fatboy} alt="fatboy" />
      <h1>REACT</h1>
    </header>
  )
}
