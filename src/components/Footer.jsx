import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div>
            <h3 onClick={() => navigate("/welcomeAdmin")}>Admin</h3>
            <h3 onClick={() => navigate("/welcomeOperator")}>Operator</h3>
        </div>
    )
}
