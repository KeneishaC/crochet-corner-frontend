import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header fixed-top sticky-top" >
            <Link to="/">
                <h1>Crochet Corner</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            <li><Link to="/project" className="btn btn-outline-secondary">Projects</Link></li>
                            <li><Link to="" onClick={props.handleLogout} className="btn btn-outline-secondary">Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/signup" className="btn btn-outline-secondary">Signup</Link></li>
                            <li><Link to="/login" className="btn btn-outline-secondary">Login</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )}