import React, { useState } from 'react'
import CustomerService from '../services/CustomerService'
import BusList from './BusList'

const SearchBus = (props) => {
    const [from, setfrom] = useState("")
    const [to, setTo] = useState("")
    const [busList, setBusList] = useState([])
    const searchBusBySrcAndDst = (from, to) => {
        CustomerService.getBusBySrcAndDst(from, to).then((res => {
            setBusList(res.data)
        }))
    }
    return (
        <div>
            <input
                placeholder='From'
                type='text'
                name='src'
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                required />
            <input
                placeholder='To'
                type='text'
                name='dst'
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required />
            <button onClick={() => searchBusBySrcAndDst(from, to)}>Search</button>
            <BusList buses={busList} />
        </div>
    )
}
export default SearchBus