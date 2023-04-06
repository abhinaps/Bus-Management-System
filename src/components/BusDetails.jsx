import React from 'react'
import { useNavigate } from "react-router-dom"


const BusDetails = ({ bus }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>{bus.name}</div>
            <div>{bus.fare}</div>
            <div>{bus.src} {bus.dptime} {bus.dst} {bus.artime} </div>
            <div><button onClick={() => navigate('/bookTicket', { state: { bid: bus.id } })} >Book</button></div>
        </div>
    )
}

export default BusDetails