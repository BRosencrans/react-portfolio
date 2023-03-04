import { Link } from 'react-router-dom';

 function  Header(){
    return(
        <header>
            <h2 className="text-center">Welcome to my Portfolio!</h2>

            <ul className="nav justify-content-around ">
            
                <li className="nav-item"><Link to="/">My Portfolio</Link></li>
                <li className="nav-item"><Link to="/aboutMe">About Me</Link></li>
                <li className="nav-item"><Link to="/resume">My Resume</Link></li>
                <li className="nav-item"><Link to="/contactMe">Send me an Email</Link></li>
                   
            </ul>
           
        </header>
    )
}

export default Header;