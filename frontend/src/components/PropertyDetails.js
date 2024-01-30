const PropertyDetails = ({ property }) => {
    return (
        <div className="property-details">
            <img src="https://placehold.jp/150x150.png"  alt="image placeholder"/>
            <h4>{property.address}</h4>
            <p><strong>Price: </strong>${property.price}</p>
            <p><strong>Bedrooms: </strong>{property.price}</p>
            <p>{property.createdAt}</p>
        </div>
    )
}

export default PropertyDetails