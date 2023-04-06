import React from 'react'
import { useNavigate } from "react-router-dom"
import BusDetails from './BusDetails';

const BusList = (props) => {

    const navigate = useNavigate();

    const TimestampToTime = TimestampString => {
        const date = new Date(TimestampString)
        const hour = date.getHours()
        const min = date.getMinutes()
        return `${hour}:${min}`
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Fare</th>
                        <th>Seats Avaible</th>
                        <th>Depature Time</th>
                        <th>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.buses.map(
                            bus =>
                                <BusDetails key={bus.id} bus={bus} />
                            // <tr key={bus.id}>
                            //     <td>{bus.name}</td>
                            //     <td>{bus.src}</td>
                            //     <td>{bus.dst}</td>
                            //     <td>{`₹ ${bus.fare}`}</td>
                            //     <td>{bus.seat}</td>
                            //     <td>{TimestampToTime(bus.dptime)}</td>
                            //     <td>{TimestampToTime(bus.artime)}</td>
                            //     <td><button onClick={() => navigate('/bookTicket', { state: { bid: bus.id } })} >Book</button></td>
                            // </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BusList