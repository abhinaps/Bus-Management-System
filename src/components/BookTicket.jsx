import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import CustomerService from '../services/CustomerService';

const BookTicket = (props) => {
    const location = useLocation()

    const [customer, setCustomer] = useState({ name: "", phone: "" })
    const [booking, setBooking] = useState({ bid: location.state.bid, seat: "", dob: "" })

    return (
        <div>
            <h2>BookTicket</h2>
            <input
                placeholder='name'
                value={customer.name}
                onChange={(e) => setCustomer(oldCustomer => ({ ...oldCustomer, name: e.target.value }))}
                type='text'
                required />
            <input
                placeholder='phone'
                type='number'
                value={customer.phone}
                onChange={(e) => setCustomer(oldCustomer => ({ ...oldCustomer, phone: e.target.value }))}
                minLength={10}
                maxLength={10}
                required />
            <input
                placeholder='seat'
                type='number'
                value={booking.seat}
                onChange={(e) => setBooking(oldBooking => ({ ...oldBooking, seat: e.target.value }))}
                required />
            <input
                placeholder='Date'
                type='date'
                value={booking.dob}
                onChange={(e) => setBooking(oldBooking => ({ ...oldBooking, dob: e.target.value }))}
                required />
            <button onClick={() => CustomerService.bookTicket(customer, booking)}>Proceed to pay</button>
            <p>{customer.id} {customer.name} {customer.phone} </p>
            <p>{location.state.bid} {booking.cid} {booking.seat} {booking.dob} </p>
        </div>
    )
}

export default BookTicket