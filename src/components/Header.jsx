import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 onClick={() => navigate("/")} >Bus Management System</h1>
            <div onClick={() => navigate("/myBooking")} >My bookings</div>
        </div>
    )
}
