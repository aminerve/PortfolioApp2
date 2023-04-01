import './index.scss'
import { Link } from 'react-router-dom'

export default function Sidebar(){
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={''}/>
            </Link>
        </div>
    )
}