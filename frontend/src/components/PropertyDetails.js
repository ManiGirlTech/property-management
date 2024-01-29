const PropertyDetails = ({ property }) => {
    return (
        <div className="property-details">
            <h4>{property.address}</h4>
            <p><strong>Price:  </strong>${property.price}</p>
            <p><strong>Bedrooms: </strong>{property.price}</p>
            <p>{property.createdAt}</p>
        </div>
    )
}

export default PropertyDetails