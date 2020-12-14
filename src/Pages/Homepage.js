import { Link  } from 'react-router-dom'

export default function HomePage(props) {
    console.log(props)
    return (
        <div>

            {
                props.user ?
                <>
                <div className="d-flex align-items-center justify-content-center mt-4 text-center">
                    <h1 >Welcome Back!</h1>
                </div>
                <div style={homePage}>
                    <Link to="/project" className="btn btn-light">Projects</Link>
                    &nbsp;&nbsp;
                    <Link to="" onClick={props.handleLogout} className="btn btn-light">Logout</Link>
                </div>
                </>
                :
                <>
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <h1>Welcome to Crochet Corner,&nbsp; please sign up or log in.</h1>
                </div>
                <div style={homePage}>
                    <Link to="/signup" className="btn btn-light">Signup</Link>
                    &nbsp;&nbsp;
                    <Link to="/login" className="btn btn-light">Login</Link>
                </div>
                </>
            }

        </div>
    )
}


const homePage ={
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
