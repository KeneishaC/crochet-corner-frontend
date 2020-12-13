import { Link  } from 'react-router-dom'

export default function HomePage(props) {
    return (
        <div>

            {
                props.user ?
                <>
                <div>
                    <Link to="/project">Projects</Link>
                    <Link to="" onClick={props.handleLogout}>Logout</Link>
                </div>
                </>
                :
                <>
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
                </>
            }

        </div>
    )
}
