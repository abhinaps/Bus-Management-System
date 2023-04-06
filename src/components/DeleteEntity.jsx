import React, { useState } from 'react'

function DeleteEntity(props) {
    const [id, setId] = useState("")
    return (
        <div>
            <input
                placeholder='id'
                value={id}
                onChange={(e) => setId(e.target.value)}
                type='number'
                required />
            <button onClick={() => props.deleteFuntion(id)} >Delete</button>
        </div>
    )
}

export default DeleteEntity