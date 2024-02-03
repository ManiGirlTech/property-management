import { useEffect, useState } from "react"

// components
import PropertyDetails from "../components/PropertyDetails"
import PropertyForm from "../components/PropertyForm"

const Home = () => {

    const [ properties, setProperties] = useState(null)
    useEffect(() => {
        const fetchProperties = async () => {
            // fetch properties from property api
            const response = await fetch('/api/properties')
            // passes the json response which is the data from properties controller - becomes an array of objects where each object represents a property
            const json = await response.json()
            

            // if the repsonse is ok, return
            if (response.ok) {
                setProperties(json)
            }

        }

        fetchProperties()
    }, []);


    return (
       <div className="home">
        <div className="properties">
            {properties && properties.map((property) => (
                // <p key={property._id}{property.address}></p>
                <PropertyDetails key={property._id} property={property} />      
            ))}
        </div>
        <PropertyForm />
       </div>
    )
}

export default Home