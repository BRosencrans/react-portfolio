import { Link } from 'react-router-dom';

export default function  Header(){
    return(
        <header>
            <h2>Welcome to my Portfolio</h2>
            <nav>
            <ul>
                <li><Link to="/">My Portfolio</Link></li>
                <li><Link to="/aboutMe">About Me</Link></li>
                <li><Link to="/resume">My Resume</Link></li>
                <li><Link to="/contactMe">Send me an Email</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}