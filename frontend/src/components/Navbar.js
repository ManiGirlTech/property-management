import { Link } from 'react-router-dom'
import logo from '../images/house-png-181.png'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Property App</h1>
                    <img className="logo" src={logo} alt="app logo of house" />
                </Link>

            </div>
        </header>
    )
}

export default Navbar