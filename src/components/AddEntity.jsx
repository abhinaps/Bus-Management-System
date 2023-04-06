import React, { useState } from 'react'

function AddEntity(props) {
    const [entity, setEntity] = useState({ id: "", name: "", phone: "" })

    return (
        <div>
            <input
                placeholder='id'
                value={entity.id}
                onChange={(e) => setEntity(oldEntity => ({ ...oldEntity, id: e.target.value }))}
                type='number'
                required />
            <input
                placeholder='name'
                value={entity.name}
                onChange={(e) => setEntity(oldEntity => ({ ...oldEntity, name: e.target.value }))}
                type='text'
                required />
            <input
                placeholder='phone'
                type='number'
                value={entity.phone}
                onChange={(e) => setEntity(oldOperator => ({ ...oldOperator, phone: e.target.value }))}
                minLength={10}
                maxLength={10}
                required />
            <button onClick={() => props.addFuntion(entity)} >Add</button>
        </div>
    )
}

export default AddEntity