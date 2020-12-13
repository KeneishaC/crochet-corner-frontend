import { Link  } from 'react-router-dom'

export default function HomePage(props) {
    return (
        <div>

            {
                props.user ?
                <>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                </>
                :
                <>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </>
            }

        </div>
    )
}
