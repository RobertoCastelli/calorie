import React, { useContext } from 'react'
import { DataContext } from '../context'


export const Water = () => {

const {liters, numberOfGlasses, toggleWater} = useContext(DataContext)


    return (
        <div className="water-wrapper">
            <h3>WATER</h3>
            <div>objective: 2,00 liters</div>
            <div className="water-counter">{liters} L</div>
            <ul className="water-glasses">
            {numberOfGlasses.map((value, index) => {
                return(
                    <li key={index}><button onClick={() => toggleWater(index)}>{value}</button></li>
                )
            })}
            </ul>
        </div>
    )
}
