import React, { useState } from 'react'
import OperatorService from '../services/OperatorService'
import BookingList from './BookingList'

function ViewBooking() {
    const [operator, setOperator] = useState("")
    const [bookingList, setBookingList] = useState([])
    const operatorBooking = (operator) => {
        OperatorService.getBookingListByOperator(operator).then((res) => {
            setBookingList(res.data)
        })
    }
    return (
        <div>
            <input
                placeholder='operator id'
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                type='number'
                required />
            <button onClick={() => operatorBooking(operator)}>Search</button>
            <BookingList bookings={bookingList} />
        </div>
    )
}

export default ViewBooking