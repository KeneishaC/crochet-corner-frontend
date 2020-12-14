import { Link  } from 'react-router-dom'

export default function HomePage(props) {
    console.log(props)
    return (
        <div>

            {
                props.user ?
                <>
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <h1 >Welcome Back!</h1>
                </div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="" onClick={props.handleLogout} className="btn">Logout</Link>
                </>
                :
                <>
                <div>
                    <h1>Welcome to Crochet Corner, please sign up or log in.</h1>
                    <Link to="/signup" className="btn">Signup</Link>
                    <Link to="/login" className="btn">Login</Link>
                </div>
                </>
            }

        </div>
    )
}


const homePage ={

}
