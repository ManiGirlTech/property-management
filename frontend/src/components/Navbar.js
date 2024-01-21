import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="containder">
                <Link to='/'>
                    <h1>Property App</h1>
                </Link>

            </div>
        </header>
    )
}