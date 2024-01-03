import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './style.css'

const NavBar = () => {
    return(
        <div>
            <Link to='/'>
                <Button variant='danger'className='mx-2 bebas fs-5'>Home</Button>
            </Link>
            <Link to='/projects'>
                <Button variant='warning' className='mx-2 bebas fs-5'>Projects</Button>
            </Link>
            <Link to='/test'>
                <Button variant='warning' className='mx-2 bebas fs-5'>Test</Button>
            </Link>
            <Link to='/browser'>
                <Button variant='warning' className='mx-2 bebas fs-5'>Browser</Button>
            </Link>
        </div> 
    )
}

export default NavBar