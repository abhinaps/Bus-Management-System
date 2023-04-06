import React, { useState } from 'react'
import CustomerService from '../services/CustomerService'
import BookingList from './BookingList'

const MyBooking = (props) => {
    const [customer, setCustomer] = useState({ name: "", phone: "" })
    const [bookingList, setBookingList] = useState([])
    const viewMyBooking = (customer) => {
        CustomerService.viewMyBooking(customer.name, customer.phone).then((res) => {
            setBookingList(res.data)
        })
    }
    return (
        <div>
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
            <button onClick={() => viewMyBooking(customer)} >View Booking</button>
            <BookingList bookings={bookingList} />

        </div>
    )
}

export default MyBooking