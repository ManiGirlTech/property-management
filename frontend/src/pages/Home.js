import { useEffect, useState } from "react"

const Home = () => {

    const [ properties, setProperties] = useState(null)
    useEffect(() => {
        const fetchProperties = async () => {
            // fetch properties from property api
            const response = await fetch('http://localhost:4000/api/properties')
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
                <p key={property._id}>{property.address}</p>
            ))}
        </div>
       </div>
    )
}

export default Home