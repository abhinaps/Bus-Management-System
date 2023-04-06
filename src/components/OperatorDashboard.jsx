import React from 'react'
import { useNavigate } from 'react-router-dom'

function OperatorDashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/viewBooking')}>View Booking</button>
        </div>
    )
}

export default OperatorDashboard