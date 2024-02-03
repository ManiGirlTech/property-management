import { useState } from "react"

const PropertyForm = () => {
    const [address, setAddress] = useState('')
    const [price, setPrice] = useState('')
    const [bedrooms, setBedrooms] = useState('')

    return (
        <form className="create">
            <h3>Add a New Property</h3>

            <label>Property Address</label>
            <input 
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />

            <label>Property Price</label>
            <input 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <label>Bedrooms</label>
            <input 
                type="number"
                onChange={(e) => setBedrooms(e.target.value)}
                value={bedrooms}
            />

            <button>Add Property</button>
        </form>
    )
}