import React, { useState, useEffect } from 'react'
// CONTEXT
export const DataContext = React.createContext()

const ContextProvider = ({ children }) => {
    // STATE
    const [liters, setLiters] = useState(0)
    const [numberOfGlasses, setNumberOfGlasses] = useState([])

    // CREATE n GLASSES
    const createGlasses = (numberOfGlasses) => setNumberOfGlasses(Array(numberOfGlasses).fill('+'))
    useEffect(() => {
        createGlasses(8) //<--<< change number of glasses
    }, [])

    // TOGGLE WATER
    const toggleWater = (id) => {
        let temp = [...numberOfGlasses]
        temp.map((_, index) => {
            if (id === index) {
                if (temp[index] === '+') {
                    temp[index] = '-'
                    setLiters(liters + 0.25)
                } else {
                    temp[index] = '+'
                    setLiters(liters - 0.25)
                }
            }
        }
        )
        setNumberOfGlasses(temp)
    }


    // RENDER
    return (
        <DataContext.Provider value={{ liters, numberOfGlasses, toggleWater }}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider
