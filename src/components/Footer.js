import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"




function Footer(){
    return(
        <>
        <footer className='fixed-bottom text-center'>

            <p>Made with 💗 by Brandon Rosencrans in 2023</p>

            <button className='btn bg-success footerBtn'>
            <a href='https://github.com/BRosencrans' target='_blank'rel='noopener noreferrer'>Github</a>
            </button>

        </footer>
        </>
    )
}

export default Footer;