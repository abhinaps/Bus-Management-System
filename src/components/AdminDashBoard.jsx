import React from 'react'
import { useNavigate } from 'react-router-dom'



function AdminDashBoard() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/addCustomer')}>Add Customer</button>
            <button onClick={() => navigate('/deleteCustomer')}>Delete Customer</button>
            <button onClick={() => navigate('/addOperator')}>Add Operator</button>
            <button onClick={() => navigate('/deleteOperator')}>Delete Operator</button>
        </div>
    )
}

export default AdminDashBoard