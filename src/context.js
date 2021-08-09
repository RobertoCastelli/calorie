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


    // RENDER
    return (
        <DataContext.Provider value={{liters, numberOfGlasses}}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider
