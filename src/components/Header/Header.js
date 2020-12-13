import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <Link to="/">
                <h1>The Crochet Corner</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
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
                </ul>
            </nav>
        </header>
    )}