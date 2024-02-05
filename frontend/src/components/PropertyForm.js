import { useState } from "react"
import { usePropertiesContext } from "../hooks/usePropertiesContext"

const PropertyForm = () => {
    const {dispatch} = usePropertiesContext()
    const [address, setAddress] = useState('')
    const [price, setPrice] = useState('')
    const [bedrooms, setBedrooms] = useState('')
     const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const property = { address, price, bedrooms}

        const repsonse = await fetch('/api/properties', {
            method: 'POST',
            body: JSON.stringify(property),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await repsonse.json()

        if (!repsonse.ok) {
            setError(json.error)
        }
        if (Response.ok) {
            setAddress('')
            setPrice('')
            setBedrooms('')
            setError(null)
            console.log("new property added successfully")
            dispatch({type: 'CREATE_PROPERTY', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
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
            { error && <div className="error">{error}</div>}
        </form>
    )
}

export default PropertyForm