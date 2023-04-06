import React from 'react'
import CustomerService from '../services/CustomerService'

function BookingList(props) {

    const cancelTicket = async (bid, cid) => {
        CustomerService.cancelTicket(bid, cid)
        // console.log("in function bid:" + bid + " cid:" + cid)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Bus id</th>
                        <th>Customer id</th>
                        <th>Seat</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.bookings.map(
                            (booking, index) =>
                                <tr key={index}>
                                    <td>{booking.bid}</td>
                                    <td>{booking.cId}</td>
                                    <td>{booking.seat}</td>
                                    <td>{booking.dob}</td>
                                    <td><button onClick={() => cancelTicket(booking.bid, booking.cId)}>Cancel</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BookingList