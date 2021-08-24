import React, { useState, useEffect } from "react"
// VARIABLES
import { glasses, url, apiKey } from "./variables/data"
// IMAGES
import fullglass from "./images/fullglass.png"
import emptyglass from "./images/emptyglass.png"
// CONTEXT
export const DataContext = React.createContext()

const ContextProvider = ({ children }) => {
  // STATE
  const [liters, setLiters] = useState(0)
  const [kcal, setKcal] = useState(1800)
  const [query, setQuery] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [values, setValues] = useState({
    consumed: 0,
    carbs: 0,
    proteins: 0,
    fat: 0,
  })

  // FETCH FOOD
  useEffect(() => {
    const fetchFood = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`${url} + ${query}`, {
          headers: { "X-Api-Key": `${apiKey}` },
        })
        const data = await res.json()
        console.log(data.items[0].name)
      } catch (error) {
        query !== null && setErrorMessage(`oops! ➟ ${error.message}`)
      }

      setIsLoading(false)
    }
    fetchFood()
  }, [query])

  // TOGGLE WATER
  const toggleWater = (id) => {
    glasses.map((glass, index) => {
      if (id === index && glass.state === false) {
        setLiters(liters + 0.25)
        glass.state = true
        glass.src = fullglass
      } else if (id === index && glass.state === true) {
        setLiters(liters - 0.25)
        glass.state = false
        glass.src = emptyglass
      }
      return glass // <-<< check return
    })
  }

  // RENDER
  return (
    <DataContext.Provider
      value={{
        liters,
        glasses,
        toggleWater,
        kcal,
        setKcal,
        values,
        setValues,
        isLoading,
        errorMessage,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default ContextProvider
