const PropertyDetails = ({ property }) => {
    return (
        <div className="property-details">
            <h4>{property.address}</h4>
            <p><strong>Price: </strong>{property.price}</p>
        </div>
    )
}

export default PropertyDetails