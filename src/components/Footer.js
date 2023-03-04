import React from "react";
import './style/footer.css'

function Footer(){
    return(
        
        <footer className='text-center'>

            <p>Made with 💗 by Brandon Rosencrans in 2023</p>

            <button className='btn bg-light footerBtn'>
            <a href='https://github.com/BRosencrans' target='_blank'rel='noopener noreferrer'>Github</a>
            </button>

        </footer>
        
    )
}

export default Footer;