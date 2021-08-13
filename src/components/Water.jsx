import React, { useContext } from 'react'
import { DataContext } from '../context'


export const Water = () => {

const {liters, createGlasses } = useContext(DataContext)


    return (
        <div className="water-wrapper">
            <h3>WATER</h3>
            <div>objective: 2,00 liters</div>
            <div className="water-counter">{liters} L</div>
            <ul className="water-glasses">
            {createGlasses.map((glass, index) => {
                return (
                    <li key={index}><img src={glass.src} className="emptyGlass"></img></li>
                )
            })}
            </ul>
        </div>
    )
}
