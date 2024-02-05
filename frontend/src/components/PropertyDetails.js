import { usePropertiesContext } from "../hooks/usePropertiesContext"

const PropertyDetails = ({ property }) => {
    const dispatch = usePropertiesContext()

    const handleClick = async () => {
        const response = await fetch('/api/properties/' + property._id, {
            method: 'DELETE_PROPERTY'
        })
        const json = await response.json()

        // make sure response is okay
        if (response.ok) {
            dispatch({ type: 'DELETE_PROPERTY', payload: json })
        }
    }

    return (
        <div className="property-details">
            <img src="https://placehold.jp/150x150.png"  alt="image placeholder"/>
            <h4>{property.address}</h4>
            <p><strong>Price: </strong>${property.price}</p>
            <p><strong>Bedrooms: </strong>{property.price}</p>
            <p>{property.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default PropertyDetails